import { useEffect, useState, useCallback } from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import Dashboard from "../components/Dashboard";
import { getExpenses, addExpense, updateExpense, deleteExpense } from "../services/ExpenseService";
import Loader from "../components/UI/Loader";  // Importing a loading indicator
import CustomButton from "../components/UI/Button"; // A custom button component for future use

const Home = () => {
  // Setting up state hooks to manage expenses, loading status, and expense editing state
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expenseToEdit, setExpenseToEdit] = useState(null);

  // Fetching expenses from the service
  const fetchExpenses = useCallback(async () => {
    setLoading(true);  // Show loading spinner while data is being fetched
    try {
      const response = await getExpenses();
      setExpenses(response || []);  // Updating expenses state if data is available
    } catch (error) {
      console.error("Error fetching expenses:", error);
      setExpenses([]);  // Reset expenses if an error occurs
    } finally {
      setLoading(false);  // Hide the loading spinner after data is fetched
    }
  }, []);

  // Fetch expenses when the component is first rendered
  useEffect(() => {
    fetchExpenses();
  }, [fetchExpenses]);

  // Handling the submission of new or edited expenses
  const handleSubmit = async (expenseData) => {
    setExpenseToEdit(null);  // Reset the expense to edit after submission
    try {
      if (expenseData.id) {
        // If we have an ID, update the existing expense
        await updateExpense(expenseData.id, expenseData);
      } else {
        // If no ID, create a new expense
        await addExpense(expenseData);
      }
      // Refresh the list of expenses after submitting
      await fetchExpenses();
    } catch (error) {
      console.error("Error submitting expense:", error);
    }
  };

  // Setting up the expense to be edited
  const handleEdit = (expense) => {
    setExpenseToEdit(expense);
  };

  // Handling the deletion of an expense
  const handleDelete = async (id) => {
    try {
      await deleteExpense(id);
      await fetchExpenses();  // Refresh the list of expenses after deletion
    } catch (error) {
      console.error("Error deleting expense:", error);
    }
  };

  // If the data is still loading, show the Loader component
  if (loading) {
    return <Loader loading={loading} />;
  }

  // Rendering the main UI
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        justifyContent: "flex-start",
        padding: "20px",
        backgroundColor: "#f5f5f5",  // Soft background color for better readability
      }}
    >
      <Typography variant="h4" gutterBottom textAlign="center" sx={{ flexShrink: 0 }}>
        Expense Tracker
      </Typography>

      {/* Flexbox container for form and list of expenses */}
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "flex-start", flexGrow: 1 }}>
        <Grid container spacing={3}>
          {/* Form for adding or editing an expense */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ padding: 3, marginBottom: 3 }}>
              <ExpenseForm
                key={expenseToEdit ? expenseToEdit.id : "new"}  // If editing, use the existing expense ID; else create new
                onSubmit={handleSubmit}
                initialData={expenseToEdit}  // Pass current expense data to the form for editing
                onCancelEdit={() => setExpenseToEdit(null)}  // Clear the expense to edit
              />
            </Paper>
          </Grid>

          {/* Display list of all expenses */}
          <Grid item xs={12} md={6}>
            <ExpenseList
              expenses={expenses}  // List of expenses to show
              onEdit={handleEdit}  // Handler for editing expenses
              onDelete={handleDelete}  // Handler for deleting expenses
            />
          </Grid>
        </Grid>
      </Box>

      {/* Dashboard displaying summary or graphical insights */}
      <Box sx={{ marginTop: "auto", padding: 2 }}>
        <Dashboard expenses={expenses} />
      </Box>
    </Box>
  );
};

export default Home;
