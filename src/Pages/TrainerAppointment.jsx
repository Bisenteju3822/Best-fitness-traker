import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import BASE_URL from "../config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Pages.css"; // Import the custom CSS file
import { useNavigate } from "react-router-dom";

const TrainerAppointment = () => {
  const { id } = useParams();
  const [trainerInfo, setTrainerInfo] = useState({});
  const [input, setInput] = useState({});
  const Navigate = useNavigate();

  const loadData = async () => {
    let api = `${BASE_URL}/learner/learnerappnt/?id=${id}`;
    try {
      const response = await axios.get(api);
      console.log(response.data);
      setTrainerInfo(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
    console.log(input);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let api = `${BASE_URL}/learner/appntsave`;
    try {
      const response = await axios.post(api, { trainerid: id, ...input });
      console.log(response);
      toast.success("Data saved successfully!");
      Navigate("/");
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.log(error);
    }
  };

  return (
    <div className="center-container">
      <div className="form-wrapper">
        <h1 className="text-center">Trainer Appointment Form</h1>
        <h4 className="text-center text-primary">
          Your Trainer: {trainerInfo.name}
        </h4>
        <h4 className="text-center text-primary">
          Specialization: {trainerInfo.specialization}
        </h4>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Enter Trainee Name</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleInput}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="specialization">Enter Specialization</label>
            <input
              type="text"
              id="specialization"
              name="specialization"
              onChange={handleInput}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">Enter City</label>
            <input
              type="text"
              id="city"
              name="city"
              onChange={handleInput}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Enter Mobile No</label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              onChange={handleInput}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Enter Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleInput}
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="form-submit">
            Register!
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default TrainerAppointment;
