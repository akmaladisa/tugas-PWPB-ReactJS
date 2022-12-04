import { InputGroup, Form, Container, Row, Col, Button } from "react-bootstrap"

const Contact = () => {

    return (
        <Container>
            <Row className="py-4">
                <h1 className="text-center text-white mb-4" id="contact">Contact</h1>
                <Col md={6} xl={6} sm={6}>
                <InputGroup className="mb-3">
                    <InputGroup.Text className="bg-dark text-white" id="inputGroup-sizing-default">
                        Name
                    </InputGroup.Text>
                    <Form.Control className="bg-dark text-white"
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text className="bg-dark text-white">Notes</InputGroup.Text>
                    <Form.Control className="bg-dark text-white" as="textarea" aria-label="With textarea" />
                </InputGroup>
                <Button variant="dark">Submit</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact