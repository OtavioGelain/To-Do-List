import { Request, Response } from 'express'
import { TaskService } from '../services/taskService'

export class TaskController{
    static async showTasks(req: Request, res: Response): Promise<Response | undefined>{
        try{
            const tasks = await TaskService.showTasks()

            return res.status(200).json(tasks)
        }catch(error){
            if(error instanceof Error){
                return res.status(500).json({message: error.message})
            }
        }
    }

    static async showTaskById(req: Request, res: Response): Promise<Response | undefined>{
        try{
            const id = Number(req.params.id)
            const task = await TaskService.showTaskById(id)

            return res.status(200).json(task)
        }catch(error){
            if(error instanceof Error){
                return res.status(500).json({message: error.message})
            }
        }
    }
    static async createTask(req: Request, res: Response): Promise<Response | undefined>{
        try{
            const task = await TaskService.createTask(req.body)

            return res.status(200).json(task)
        }catch(error){
            if(error instanceof Error){
                return res.status(500).json({message: error.message})
            }
        }
    }
    static async updateTask(req: Request, res: Response): Promise<Response | undefined>{
        try{
            const id = Number(req.params.id)
            const task = await TaskService.updateTask(id, req.body)

            return res.status(200).json(task)
        }catch(error){
            if(error instanceof Error){
                return res.status(500).json({message: error.message})
            }
        }
    }
    static async deleteTask(req: Request, res: Response): Promise<Response | undefined>{
        try{
            const id = Number(req.params.id)
            const task = TaskService.deleteTask(id)

            return res.status(200).json(task)
        }catch(error){
            if(error instanceof Error){
                return res.status(500).json({message: error.message})
            }
        }
    }
}