import { Col, Container, Row } from "react-bootstrap";
import PhotoCard from "../PhotoCard/PhotoCard";
import './PhotoFeed.css';

function InstagramFeed(props) {
    const photoCards = props.content.photoList.map((photo) =>
        <Col xs={6} lg={4} className="photo-col">
            <PhotoCard backgroundImage={photo}></PhotoCard>
        </Col>
    );
    return (
        <div id="photography" className="monokai-cream-bg big-section">
            <Container>
                <h1><strong>Photography</strong></h1>
                <h5 className="pb-2">{props.content.subtitle}</h5>
                <Row>
                    <Col md={6}>
                        <p className="photography-blurb">
                            {props.content.description}
                        </p>
                        {/* <div className="see-more">
                            <a href="/photography"><h5>More Photos</h5></a>
                        </div> */}
                    </Col>
                    <Col>
                        <Row>
                            {photoCards}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default InstagramFeed