import * as jwt from 'jsonwebtoken';
import { env } from '../env/envSchema';

export function generateToken(id: number, email: string){
    const key = env?.SENHA_JWT
    const token = jwt.sign(
        {id, email},
        key as string,
        {expiresIn: '1h'} 
    );
    return token
}

