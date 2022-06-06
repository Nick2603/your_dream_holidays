import axios from "axios";

export const getCountries = () => {
  return axios
    .get("http://localhost:8080/countries")
    .then((res) => res.data)
    .catch((error) => console.error(error));
};
