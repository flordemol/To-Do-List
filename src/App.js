import { Container, Row, Col } from "react-bootstrap";
import Header from "./Components/Header";
import Create from "./Components/Create";
import List from "./Components/List";

function App() {
  return (
    <Container>
      <Header title={"ToDo App"}/>
      <Row>
        <Col>
          <Create />
        </Col>
        <Col>
          <List />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
