import './App.css';
import {Col, Container, Row} from "react-bootstrap";
import Login from "./Login";

function Principal() {
    return (
        <Container>
            <div className="App">
                <div>
                    <Row>
                        <Col></Col>
                        <Col><Login></Login></Col>
                        <Col></Col>
                    </Row>
                </div>
            </div>
        </Container>
    );
}

export default Principal;