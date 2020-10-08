// Dependency Injection
import { Service, Inject } from 'typedi'
// Axios
import axios from 'axios'
// Configs
import config from "../../config"

@Service()
export default class Car {
	constructor(
		@Inject('logger') private logger,
	) {}

	public async getFordCars() {
    const { cococheAPI: API_URL } = config;
		try {
			const { data: allCars } = await axios.get(API_URL)

			return allCars
		} catch (err) {
			this.logger.error(err)
			throw err
		}
	}

}
