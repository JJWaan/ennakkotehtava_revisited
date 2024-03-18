import axios from "axios";

const apiURLBase: string = "https://jsonplaceholder.typicode.com/users";

async function getProducts() {
  const response = await axios.get(apiURLBase);

  return response.data;
}

export default getProducts;
