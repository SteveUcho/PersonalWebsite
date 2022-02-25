import { Col, Container, Row } from "react-bootstrap";
import PhotoCard from "../PhotoCard/PhotoCard";

import './Blurb.css';

function Blurb() {
    return (
        <div className="blurb monokai-black-bg">
            <Container fluid>
                <Row>
                    <Col md={6} className="left-side">
                        <div className="title-head">
                            <h1> My name is, what </h1>
                            <h1 className="monokai-red"><strong>Steve</strong></h1>
                        </div>
                    </Col>
                    <Col md={6} className="right-side">
                        <div className="crop">
                            <PhotoCard backgroundImage="/images/profilePic2.jpg"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Blurb