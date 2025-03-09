import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import "../All.css/Fit.css"; // Custom CSS file
import BASE_URL from "../config";
import { useNavigate } from "react-router-dom";

const TopMenu = () => {
  const nav = useNavigate();
  const [input, setInput] = useState({});
  const [show, setShow] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prevValues) => ({ ...prevValues, [name]: value }));
    console.log(input);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const api = `${BASE_URL}/trainer/registration`;
    try {
      const response = await axios.post(api, input);
      console.log(response);
      toast.success(response.data.msg);
      setShow(false);
      nav("/display"); // Navigate to /display after successful registration
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar fixed="top" expand="lg" className="custom-navbar">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="custom-brand">
            ACTIVE<span style={{ color: "blue" }}>X</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/trainerlogin">
                Trainer<span style={{ color: "blue" }}>LOGIN</span>
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                Dashboard
              </Nav.Link>
              <Nav.Link as={Link} to="/display">
                Trainers
              </Nav.Link>
              <Nav.Link as={Link} to="search">
                <span style={{ color: "black" }}> Search</span>
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/setting">
                Settings
              </Nav.Link>
              <Nav.Item>
                <Button
                  variant="primary"
                  onClick={handleShow}
                  style={{
                    backgroundColor: " #ff416c",
                    borderRadius: "15px",
                    marginRight: "5px",
                  }}
                >
                  Registration
                </Button>
              </Nav.Item>
              <Nav.Item>
                <Button
                  variant="secondary"
                  onClick={handleShowLogin}
                  style={{ backgroundColor: " #90EE90", borderRadius: "15px" }}
                >
                  Login
                </Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: " #ff416c" }}>
            Trainer Registration
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Enter Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                onChange={handleInput}
                className="custom-input"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={handleInput}
                className="custom-input"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Enter Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={handleInput}
                className="custom-input"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMobileNo">
              <Form.Label>Enter Mobile No</Form.Label>
              <Form.Control
                type="text"
                name="number"
                onChange={handleInput}
                className="custom-input"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSpeciality">
              <Form.Label>Select Specialization</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="speciality"
                onChange={handleInput}
              >
                <option value="">Open this select menu</option>
                <option value="Cardiologist">Cardiologist</option>
                <option value="ENT">ENT</option>
                <option value="Neuro Surgeon">Neuro Surgeon</option>
                <option value="Dentist">Dentist</option>
                <option value="Plastic Surgeon">Plastic Surgeon</option>
                <option value="Fitness Trainer">Fitness Trainer</option>
                <option value="Yoga Trainer">Yoga Trainer</option>
                <option value="Muscle Trainer">Muscle Trainer</option>
                <option value="Nutritionist">Nutritionist</option>
                <option value="Physiotherapist">Physiotherapist</option>
                <option value="Fitness">Fitness</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                onChange={handleInput}
                className="custom-input"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                onChange={handleInput}
                className="custom-input"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Register
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showLogin} onHide={handleCloseLogin}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formLoginEmail">
              <Form.Label>Enter Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={handleInput}
                className="custom-input"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLoginPassword">
              <Form.Label>Enter Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={handleInput}
                className="custom-input"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => setShowLogin(false)}
            style={{ backgroundColor: " #ff416c " }}
          >
            Login
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer />
    </>
  );
};

export default TopMenu;
