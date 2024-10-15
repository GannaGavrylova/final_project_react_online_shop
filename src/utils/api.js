import axios from "axios";
const BaseAllUrl = `http://localhost:3333`;

export const sendSaleRequest = (formData) => {
  return axios.post(`${BaseAllUrl}/sale/send`, formData);
};

export const orderSendRequest = async (formData) => {
  try {
    const response = await axios.post(`${BaseAllUrl}/order/send`, formData);
    return response;
  } catch (error) {
    throw error;
  }
};
export default BaseAllUrl;
