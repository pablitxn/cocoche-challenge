import { BASE_URL } from "../../utils/constants";

const services = {
  register: async (newUser) => {
    try{
      const configs = {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      }
      const URL = `${BASE_URL}/create_user`
      const response = await fetch(URL, configs);
      const userRegistered = await response.json();
      if(userRegistered.data){
        return userRegistered
      } else {
        return
      }

    } catch (err) {
      console.log(err)
    }
  }
}

export default services;