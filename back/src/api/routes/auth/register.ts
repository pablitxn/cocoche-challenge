// Express
import { Router, Request, Response } from 'express'
// Services
import services from '../../../services/auth/'
// Dependency Injection
import { Container } from 'typedi'

// Definitions
const route = Router()

export default (app: Router) => {
	app.use('/', route)

	route.post('/register', async (req: Request, res: Response) => {
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
