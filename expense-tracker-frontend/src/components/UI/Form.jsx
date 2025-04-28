import React from 'react';
import { TextField, Grid, Box, Typography } from '@mui/material';

// ExpenseForm component allows user to add or edit an expense.
const ExpenseForm = ({
  amount,
  category,
  description,
  date,
  handleChange,
  handleSubmit,
}) => {
  // Handle input changes and pass them to the parent component via handleChange
  const handleInputChange = (field) => (event) => {
    handleChange(field, event.target.value); // Update the respective field value in the parent component
  };

  return (
    <form onSubmit={handleSubmit}> {/* Handles form submission */}
      <Typography variant="h6" gutterBottom> {/* Title of the form */}
        Add or Edit Expense
      </Typography>

      <Grid container spacing={2}> {/* Grid layout for form fields */}
        {/* Amount field */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="Amount" // Label for the input field
            type="number" // Ensures the user inputs a number
            fullWidth
            required // Makes this field mandatory
            value={amount} // Current value of amount from parent
            onChange={handleInputChange('amount')} // Calls handleInputChange for changes
          />
        </Grid>

        {/* Category field */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="Category"
            fullWidth
            required // Makes this field mandatory
            value={category} // Current category value from parent
            onChange={handleInputChange('category')} // Updates category value
          />
        </Grid>

        {/* Description field */}
        <Grid item xs={12}>
          <TextField
            label="Description"
            fullWidth
            value={description} // Current description value from parent
            onChange={handleInputChange('description')} // Updates description value
          />
        </Grid>

        {/* Date field */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="Date"
            type="date" // Input type set to date picker
            fullWidth
            required // Makes this field mandatory
            value={date} // Current date value from parent
            onChange={handleInputChange('date')} // Updates date value
            InputLabelProps={{ shrink: true }} // Ensures label is positioned properly when date is picked
          />
        </Grid>

        {/* Submit button */}
        <Grid item xs={12}>
          <Box display="flex" justifyContent="flex-end">
            {/* Submit button to save the expense */}
            <button type="submit">Save Expense</button>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};

export default ExpenseForm;
