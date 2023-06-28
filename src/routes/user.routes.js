import { Router } from "express";
import { isAdmin, verifyToken } from "../middlewares/authJWT.js";
import { checkExistingUser, checkExistingRole} from '../middlewares/verifySignUp.js'
import { createUser } from "../controllers/user.controller.js";

const router = Router()

router.post("/", createUser);

export default router;