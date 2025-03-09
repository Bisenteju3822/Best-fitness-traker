import { useEffect } from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaClipboardList,
  FaChartLine,
  FaUsers,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa"; // Importing icons from Font Awesome
import "./DashBoard.css";

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("name")) {
      navigate("/");
    }
  }, []);

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="logo">
          <h2>Trainer Dashboard</h2>
        </div>
        <img
          src="Screenshot 2025-03-09 100027.png"
          alt="Profile"
          className="profile-icon"
        />
        <nav>
          <Link to="#" className="active">
            <FaHome /> Home
          </Link>
          <Link to="#">
            <FaUser /> Profile
          </Link>
          <Link to="#">
            <FaClipboardList /> Reports
          </Link>
          <Link to="#">
            <FaChartLine /> Analytics
          </Link>
          <Link to="/learnerlist">
            <FaUsers /> My Learner
          </Link>
          <Link to="/setting">
            <FaCog /> Settings
          </Link>
          <Link to="#" onClick={logout}>
            <FaSignOutAlt /> Logout
          </Link>
        </nav>
      </aside>
      <main className="main-content">
        <div style={{ backgroundColor: " #ff416c", padding: "20px" }}>
          <h1>
            Welcome To <span style={{ color: "white" }}>Trainer Panel </span>
          </h1>
        </div>
        <div
          style={{
            textAlign: "right",
            backgroundColor: "black",
            padding: "20px",
            color: "white",
          }}
        >
          <FaUser size={50} color="#007bff" />
          Welcome: {localStorage.getItem("name")}
          <br />
          Email: {localStorage.getItem("email")}
          <a href="#" onClick={logout} style={{ marginLeft: "10px" }}>
            <button style={{ backgroundColor: " #ff416c" }}>Logout</button>
          </a>
        </div>
        <Outlet />
        <img
          style={{ width: "250px", marginLeft: "30px", marginTop: "10px" }}
          src="fitn.jpg"
          alt="Main Content"
          className="main-content-image"
        />
        <img
          style={{ width: "250px", marginLeft: "30px", marginTop: "10px" }}
          src="Fit2.jpg"
          alt="Main Content"
          className="main-content-image"
        />
        <div className="content">
          <div className="dard">
            <h3>Total Revenue</h3>
            <p>$50,000</p>
          </div>
          <div className="dard">
            <h3>Total Learner</h3>
            <p>1,200</p>
          </div>
          <div className="dard">
            <h3>New Trianer</h3>
            <p>300</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
