import * as jwt from 'jsonwebtoken';
import { env } from '../env/envSchema';

export function generateToken(id: number, email: string){
    console.log(process.env.SENHA_JWT)
    const key = process.env.SENHA_JWT
    const token = jwt.sign(
        {id, email},
        key as string,
        {expiresIn: '1h'} 
    );
    return token
}

