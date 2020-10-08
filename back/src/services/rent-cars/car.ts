// Dependency Injection
import { Service, Inject } from 'typedi'
// Axios
import axios from 'axios'
// Configs
import config from "../../config"
// Types
import { ICar } from "../../interfaces/rent-cars"

@Service()
export default class Car {
	constructor(
		@Inject('logger') private logger,
	) {}

	public async getAllCars() {
    const { cococheAPI: API_URL, imagesURL: API_IMAGES } = config;
		try {
			const { data: { carList } } = await axios.get(API_URL)
			/** Adding ImageUrl */
			const dataFormated: ICar[] = carList.map((car) => {
				return {
					...car,
					imageUrl:`${API_IMAGES}/${car.url}`
				}
			})

			return dataFormated
		} catch (err) {
			this.logger.error(err)
			throw err
		}
	}

	public async getFordCars() {
    const { cococheAPI: API_URL, imagesURL: API_IMAGES } = config;
		try {
			const { data: { carList } } = await axios.get(API_URL)
			/** Filter for Brand */
			const fordCars = carList.filter((car) => {
				const { brandDescription } = car;
				if(brandDescription === "FORD"){
					return car
				}
			})
			/** Adding ImageUrl */
			const dataFormated: ICar[] = fordCars.map((car) => {
				return {
					...car,
					imageUrl:`${API_IMAGES}/${car.url}`
				}
			})

			return dataFormated as ICar[]
		} catch (err) {
			this.logger.error(err)
			throw err
		}
	}

}
