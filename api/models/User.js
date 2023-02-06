import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
	username: { type: String, required: true, unique: true, },
	email: { type: String, required: true, unique: true, },
	country: { type: String, default: 'THA' },
	img: { type: String, },
	city: { type: String, default: 'bangkok' },
	phone: { type: String, default: '123456789' },
	password: { type: String, required: true, },
	isAdmin: { type: Boolean, default: false, },
}, {
	timestamps: true,
})

export default mongoose.model('User', userSchema)