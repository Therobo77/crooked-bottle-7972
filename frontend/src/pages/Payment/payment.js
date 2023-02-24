import axios from "axios";

export const payUsingPaytm = async (data) => {
  try {
    let response = await axios.post(`http://localhost:8000/payment`, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
