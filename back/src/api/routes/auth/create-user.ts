// Express
import { Router, Request, Response } from 'express'
// Services
import services from '../../../services/auth/create-user'
// Dependency Injection
import { Container } from 'typedi'

// Definitions
const route = Router()

export default (app: Router) => {
	app.use('/', route)

	route.post('/create_user', async (req: Request, res: Response) => {
		try {
			const serviceInstance = Container.get(services)
			const userCreated = await serviceInstance.createUser(req)
			userCreated.err
			?	res.status(403).json({ error: userCreated.err })
			:	res.status(201).json({ data: userCreated,	message: 'user created'	})
		} catch (err) {
			console.log(err)
			throw err
		}
	})
}
