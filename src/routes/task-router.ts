import { TaskController } from "../controllers/taskController";
import { Router } from "express";

const router = Router()

router.get("/", TaskController.showTasks)
router.get("/:id", TaskController.showTaskById)
router.post("/", TaskController.createTask)
router.put("/:id", TaskController.updateTask)
router.delete("/:id", TaskController.deleteTask)

export default router