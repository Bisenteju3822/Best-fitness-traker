import axios from "axios";
import { useState, useEffect } from "react";
import BASE_URL from "../config";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Pages.css"; // Import the custom CSS file

const LearnerList = () => {
  const [trainers, setTrainers] = useState([]);

  const loadData = async () => {
    let api = `${BASE_URL}/trainer/learnerlist/?docid=${localStorage.getItem(
      "docid"
    )}`;
    const response = await axios.get(api);
    console.log(response.data);
    setTrainers(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const trainerCards = trainers.map((trainer) => (
    <Col md={4} className="mb-4" key={trainer.id}>
      <Card className="trainer-card">
        <Card.Body>
          <Card.Title>{trainer.name}</Card.Title>
          <Card.Text>
            <strong>Specialization:</strong> {trainer.specialization} <br />
            <strong>City:</strong> {trainer.city} <br />
            <strong>Mobile:</strong> {trainer.mobile} <br />
            <strong>Email:</strong> {trainer.email}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ));

  return (
    <div className="trainer-list">
      <h1>Learner List</h1>
      <hr />
      <Row>{trainerCards}</Row>
    </div>
  );
};

export default LearnerList;
