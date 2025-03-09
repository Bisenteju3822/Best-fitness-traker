import { useState, useEffect } from "react";
import BASE_URL from "../config";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [mydata, setMydata] = useState([]);
  const navigate = useNavigate();

  const loadData = async () => {
    let api = `${BASE_URL}/trainer/display`;
    try {
      const response = await axios.get(api);
      console.log(response.data);
      setMydata(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const bookSession = (id) => {
    navigate(`/booksession/${id}`);
  };

  const ans = mydata.map((key) => {
    return (
      <Card style={{ width: "15rem", margin: "10px" }} key={key._id}>
        <Card.Img variant="top" src="heart-rate_6307606.png" alt={key.name} />
        <Card.Body>
          <Card.Title>{key.name}</Card.Title>
          <Card.Text>
            Specialization: {key.specialization} <br />
            Address: {key.address} <br />
            City: {key.city} <br />
            Mobile: {key.mobile} <br />
            Email: {key.email}
          </Card.Text>
          <Button
            variant="primary"
            onClick={() => {
              bookSession(key._id);
            }}
          >
            Book Session
          </Button>
        </Card.Body>
      </Card>
    );
  });

  return (
    <>
      <h1>Welcome to Our Fitness Trainer Booking System</h1>
      <div
        id="homeTrainers"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {ans}
      </div>
    </>
  );
};

export default Home;
