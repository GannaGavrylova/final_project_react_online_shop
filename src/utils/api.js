import axios from "axios";
const BaseAllUrl = `http://localhost:3333`;

export const sendSaleRequest = (formData) => {
  return axios.post(`${BaseAllUrl}/sale/send`, formData);
};

export default BaseAllUrl;
