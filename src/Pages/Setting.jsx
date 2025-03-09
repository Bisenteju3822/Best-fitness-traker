import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Pages.css";

const SettingsPage = () => {
  const [settings, setSettings] = useState({
    theme: "",
    notifications: false,
    language: "",
  });

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await axios.get("/api/settings/yourUserId"); // Replace with actual user ID
        setSettings(
          response.data.settings || {
            theme: "",
            notifications: false,
            language: "",
          }
        );
      } catch (error) {
        console.log(error);
        toast.error("Failed to fetch settings");
      }
    };

    fetchSettings();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/api/settings/yourUserId`, {
        // Replace with actual user ID
        settings,
      });
      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
      toast.error("Failed to update settings");
    }
  };

  const handleLogout = () => {
    // Logic for logging out the user
    console.log("User logged out");
    toast.success("Logged out successfully");
  };

  return (
    <Container className="settings-container">
      <h2>Settings</h2>
      <Card className="settings-card">
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Theme</Form.Label>
                  <Form.Control
                    as="select"
                    name="theme"
                    value={settings.theme}
                    onChange={handleChange}
                    className="custom-select"
                  >
                    <option value="">Select theme</option>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="d-flex align-items-center h-100">
                  <Form.Check
                    type="checkbox"
                    name="notifications"
                    label="Enable Notifications"
                    checked={settings.notifications}
                    onChange={handleChange}
                    className="custom-checkbox"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Language</Form.Label>
                  <Form.Control
                    as="select"
                    name="language"
                    value={settings.language}
                    onChange={handleChange}
                    className="custom-select"
                  >
                    <option value="">Select language</option>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col
                md={6}
                className="d-flex align-items-end justify-content-between"
              >
                <Button
                  variant="primary"
                  type="submit"
                  className="custom-button"
                >
                  Save Settings
                </Button>
                <Button
                  variant="danger"
                  onClick={handleLogout}
                  className="custom-button"
                >
                  Logout
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
      <ToastContainer />
    </Container>
  );
};

export default SettingsPage;
