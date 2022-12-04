import {Navbar, Nav, Container} from 'react-bootstrap'

export default () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand href='#'>Game Holic</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#trending">Trending Game</Nav.Link>
                        <Nav.Link href="#best">Best Game</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
