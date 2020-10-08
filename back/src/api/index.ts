// Router
import { Router } from 'express'
// Routes
import register from './routes/auth/register'
import car from './routes/rent-cars/car'

export default () => {
	const app = Router()
	register(app)
	car(app)

	return app
}
