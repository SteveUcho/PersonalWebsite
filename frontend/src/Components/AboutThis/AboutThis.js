import { Container } from "react-bootstrap"

function AboutThis(props) {
    return (
        <div id="aboutThis" className="big-section monokai-cream-bg">
            <Container>
                <h1><strong>About This Website</strong></h1>
                <h5 className="pb-2">{props.content.subtitle}</h5>
                <p className="about-me-blurb">
                    {props.content.description}
                </p>
            </Container>
        </div>
    )
}

export default AboutThis