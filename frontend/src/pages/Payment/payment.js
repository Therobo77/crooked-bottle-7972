import axios from "axios";

export const payUsingPaytm = async (data) => {
  try {
   let response = await axios.post(`${URL}/payment`, data);
   return response.data;
  } catch (error) {
    console.log(error);
  }
};
