import { Col, Container, Row } from "react-bootstrap";
import "./Contact.css"

function Contact(props) {
    const emailHref = "mailto:" + props.content.email
    return (
        <div id="contact" className="contact big-section monokai-black-bg plain-links plain-lists">
            <Container>
                <h1><strong>Contact</strong></h1>
                <Row>
                    <Col sm={6}>
                        <ul>
                            <li><strong className="monokai-green">Phone:</strong>{props.content.phone}</li>
                            <li><strong className="monokai-green">Email:</strong><a href={emailHref}>{props.content.email}</a></li>
                        </ul>
                    </Col>
                    <Col sm={6}>
                        <ul>
                            <li><strong className="monokai-green">LinkedIn:</strong> <a href={props.content.linkedIn}>{props.content.linkedIn}</a></li>
                            <li><strong className="monokai-green">Github:</strong><a href={props.content.github}>{props.content.github}</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact