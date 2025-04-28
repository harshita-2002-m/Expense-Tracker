import axios from "axios";

// Define the API URL from the environment variable
const API_URL = import.meta.env.VITE_API_URL; 

// Fetch all expenses
export const getExpenses = async () => {
  try {
    // Make an API request to fetch expenses from the server
    const response = await axios.get("http://localhost:8000/expenses/");  // Can be replaced with API_URL if dynamic
    return response.data; // Return the fetched data (an array of expenses)
  } catch (error) {
    // Log and re-throw any errors to handle them in the calling function
    console.error("Error fetching expenses:", error);
    throw error;  // Re-throw error to be handled in the DashboardPage or elsewhere
  }
};

// Add a new expense
export const addExpense = (expense) => {
  // Make a POST request to add a new expense to the server
  return axios.post(`${API_URL}/expenses/`, expense);
};

// Update an existing expense by its ID
export const updateExpense = (id, updatedExpense) => {
  // Make a PUT request to update the specific expense
  return axios.put(`${API_URL}/expenses/${id}/`, updatedExpense);
};

// Delete an expense by its ID
export const deleteExpense = (id) => {
  // Make a DELETE request to remove the specific expense
  return axios.delete(`${API_URL}/expenses/${id}/`);
};
