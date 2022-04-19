import { Col, Container, Row } from "react-bootstrap";
import PhotoCard from "../PhotoCard/PhotoCard";

import './Blurb.css';

function Blurb(props) {
    return (
        <div className="blurb monokai-black-bg">
            <Container fluid>
                <Row>
                    <Col md={6} className="left-side">
                        <div className="title-head">
                            <h1>{props.content.firstLine}</h1>
                            <h1 className="monokai-red"><strong>{props.content.secondLine}</strong></h1>
                        </div>
                    </Col>
                    <Col md={6} className="right-side">
                        <div className="crop">
                            <PhotoCard backgroundImage={props.content.image}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Blurb