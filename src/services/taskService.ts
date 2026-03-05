import { Task } from "../entities/Task";
import { AppSource } from "../database/data-source";

const taskRepository = AppSource.getRepository(Task)

export class TaskService{

    static async showTaskById(id: number): Promise<Task>{
        const task = await taskRepository.findOneBy({ id })

        if(!task){
            throw new Error("Task not found")
        }

        return task
    }

    static async createTask(data: Partial<Task>, userId: number): Promise<Task>{

        const task = taskRepository.create({
            ...data,
            user: { id: userId }
        })

        await taskRepository.save(task)

        return task
    }

    static async updateTask(id: number, data: Partial<Task>): Promise<Task>{

        const task = await taskRepository.findOneBy({ id })

        if(!task){
            throw new Error("Task not found")
        }

        await taskRepository.update(id, data)

        const updatedTask = await taskRepository.findOneBy({ id })

        return updatedTask!
    }

    static async deleteTask(id: number): Promise<void>{
        const task = await taskRepository.findOneBy({ id })

        if(!task){
            throw new Error("Task not found")
        }

        await taskRepository.delete(id)
    }

    static async getUserTask(userId: number): Promise<Task[]>{
        return await taskRepository.find({
            where: {
                user:{
                    id: userId
                }
            }
        })
    }

}