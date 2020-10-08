// Types
import { IUser } from 'interfaces/auth/IUser'
// Mongoose
import mongoose from 'mongoose'

const User = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Please enter a full name'],
		},
		email: {
			type: String,
			required: [true, 'Please enter a email'],
			lowercase: true,
			unique: true,
			index: true
		},
		phone: {
			type: Number,
		},
		createdAt: {
			type: Date
		},
		updatedAt: {
			type: Date
		}
	},
	{ timestamps: true }
)

export default mongoose.model<IUser & mongoose.Document>('User', User)
