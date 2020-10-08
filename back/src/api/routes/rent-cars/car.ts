// Express
import { Router, Request, Response } from 'express'
// Services
import services from "../../../services/rent-cars/car"
// Dependency Injection
import { Container } from 'typedi'

// Definitions
const route = Router()

export default (app: Router) => {
	app.use('/', route)

	route.get('/get_all', async (req: Request, res: Response) => {
		try {
			const serviceInstance = Container.get(services)
			const cars = await serviceInstance.getFordCars()

			res.status(200).json({
				data: cars,
				message: 'all cars avaible'
			})
		} catch (err) {
			res.status(500).send(err)
		}
	})

	route.get('/get_ford_cars', async (req: Request, res: Response) => {
		try {
			const serviceInstance = Container.get(services)
			const cars = await serviceInstance.getFordCars()

			/**
			 * filtrar autos ford
			 */

			res.status(200).json({
				data: cars,
				message: 'all cars avaible'
			})
		} catch (err) {
			res.status(500).send(err)
		}
	})

}
