import User from "../models/User.js";

export const createUser = async (req, res, next) => {
	try {
		const user = new User(req.body)
		const saved = await User.save();
		res.status(200).json(saved)
	} catch (error) {
		next(error)
	}
}

export const updateUser = async (req, res, next) => {
	try {
		const { id } = req.params
		// const user = await User.findByIdAndUpdate(
		// 	id,
		// 	{ $set: req.body, },
		// 	{ new: true, }
		// )
		const user = await User.findById(id);
		await user.updateOne({

		})
		res.status(200).json(user)
	} catch (error) {
		next(error)
	}
}

export const deleteUser = async (req, res, next) => {
	try {
		const { id } = req.params
		await User.findByIdAndDelete(
			id
		)
		res.status(200).json(`User ${id} has been removed!`)
	} catch (error) {
		next(error)
	}
}

export const getUser = async (req, res, next) => {
	try {
		const { id } = req.params
		const user = await User.findById(id)
		res.status(200).json(user)
	} catch (error) {
		next(error)
	}
}

export const getUsers = async (req, res, next) => {
	try {
		const users = await User.find()
		res.status(200).json(users)
	} catch (error) {
		next(error)
	}
}