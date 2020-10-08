// Router
import { Router } from 'express'
// Routes
import register from './routes/auth/create-user'
import users from "./routes/auth/user"
import car from './routes/rent-cars/car'

export default () => {
	const app = Router()
	register(app)
	users(app)
	car(app)

	return app
}
