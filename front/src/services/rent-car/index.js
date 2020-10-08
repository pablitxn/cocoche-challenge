// Constants
import { BASE_URL } from "../../utils/constants";

const Services = {
  getAllCars: async () => {
    try {
      const URL = `${BASE_URL}/get_all`
      const response = await fetch(URL);
      const cars = await response.json();

      return cars
    } catch (err) {
      console.log(err)
    }
  },

  getFordCars: async () => {
    try {
      const URL = `${BASE_URL}/get_ford_cars`
      const response = await fetch(URL);
      const cars = await response.json()

      return cars
    } catch(err) {
      console.log(err)
    }
  }

}

export default Services;