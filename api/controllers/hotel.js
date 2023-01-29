import Hotel from "../models/Hotel.js";

export const createHotel = async (req, res, next) => {
	try {
		const hotel = new Hotel(req.body)
		const saved = await hotel.save();
		res.status(200).json(saved)
	} catch (error) {
		next(error)
	}
}

export const updateHotel = async (req, res, next) => {
	try {
		const { id } = req.params
		const hotel = await Hotel.findByIdAndUpdate(
			id,
			{ $set: req.body, },
			{ new: true, }
		)
		res.status(200).json(hotel)
	} catch (error) {
		next(error)
	}
}

export const deleteHotel = async (req, res, next) => {
	try {
		const { id } = req.params
		await Hotel.findByIdAndDelete(
			id
		)
		res.status(200).json(`Hotel ${id} has been removed!`)
	} catch (error) {
		// res.status(500).json(error.message)
		next(error)
	}
}

export const getHotel = async (req, res, next) => {
	try {
		const { id } = req.params
		const hotel = await Hotel.findById(id)
		res.status(200).json(hotel)
	} catch (error) {
		// res.status(500).json(error.message)
		next(error)
	}
}

export const getHotels = async (req, res, next) => {
	try {
		const hotels = await Hotel.find()
		res.status(200).json(hotels)
	} catch (error) {
		next(error)
	}
}