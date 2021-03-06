// Dependency Injection
import { Service, Inject } from 'typedi'
// Models
import userModel from '../../models/auth/user'

@Service()
export default class Register {
	constructor(
		@Inject('logger') private logger,
		@Inject('userModel') private userModel
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

	public async createUser(payload) {
		const { body: newUser } = payload
		try {
			const userCreated = await userModel.create(newUser)
			const { _id, createdAt } = userCreated

			return { id: _id, createdAt }
		} catch (err) {
			this.logger.error(err)
			return { err }
		}
	}
}
