import { baseURL } from "../constant/baseUrl";
import axios from 'axios'
// Local Storage
const jwtToken = localStorage.getItem('jwtToken')

export const getUsersData = async () => {
    try {
      const response = await axios.get(
        `${baseURL}/users`,
        {
          headers: {
            Authorization: `${jwtToken}`,
          },
        }
      )
      return response.data
    } catch (error) {
      return error
    }
  }