import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { env } from '../env/envSchema'
import { User } from '../entities/User'
import { Task } from '../entities/Task'

export const AppSource = new DataSource({
    type: 'postgres',
    host: env?.DB_HOST,
    port: env?.DB_PORT,
    username: env?.DB_USER,
    password: env?.DB_PASSWORD,
    database: env?.DB_NAME,
    entities: [User, Task],
    synchronize: false,
    migrations: ['./src/database/migrations/*.ts']
})