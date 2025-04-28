import React from 'react';
import { ClipLoader } from 'react-spinners'; // Importing a spinner component for loading state

// Loader component that displays a loading spinner when `loading` is true
const Loader = ({ loading }) => {
  // If loading is false, return null (i.e., render nothing)
  if (!loading) {
    return null;
  }

  // If loading is true, display the loading spinner
  return (
    <div
      style={{
        minHeight: '100vh', // Set the minimum height to full viewport height
        display: 'flex', // Using flexbox to center the spinner both vertically and horizontally
        justifyContent: 'center', // Centers the spinner horizontally
        alignItems: 'center', // Centers the spinner vertically
      }}
    >
      {/* Displaying the ClipLoader spinner with specific size and color */}
      <ClipLoader
        size={50} // Spinner size
        color="#00C49F" // Spinner color
      />
    </div>
  );
};

export default Loader;
