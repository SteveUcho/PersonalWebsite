import { Col, Container, Row } from "react-bootstrap"
import './AboutMe.css'

function AboutMe() {
    return (
        <div id="about" className="about-me big-section plain-lists">
            <Container>
                <Row>
                    <h1><strong>About Me</strong></h1>
                    <Col>
                        <ul>
                            <li><strong className="monokai-green">Education:</strong> New York University, Graduated 2021</li>
                            <li><strong className="monokai-green">Majored:</strong> B.S. Computer Science</li>
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            <li><strong className="monokai-green">Interests:</strong> Photography, Architecture, Design, Video Games</li>
                        </ul>
                    </Col>
                </Row>
                <p className="about-me-blurb">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Container>
        </div>
    )
}

export default AboutMe