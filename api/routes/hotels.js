import { Router } from 'express'
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotelRooms, getHotels, updateHotel } from '../controllers/hotel.js';
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

const router = Router()

// CREATE
router.post('/', verifyAdmin, createHotel)

// UPDATE
router.put('/:id', verifyAdmin, updateHotel)

// DELETE
router.delete('/:id', verifyAdmin, deleteHotel)

// GET A
router.get('/find/:id', getHotel)

// GET ALL
router.get('/', getHotels)

router.get('/countByCity', countByCity)
router.get('/countByType', countByType)
router.get('/room/getHotelRoom/:id', getHotelRooms);

// router.get('/room/getHotelRoom', (req, res) => {
// 	res.send('hello 2')
// })

// router.get('/promise', promise)

export default router;