import { Request, Response } from 'express'
import { TaskService } from '../services/taskService'

export class TaskController{

    static async getUserTasks(req: Request, res: Response){
        const userId = (req as any).userId

        const tasks = await TaskService.getUserTask(userId)

        return res.json(tasks)
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
            const userId = (req as any).userId

            const task = await TaskService.createTask(req.body, userId)

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

            const task = await TaskService.deleteTask(id)

            return res.status(200).json(task)
        }catch(error){
            if(error instanceof Error){
                return res.status(500).json({message: error.message})
            }
        }
    }
}