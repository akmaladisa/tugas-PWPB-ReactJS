import {Container, Row, Col, Card, Image} from "react-bootstrap"
import mineCraft from '../asset/trending/minecraft.jpg'
import farCry from '../asset/trending/farCry6.jpg'
import lol from '../asset/trending/lol.jpg'
import olliworld from '../asset/trending/olliworld.jpg'
import valorant from '../asset/trending/valorant.jpg'
import wow from '../asset/trending/wow.jpg'

const TrendGame = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white text-center" id="trending">Trending Games</h1>
                <br />
                <Row className="pb-5">
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={mineCraft} alt="Minecraft Game" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m1 text-white">
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
                            <Image src={farCry} alt="Far Cry Game" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m1 text-white">
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
                            <Image src={lol} alt="LOL Game" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m1 text-white">
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
                            <Image src={olliworld} alt="Olli World Game" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m1 text-white">
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
                            <Image src={valorant} alt="Valorant Game" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m1 text-white">
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
                            <Image src={wow} alt="WOW Game" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m1 text-white">
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

export default TrendGame