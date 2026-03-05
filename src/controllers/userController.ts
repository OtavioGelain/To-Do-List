import { Response, Request } from "express";
import { UserService } from "../services/userService";

export class UserController{
    static async showUser(req: Request, res: Response): Promise<Response>{
        try{
            const users = await UserService.findUsers()
            return res.status(200).json(users)
        }catch(error: any){
            return res.status(500).json({message: error.message})
        }
    }
    static async showUserById(req: Request, res: Response): Promise<Response | undefined>{
        try{
            const id = Number(req.params.id)

            const user = await UserService.findUserById(id)
            return res.status(200).json(user)
        }catch(error){
            if(error instanceof Error){
                return res.status(500).json({message: error.message})
            }
        }
    }
    static async createUser(req: Request, res: Response): Promise<Response | undefined>{
        try{
            const user = await UserService.createUser(req.body)

            return res.status(200).json(user)
        }catch(error){
            if(error instanceof Error){
                return res.status(500).json({message: error.message})
            }
        }
    }
    static async updateUser(req: Request, res: Response): Promise<Response | undefined>{
        try{
            const id = Number(req.params.id)
            const user = await UserService.updateUser(id, req.body)

            return res.status(201).json(user)
        }catch(error){
            if(error instanceof Error){
                return res.status(500).json({message: error.message})
            }
        }
    }
    static async deleteUser(req: Request, res: Response): Promise<Response | undefined>{
        try{
            const id = Number(req.params.id)
            const user = await UserService.deleteUser(id)
            
            return res.status(500).json(user)
        }catch(error){
            if(error instanceof Error){
                return res.status(500).json({message: error.message})
            }
        }
    }

    static async login(req: Request, res: Response): Promise<Response | undefined>{
        try{
            const { email, password } = req.body
            const user = await UserService.login(email, password)

            return res.status(200).json({message:"Login realizado", user})
        }catch(error){
            if(error instanceof Error){
                return res.status(200).json({message: error.message}   )
            }
        }
    }
}