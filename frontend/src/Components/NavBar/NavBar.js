import { Navbar, Nav, Container } from 'react-bootstrap'

function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home"><h1><strong className='monokai-black'>Steve</strong><strong className='monokai-orange'> Ucho</strong></h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#programming">Programming</Nav.Link>
                        <Nav.Link href="#photography">Photography</Nav.Link>
                        <Nav.Link href="#archDes">Architecture and Design</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar