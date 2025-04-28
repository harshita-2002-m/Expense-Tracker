import { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard";
import { getExpenses } from "../services/ExpenseService";
import { ClipLoader } from "react-spinners"; // Importing loading spinner for UX

const DashboardPage = () => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true); // State to handle loading

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const data = await getExpenses();  // Fetch expenses from API
        console.log("Fetched expenses:", data); // Debugging
        setExpenses(data);  // Set the fetched expenses in state
      } catch (error) {
        console.error(error); // Log any errors during fetching
      } finally {
        setLoading(false);  // Set loading state to false after fetching
      }
    };

    fetchExpenses(); // Call the function to fetch expenses
  }, []);  // Empty dependency array ensures this runs once on component mount

  // Render loading spinner if expenses are being fetched
  if (loading) {
    return (
      <div style={{
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        height: "100vh", 
        width: "100vw",
      }}>
        <ClipLoader size={50} color={"#00C49F"} />
      </div>
    );
  }

  return (
    <div style={{
      minHeight: "100vh", 
      width: "100vw", 
      padding: "20px", 
      boxSizing: "border-box",
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center",
      backgroundColor: "#f9f9f9", 
    }}>
      <div style={{
        width: "100%",
        maxWidth: "1200px",
        backgroundColor: "#fff", 
        padding: "20px", 
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}>
        <Dashboard expenses={expenses} />  {/* Pass expenses data to Dashboard component */}
      </div>
    </div>
  );
};

export default DashboardPage;
