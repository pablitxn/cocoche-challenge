// Router
import { Router } from 'express'
// Routes
import users from "./routes/auth/user"
import car from './routes/rent-cars/car'

export default () => {
	const app = Router()
	users(app)
	car(app)

	return app
}
