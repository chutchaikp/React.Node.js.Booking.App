import Room from "../models/Room.js";
import Hotel from '../models/Hotel.js'

export const createRoom = async (req, res, next) => {
	try {
		const { id: hotelId } = req.params; // hotel id
		const room = new Room(req.body)
		const saved = await room.save();
		debugger;
		await Hotel.findByIdAndUpdate(hotelId, {
			$push: { rooms: saved._id, }
		})

		res.status(200).json(saved)
	} catch (error) {
		next(error)
	}
}

export const updateRoom = async (req, res, next) => {
	try {
		const { id } = req.params
		const room = await Room.findByIdAndUpdate(
			id,
			{ $set: req.body, },
			{ new: true, }
		)
		res.status(200).json(room)
	} catch (error) {
		next(error)
	}
}

export const deleteRoom = async (req, res, next) => {
	try {
		const { id } = req.params
		await Room.findByIdAndDelete(
			id
		)
		res.status(200).json(`Room ${id} has been removed!`)
	} catch (error) {
		// res.status(500).json(error.message)
		next(error)
	}
}

export const getRoom = async (req, res, next) => {
	try {
		const { id } = req.params
		const room = await Room.findById(id)
		res.status(200).json(room)
	} catch (error) {
		// res.status(500).json(error.message)
		next(error)
	}
}

export const getRooms = async (req, res, next) => {
	try {
		const rooms = await Room.find()
		res.status(200).json(rooms)
	} catch (error) {
		next(error)
	}
}