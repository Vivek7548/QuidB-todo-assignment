import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { Provider } from "react-redux";
import store from "./Store"; // Update casing to match the filename
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function App() {
  return (
    <Provider store={store}>
      <Container className="container">
        <Row>
          <Col>
            <h1 className="heading">To-Do Application</h1>
            <TaskInput />
            <TaskList />
          </Col>
        </Row>
      </Container>
    </Provider>
  );
}

export default App;
