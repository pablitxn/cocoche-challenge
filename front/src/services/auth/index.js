import { BASE_URL } from "../../utils/constants";

const Services = {

  register: async (newUser) => {
    try{
      const configs = {
        payload: newUser,
        todo: "complete"
      }
      const URL = `${BASE_URL}/create_user`
      const response = await fetch(URL, configs);
      const userRegistered = await response.json();

      return userRegistered
    } catch (err) {
      console.log(err)
    }
  }
}

export default Services;