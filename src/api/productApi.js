import axios from "axios";
axios.defaults.baseURL = "https://scandi-back.herokuapp.com/";
// axios.defaults.baseURL = "http://localhost:3002/";

export async function fetchData() {
  try {
    const res = await axios.get("/");
    return res;
  } catch (error) {
    console.log(error);
  }
}
export async function removeProducts(array) {
  try {
    await axios.delete("/", { data: { array } });
  } catch (error) {
    console.log(error);
  }
}
export async function addProduct(itemObject) {
  console.log(itemObject);
  try {
    await axios.post("/", itemObject);
  } catch (error) {
    console.log(error);
  }
}
