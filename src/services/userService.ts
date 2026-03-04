import bcrypt from 'bcrypt'
import { User } from "../entities/User";
import { AppSource } from "../database/data-source";

const userRepository = AppSource.getRepository(User)

export class UserService{ 
    static async findUsers(): Promise<User[]>{
        const user = await userRepository.find()
        return user
    }

    static async findUserById(id: number): Promise<User>{
        const userById = await userRepository.findOneBy({ id })
        if(!userById){
            throw new Error("User not found")
        }
        return userById
    }    
    static async createUser(data: Partial<User>): Promise<User>{
        const hashedPassword = await bcrypt.hash(data.password!, 10)
        const user = userRepository.create({...data, password:hashedPassword })
        await userRepository.save(user)

        return user
    }

    static async updateUser(id:number, data: Partial<User>): Promise<User>{
        await userRepository.update(id, data)

        const user = await userRepository.findOneBy({ id })
        if(!user){
            throw new Error("User not found")
        }

        userRepository.save(user)

        return user
    }

    static async deleteUser(id: number): Promise<User>{
        await userRepository.delete(id)

        const user = await userRepository.findOneBy({ id })
        if(!user){
            throw new Error("User not found")
        }

        userRepository.save(user)

        return user
    }
}