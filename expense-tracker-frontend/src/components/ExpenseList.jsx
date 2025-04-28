import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ExpenseList = ({ expenses, onEdit, onDelete }) => {
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <Typography variant="h6" gutterBottom>
        Your Expenses
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Category</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {expenses.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  No expenses found
                </TableCell>
              </TableRow>
            ) : (
              // Loop through the expenses array and display them
              expenses.map((expense) => (
                <TableRow key={expense.id}>
                  <TableCell>{expense.category}</TableCell>
                  <TableCell>₹{expense.amount}</TableCell>
                  <TableCell>{expense.description}</TableCell>
                  <TableCell>
                    {/* Edit and Delete buttons for each expense */}
                    <IconButton onClick={() => onEdit(expense)} color="primary" aria-label="edit">
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => onDelete(expense.id)}
                      color="secondary"
                      aria-label="delete"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default ExpenseList;
