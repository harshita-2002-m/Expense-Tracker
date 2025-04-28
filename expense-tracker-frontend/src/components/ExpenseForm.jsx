import React, { useState } from "react";
import Form from "../components/UI/Form"; // Importing a UI component for the form structure

const ExpenseForm = ({ onSubmit, initialData, onCancelEdit }) => {
  // State hooks to handle the form data
  const [amount, setAmount] = useState(initialData ? initialData.amount : '');
  const [category, setCategory] = useState(initialData ? initialData.category : '');
  const [description, setDescription] = useState(initialData ? initialData.description : '');
  const [date, setDate] = useState(initialData ? initialData.date : '');

  // Function to update the state based on the form field changes
  const handleChange = (field, value) => {
    switch (field) {
      case "amount":
        setAmount(value);
        break;
      case "category":
        setCategory(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "date":
        setDate(value);
        break;
      default:
        break;
    }
  };

  // Function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const expenseData = { amount, category, description, date };

    // If we are editing an existing expense, include its id
    if (initialData) {
      expenseData.id = initialData.id;
    }

    onSubmit(expenseData); // Call the parent onSubmit function with the expense data
  };

  return (
    <Form
      amount={amount}
      category={category}
      description={description}
      date={date}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default ExpenseForm;
