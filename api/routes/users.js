import { Router } from "express";
import { deleteUser, deleteUserByUsername, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = Router()

router.post('/:id', verifyUser, updateUser)
router.delete('/id/:id', verifyUser, deleteUser)
router.delete('/username/:username', verifyUser, deleteUserByUsername)
router.get('/:id', verifyUser, getUser)
router.get('/', verifyAdmin, getUsers)

export default router;