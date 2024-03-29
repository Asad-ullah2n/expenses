import axios from "axios";
const URL = "https://react-native-project-50754-default-rtdb.firebaseio.com";

export async function storeExpese(expenseData) {
  const response = axios.post(URL + "/expenses.json", expenseData);
  const id = (await response).data.name;
  return id;
}
export async function fetchExpense() {
  const response = await axios.get(URL + "/expenses.json");
  console.log(response.data);
  const expenses = [];
  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }
  return expenses;
}
export async function updateExpense(id, expenseData) {
  return axios.put(URL + `/expenses/${id}.json`, expenseData);
}
export async function deleteExpense(id) {
  return axios.delete(URL + `/expenses/${id}.json`);
}
