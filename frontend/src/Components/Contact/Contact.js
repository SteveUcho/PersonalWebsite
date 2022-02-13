import { Col, Container, Row } from "react-bootstrap";
import "./Contact.css"

function Contact() {
    return (
        <div id="contact" className="contact big-section monokai-black-bg plain-links plain-lists">
            <Container>
                <h1><strong>Contact</strong></h1>
                <Row>
                    <Col sm={6}>
                        <ul>
                            <li><strong className="monokai-green">Phone:</strong> +1 (917) 628-4514</li>
                            <li><strong className="monokai-green">Email:</strong><a href="mailto:steve.ucho8@gmail.com"> steve.ucho8@gmail.com</a></li>
                        </ul>
                    </Col>
                    <Col sm={6}>
                        <ul>
                            <li><strong className="monokai-green">LinkedIn:</strong> <a href="https://www.linkedin.com/in/steveucho/"> linkedin.com/in/steveucho/</a></li>
                            <li><strong className="monokai-green">Github:</strong><a href="https://github.com/SteveUcho"> github.com/SteveUcho</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact