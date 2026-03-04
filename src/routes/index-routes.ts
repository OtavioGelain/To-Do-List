import routerUser  from "./user-routes";
import routerTask from "./task-router";
import { Router } from "express";

const router = Router()

router.use("/users", routerUser)
router.use("/tasks", routerTask)

export default router
