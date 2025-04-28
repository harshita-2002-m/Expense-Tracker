import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import DashboardPage from "./pages/DashboardPage";

const App = () => {
  return (
    <Router>
      <nav className="flex gap-4 p-4 bg-blue-200">
        <Link to="/" className="font-bold">Expenses</Link>
        <Link to="/dashboard" className="font-bold">Dashboard</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
};

export default App;
