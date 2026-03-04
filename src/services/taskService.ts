import { Task } from "../entities/Task";
import { AppSource } from "../database/data-source";

const taskRepository = AppSource.getRepository(Task)

export class TaskService{
    static async showTasks(): Promise<Task[]>{
        return await taskRepository.find()
    }

    static async showTaskById(id: number): Promise<Task>{
        const task = await taskRepository.findOneBy({ id })
        if(!task){
            throw new Error("User not found")
        }

        return task
    }

    static async createTask(data: Partial<Task>): Promise<Task>{
        const task = taskRepository.create(data)
        await taskRepository.save(task)

        return task
    }

    static async updateTask(id: number, data: Partial<Task>): Promise<Task>{
        await taskRepository.update(id, data)
        const task = await taskRepository.findOneBy({ id })

        if(!task){
            throw new Error("Task not found")
        }
        taskRepository.save(task)

        return task
    }

    static async deleteTask(id: number): Promise<Task>{
        await taskRepository.delete(id)

        const task = await taskRepository.findOneBy({ id })
        if(!task){
            throw new Error("Task not found")
        }
        taskRepository.save(task)

        return task
    }

}