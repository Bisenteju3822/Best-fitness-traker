import { useState } from "react";
import axios from "axios";
import BASE_URL from "../config";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Pages.css";

const SearchTrainer = () => {
  const [input, setInput] = useState({});
  const [mydata, setMydata] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
    console.log(input);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let api = `${BASE_URL}/trainer/search`;
    const response = await axios.post(api, input);
    console.log(response.data);
    setMydata(response.data);
  };

  const ans = mydata.map((key, index) => (
    <div key={index} className="card">
      <div className="card-content">
        <h3>{key.name}</h3>
        <p>
          <strong>Address:</strong> {key.address}
        </p>
        <p>
          <strong>City:</strong> {key.city}
        </p>
        <p>
          <strong>Email:</strong> {key.email}
        </p>
        <p>
          <strong>Mobile:</strong> {key.mobile}
        </p>
        <p>
          <strong>Specialization:</strong> {key.specialization}
        </p>
      </div>
    </div>
  ));

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Search Trainer
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Search Trainer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Enter Trainer Name</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={handleInput}
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="specialization">Select Specialization</label>
              <select
                id="specialization"
                name="specialization"
                onChange={handleInput}
                className="form-control"
              >
                <option value="">Open this select menu</option>
                <option value="Fitness Trainer">Fitness Trainer</option>
                <option value="Yoga Trainer">Yoga Trainer</option>
                <option value="Muscle Trainer">Muscle Trainer</option>
                <option value="Cardiovascular Trainer">
                  Cardiovascular Trainer
                </option>
                <option value="Nutritionist">Nutritionist</option>
                <option value="Physiotherapist">Physiotherapist</option>
              </select>
            </div>
            <Button type="submit" variant="primary">
              Search
            </Button>
          </form>
        </Modal.Body>
      </Modal>

      <hr />
      <div className="card-container">{ans}</div>
    </>
  );
};

export default SearchTrainer;
