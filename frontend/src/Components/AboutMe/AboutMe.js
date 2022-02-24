import { Col, Container, Row } from "react-bootstrap"
import './AboutMe.css'

function AboutMe() {
    return (
        <div id="about" className="about-me big-section plain-lists">
            <Container>
                <Row>
                    <h1><strong>About Me</strong></h1>
                    <h5 className="pb-2">Nice to Meet You!</h5>
                    <Col>
                        <ul>
                            <li><strong className="monokai-green">Education:</strong> New York University, Graduated 2021</li>
                            <li><strong className="monokai-green">Majored:</strong> B.S. Computer Science</li>
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            <li><strong className="monokai-green">Interests:</strong> Photography, Architecture, Design, Video Games</li>
                            <li><strong className="monokai-green">GitHub: </strong><a href="https://www.linkedin.com/in/steveucho/">linkedin.com/in/SteveUcho/</a></li>
                            <li><strong className="monokai-green">Instagram: </strong><a href="https://www.instagram.com/s.teve.u/">instagram.com/s.teve.u/</a></li>
                            <li><strong className="monokai-green">Twitter: </strong><a href="https://twitter.com/SteveUcho">twitter.com/SteveUcho</a></li>
                        </ul>
                    </Col>
                </Row>
                <p className="about-me-blurb">
                    Although I like to say I was born and raised in New York City, "raised" is only partially true. 
                    From the ages of 3 to 6 years old, I lived in and grew up in a rural part of Ecuador where I enjoyed activities like picking fresh blackberries and jumping into the river down the hill with my cousins. 
                </p>
            </Container>
        </div>
    )
}

export default AboutMe