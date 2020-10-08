// Dependency Injection
import { Service, Inject } from 'typedi'
// Models
import userModel from '../../models/auth/user'

@Service()
export default class Register {
	constructor(
		@Inject('logger') private logger,
	) {}

	public async getUsers() {
		try {
			const usersList = await userModel.find({})

			return usersList
		} catch (err) {
			this.logger.error(err)
			throw err
		}
	}

}
