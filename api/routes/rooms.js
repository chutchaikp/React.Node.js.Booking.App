import { Router } from 'express'
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from '../controllers/Room.js';
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

const router = Router()

// CREATE
router.post('/:id', verifyAdmin, createRoom)

// UPDATE
router.put('/:id', verifyAdmin, updateRoom)

// DELETE
router.delete('/:id', verifyAdmin, deleteRoom)

// GET A
router.get('/:id', verifyUser, getRoom)

// GET ALL
router.get('/', verifyUser, getRooms)

export default router;