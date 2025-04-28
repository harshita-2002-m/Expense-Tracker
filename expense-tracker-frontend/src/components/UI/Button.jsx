import React from 'react';
import { Button } from '@mui/material';

// CustomButton component allows for customizable buttons in the app.
const CustomButton = (props) => {
  // Destructure props to extract onClick, text, color, and variant.
  const {
    onClick,          // Function to handle button click
    text,             // Text to be displayed on the button
    color = 'primary', // Default button color is 'primary' if not provided
    variant = 'contained', // Default button style is 'contained'
  } = props;

  return (
    <Button
      onClick={onClick}       // Event handler for button click
      variant={variant}      // The button style (contained, outlined, etc.)
      color={color}          // The button color (primary, secondary, etc.)
    >
      {text}                 
    </Button>
  );
};

export default CustomButton;
