import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

import User from "../models/User.js"
import createError from '../utils/createError.js'

export const register = async (req, res, next) => {
	try {
		const { username, email, password, } = req.body
		const salt = await bcryptjs.genSalt(10);
		const hashedPassword = await bcryptjs.hash(password, salt)
		const user = new User({
			username,
			email,
			password: hashedPassword,
		})
		const newUser = await user.save();
		res.status(200).json(newUser)
	} catch (error) {
		next(error)
	}
}

export const login = async (req, res, next) => {
	try {
		debugger;
		const { email, password: pwd } = req.body
		const user = await User.findOne({ email, })
		if (!user && !user.username) {
			return next(createError(404, 'Not found!')) // res.status(403).json('Not found!')
		}
		const isValid = await bcryptjs.compare(pwd, user.password)
		if (!isValid) {
			return next(createError(400, 'Wrong password!'))
		}

		const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT)

		const { password, isAdmin, ...other } = user._doc;
		res.cookie('access_token', token, { httpOnly: true, }).status(200).json(other)
	} catch (error) {
		next(error)
	}
}