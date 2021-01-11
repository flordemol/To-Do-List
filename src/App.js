import {useState} from "react";

import { Container, Row, Col } from "react-bootstrap";
import Header from "./Components/Header";
import Create from "./Components/Create";
import List from "./Components/List";

import "./App.css"

function App() {

  const [activities, setActivities] = useState([]);

  const addActivity = (activity) => {
    setActivities([...activities, activity])
  }

  const deleteActivity = id => {
    const newActivities = activities.filter((activity) => activity.id !== id);
    setActivities(newActivities);
  }

  return (
    <Container className="container">
      <Header title={"ToDo App"}/>
      <Row>
        <Col md={6}>
          <Create addActivity={addActivity}/>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={6}>
          <List activities={activities} deleteActivity={deleteActivity}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
