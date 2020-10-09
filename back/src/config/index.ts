// Dotenv
import dotenv from 'dotenv'

process.env.NODE_ENV = process.env.NODE_ENV || 'development'
const envFound = dotenv.config()

if (envFound.error) {
	throw new Error("⚠️  Couldn't find .env file  ⚠️")
}

export default {
	// Port
	port: process.env.PORT,
	// Data Base URL
	databaseURL: process.env.MONGODB_URI,
	// Images S3 Storage
	imagesURL: process.env.URL_S3,
	// Cocoche API
	cococheAPI: process.env.URL_API,
	// Logs dev
	logs: {
		level: process.env.LOG_LEVEL || 'silly'
	},
	// Endpoint prefix
	api: {
		prefix: '/api'
	}
}
