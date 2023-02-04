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
		console.log(req.query)
		const { min, max, limit, ...others } = req.query
		// const { feature, limit, } = req.query
		// const hotels = await Hotel.find({ feature }).limit(limit)
		const hotels = await Hotel.find({
			...others,
			cheapestPrice: { $gt: min || 1, $lt: max || 2000 }
		}).limit(limit)
		res.status(200).json(hotels)
	} catch (error) {
		next(error)
	}
}

// 'path/:id/:name'  	req.param 
// post 							req.body
// path?data=hello&desc=world		
// 				req.query.data req.query.world

export const countByCity = async (req, res, next) => {
	try {
		const cities = req.query.cities.split(',');
		const counts = await Promise.all(cities.map(city => {
			return Hotel.countDocuments({ city })
		}))

		res.status(200).json(counts)
	} catch (error) {
		next(error)
	}
}
export const countByType = async (req, res, next) => {
	try {
		const hotelCount = await Hotel.countDocuments({ type: 'hotel', })
		const apartmentCount = await Hotel.countDocuments({ type: 'apartment' })
		const resortCount = await Hotel.countDocuments({ type: 'resort' })
		const villaCount = await Hotel.countDocuments({ type: 'villa' })
		const cabinCount = await Hotel.countDocuments({ type: 'cabin' })

		res.status(200).json([
			{ type: 'hotel', count: hotelCount },
			{ type: 'apartment', count: apartmentCount },
			{ type: 'resort', count: resortCount },
			{ type: 'villa', count: villaCount },
			{ type: 'cabin', count: cabinCount },

		])
	} catch (error) {
		next(error)
	}
}

export const promise = async (req, res, next) => {
	const data = await Promise.all([1, 2])
	res.status(200).json(data);
}