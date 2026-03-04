import { z } from 'zod'
import 'dotenv/config'

const envSchema = z.object({
    DB_PORT: z.coerce.number().default(5432),
    DB_HOST: z.string().default('localhost'),
    DB_USER: z.string().default('postgres'),
    DB_PASSWORD: z.string().default('123456'),
    DB_NAME: z.string().default('todo-list'),

    SERVER_PORT: z.coerce.number().default(3000)
})

const _env = envSchema.safeParse(process.env)

if(!_env){
    console.log("Invalid credencials")
}

export const env = _env.data