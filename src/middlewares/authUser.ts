import { Request, Response, NextFunction } from "express";
import  jwt  from "jsonwebtoken";
import { env } from "../env/envSchema";

export function authMiddleware(req: Request, res: Response, next: NextFunction){

    const authHeader = req.headers.authorization

    if(!authHeader){
        return res.status(401).json({ message: "Token missing" })
    }

    const token = authHeader.split(" ")[1]

    const decoded = jwt.verify(token, process.env.SENHA_JWT as string) as any

    (req as any).userId = decoded.id

    next()
}