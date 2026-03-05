import { TaskController } from "../controllers/taskController";
import { Router } from "express";
import { authMiddleware } from "../middlewares/authUser";

const router = Router()

router.get("/", authMiddleware, TaskController.getUserTasks)
router.get("/:id", authMiddleware, TaskController.showTaskById)
router.post("/", authMiddleware, TaskController.createTask)
router.put("/:id", authMiddleware, TaskController.updateTask)
router.delete("/:id", authMiddleware, TaskController.deleteTask)

export default router