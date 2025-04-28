import React from 'react';
import { PieChart, Pie, Tooltip, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
import { ClipLoader } from 'react-spinners';

const Dashboard = ({ expenses, loading }) => {
  if (loading) {
    return (
      <div style={styles.loaderContainer}>
        <ClipLoader size={50} color="#00C49F" />
      </div>
    );
  }

  if (!expenses?.length) {
    return (
      <div style={styles.emptyMessage}>
        No expenses recorded yet. Start by adding some!
      </div>
    );
  }

  // Calculate total expenses safely
  const totalExpenses = expenses.reduce((sum, expense) => {
    const amount = parseFloat(expense.amount);
    return sum + (isNaN(amount) ? 0 : amount);
  }, 0).toFixed(2);

  // Prepare aggregated data for charts
  const aggregatedData = expenses.reduce((acc, { category = "Uncategorized", amount }) => {
    const numericAmount = parseFloat(amount);
    if (!isNaN(numericAmount)) {
      acc[category] = (acc[category] || 0) + numericAmount;
    }
    return acc;
  }, {});

  const chartData = Object.entries(aggregatedData).map(([name, value]) => ({
    name,
    value,
  }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF4560'];

  return (
    <div style={styles.dashboardContainer}>
      <h2>Expense Overview</h2>

      <div style={styles.totalExpense}>
        <h3>Total Spent: ₹{totalExpenses}</h3>
      </div>

      <div style={styles.chartsContainer}>
        {/* Pie Chart */}
        <div style={styles.chartBlock}>
          <h4>Spending by Category</h4>
          {chartData.length > 0 ? (
            <PieChart width={300} height={300}>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                outerRadius={110}
                innerRadius={40}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {chartData.map((_, idx) => (
                  <Cell key={`pie-slice-${idx}`} fill={COLORS[idx % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `₹${value.toFixed(2)}`} />
            </PieChart>
          ) : (
            <p>No data available for pie chart.</p>
          )}
        </div>

        {/* Bar Chart */}
        <div style={{ ...styles.chartBlock, maxWidth: 600 }}>
          <h4>Category Wise Expenses</h4>
          {chartData.length > 0 ? (
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => `₹${value.toFixed(2)}`} />
                <Legend />
                <Bar dataKey="value" fill="#8884d8">
                  {chartData.map((_, idx) => (
                    <Cell key={`bar-cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <p>No data available for bar chart.</p>
          )}
        </div>
      </div>
    </div>
  );
};

// --- Inline styles object ---
const styles = {
  loaderContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '50px',
  },
  emptyMessage: {
    textAlign: 'center',
    marginTop: '30px',
    fontStyle: 'italic',
    color: '#777',
  },
  dashboardContainer: {
    padding: '20px',
    marginTop: '20px',
    border: '1px solid #eee',
    borderRadius: '8px',
  },
  totalExpense: {
    marginBottom: '30px',
    textAlign: 'center',
  },
  chartsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  chartBlock: {
    textAlign: 'center',
    marginBottom: '30px',
  },
};

export default Dashboard;
