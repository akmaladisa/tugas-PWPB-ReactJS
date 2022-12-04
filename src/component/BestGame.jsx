import {Container, Row, Col, Card, Image} from "react-bootstrap"
import back4blood from '../asset/best/back4blood.jpg'
import crysis3 from '../asset/best/crysis3.jpg'
import residentEvil2 from '../asset/best/residentEvil2.jpg'
import theWalkingDead from '../asset/best/theWalkingDead.jpg'
import thief from '../asset/best/thief.jpg'
import untilDawn from '../asset/best/untilDawn.jpg'

export default () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white text-center" id="best">Best Games</h1>
                <br />
                <Row className="pb-5">
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={back4blood} alt="Minecraft Game" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">A</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with natural lead-in to additional content
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last updated 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={crysis3} alt="Far Cry Game" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">A</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with natural lead-in to additional content
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last updated 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={residentEvil2} alt="LOL Game" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">A</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with natural lead-in to additional content
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last updated 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={theWalkingDead} alt="Olli World Game" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">A</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with natural lead-in to additional content
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last updated 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={thief} alt="Valorant Game" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">A</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with natural lead-in to additional content
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last updated 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={untilDawn} alt="WOW Game" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">A</Card.Title>
                                    <Card.Text className="text-left">
                                        This is a wider card with natural lead-in to additional content
                                    </Card.Text>
                                    <Card.Text className="text-left">
                                        Last updated 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
