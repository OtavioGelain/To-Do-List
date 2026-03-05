import { UserController } from "../controllers/userController";
import { Router } from "express";

const router = Router() 

router.get("/", UserController.showUser)
router.get("/:id", UserController.showUserById)
router.post("/", UserController.createUser)
router.post("/login", UserController.login)
router.put("/:id", UserController.updateUser)
router.delete("/:id", UserController.deleteUser)

export default router