// Dependency Injection
import { Service, Inject } from 'typedi'
// Axios
import axios from 'axios'
// Configs
import config from "../../config"
// Types
import { ICarList } from "../../interfaces/rent-cars"

@Service()
export default class Car {
	constructor(
		@Inject('logger') private logger,
	) {}

	public async getAllCars() {
    const { cococheAPI: API_URL } = config;
		try {
			const { data: allCars }: ICarList = await axios.get(API_URL)

			return allCars
		} catch (err) {
			this.logger.error(err)
			throw err
		}
	}

	public async getFordCars() {
    const { cococheAPI: API_URL } = config;
		try {
			const { data: { carList } }: ICarList = await axios.get(API_URL)
			/** Filter for Brand */
			const fordCars = carList.filter((car) => {
				const { brandDescription } = car;
				if(brandDescription === "FORD"){
					return car
				}
			})

			return fordCars
		} catch (err) {
			this.logger.error(err)
			throw err
		}
	}

}
