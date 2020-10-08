// Dependency Injection
import { Service, Inject } from 'typedi'
// Models
import userModel from '../../models/auth/user'

@Service()
export default class Register {
	constructor(
		@Inject('logger') private logger,
	) {}

	public async createUser(payload) {
		const { body: newUser } = payload
		try {
			const userRegistered = await userModel.create(newUser)

			return userRegistered
		} catch (err) {
			this.logger.error(err)
			throw err
		}
	}

}
