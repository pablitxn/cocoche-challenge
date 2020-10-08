// Express
import { Router, Request, Response } from 'express'
// Services
import services from '../../../services/rent-cars/'
// Dependency Injection
import { Container } from 'typedi'

// Definitions
const route = Router()

export default (app: Router) => {
	app.use('/', route)

	route.get('/get_all', async (req: Request, res: Response) => {
		// try {
		// 	const offerServiceInstance = Container.get(OfferService)
		// 	const offers = await offerServiceInstance.getOffers()

		// 	res.status(200).json({
		// 		data: offers,
		// 		message: 'offers listed'
		// 	})
		// } catch (err) {
		// 	res.status(500).send(err)
		// }
	})

	route.get('/get_ford_cars', async (req: Request, res: Response) => {
		// try {
		// 	const offerServiceInstance = Container.get(OfferService)
		// 	const createdOffer = await offerServiceInstance.createOffer(req)

		// 	res.status(201).json({
		// 		data: createdOffer,
		// 		message: 'offer created'
		// 	})
		// } catch (err) {
		// 	console.log(err)
		// 	throw err
		// }
	})

}
