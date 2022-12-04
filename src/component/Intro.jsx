import {Container, Row, Col, Button} from "react-bootstrap"

export default () => {
    return (
        <div className="intro">
            <Container className="text-white text-center d-flex justify-content-center aligh-items-center">
                <Row>
                    <Col>
                        <div className="title">On Target</div>
                        <div className="title">Mission Complete</div>
                        <div className="introButton mt-4 text-center">
                            <Button variant="dark" href="#trending">See All List</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
