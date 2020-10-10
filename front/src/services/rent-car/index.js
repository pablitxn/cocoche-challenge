import { BASE_URL } from "../../utils/constants";

const services = {
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

  getFordCars: async (page = 1) => {
    try {
      const URL = `${BASE_URL}/get_ford_cars/?page=${page}`
      const response = await fetch(URL);
      const cars = await response.json()

      return cars
    } catch(err) {
      console.log(err)
    }
  }
}

export default services;