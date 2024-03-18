import axios from "axios";

const apiURLResetBase: string = "https://secret.dev/v1/bakery/reset";

async function resetApi() {
  const response = await axios.post(`${apiURLResetBase}`);

  console.log("res status:", response.status);
  return;
}

export default resetApi;

// this was used to call the API to reset into it's initial state.
