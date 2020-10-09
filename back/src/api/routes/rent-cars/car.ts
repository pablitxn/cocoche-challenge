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

	route.get('/get_all/:page', async (req: Request, res: Response) => {
		try {
			const serviceInstance = Container.get(services)
			const carList = await serviceInstance.getAllCars(req)

			res.status(200).json({
				data: carList,
				message: 'all cars avaible'
			})
		} catch (err) {
			res.status(500).send(err)
		}
	})

	route.get('/get_ford_cars/:page', async (req: Request, res: Response) => {
		try {
			const serviceInstance = Container.get(services)
			const fordCars = await serviceInstance.getFordCars(req)

			res.status(200).json({
				data: fordCars,
				message: 'ford cars'
			})
		} catch (err) {
			res.status(500).send(err)
		}
	})

}
