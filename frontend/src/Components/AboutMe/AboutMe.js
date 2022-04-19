import { Col, Container, Row } from "react-bootstrap"
import './AboutMe.css'

function AboutMe(props) {
    const leftList = props.content.leftList.map((item) =>
        <li><strong className="monokai-green">{item[0]}</strong>{item[1]}</li>
    );
    const rightList = props.content.rightList.map((item) =>
        <li><strong className="monokai-green">{item[0]}</strong>{item[1]}</li>
    );

    return (
        <div id="about" className="about-me big-section plain-lists">
            <Container>
                <Row>
                    <h1><strong>About Me</strong></h1>
                    <h5 className="pb-2">{props.content.subtitle}</h5>
                    <Col>
                        <ul>
                            {leftList}
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            {rightList}
                            <li><strong className="monokai-green">GitHub: </strong><a href="https://www.linkedin.com/in/steveucho/">linkedin.com/in/SteveUcho/</a></li>
                            <li><strong className="monokai-green">Instagram: </strong><a href="https://www.instagram.com/steveucho/">instagram.com/steveucho/</a></li>
                            <li><strong className="monokai-green">Twitter: </strong><a href="https://twitter.com/SteveUcho">twitter.com/SteveUcho</a></li>
                        </ul>
                    </Col>
                </Row>
                <p className="about-me-blurb">
                    {props.content.description}
                </p>
            </Container>
        </div>
    )
}

export default AboutMe