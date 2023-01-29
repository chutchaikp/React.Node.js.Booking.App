import { Router } from 'express'
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from '../controllers/hotel.js';
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

const router = Router()

// CREATE
router.post('/', verifyAdmin, createHotel)

// UPDATE
router.put('/:id', verifyAdmin, updateHotel)

// DELETE
router.delete('/:id', verifyAdmin, deleteHotel)

// GET A
router.get('/:id', verifyUser, getHotel)

// GET ALL
router.get('/', verifyUser, getHotels)

export default router;