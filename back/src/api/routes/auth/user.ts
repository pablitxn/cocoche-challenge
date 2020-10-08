// Express
import { Router, Request, Response } from 'express'
// Services
import services from '../../../services/auth/user'
// Dependency Injection
import { Container } from 'typedi'

// Definitions
const route = Router()

export default (app: Router) => {
	app.use('/', route)

	route.get('/users', async (req: Request, res: Response) => {
		try {
			const serviceInstace = Container.get(services)
			const usersList = await serviceInstace.getUsers()

			res.status(200).json({
				data: usersList,
				message: 'users listered'
			})
		} catch (err) {
			console.log(err)
			throw err
		}
	})
}
