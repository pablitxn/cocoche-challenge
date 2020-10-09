// Dependency Injection
import { Service, Inject } from 'typedi'
// Axios
import axios from 'axios'
// Configs
import config from "../../config"
// Utils
import { pagination } from "../utils"
// Types
import { ICar, ICarList } from "../../interfaces/rent-cars"
import { Request } from "express"

@Service()
export default class Car {
	constructor(
		@Inject('logger') private logger,
	) {}

	public async getAllCars(req: Request) {
		const { params: { page } } = req;
    const { cococheAPI: API_URL, imagesURL: API_IMAGES } = config;
		try {
			const { data: { carList } } = await axios.get(API_URL)
			/** Adding ImageUrl */
			const dataFormated: ICar[] = carList.map((car: ICar) => {
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

	public async getFordCars(req: Request) {
		const { params: { page } } = req;
    const { cococheAPI: API_URL, imagesURL: API_IMAGES } = config;
		try {
			const { data: { carList } } = await axios.get(API_URL)
			/** Filter for Brand */
			const fordCars = carList.filter((car: ICar) => {
				const { brandDescription } = car;
				if(brandDescription === "FORD"){
					return car
				}
			})
			/** Adding ImageUrl */
			const dataFormated: ICar[] = fordCars.map((car: ICar) => {
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

}
