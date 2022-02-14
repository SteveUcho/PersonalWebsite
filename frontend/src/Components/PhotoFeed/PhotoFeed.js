import { Col, Container, Row } from "react-bootstrap";
import PhotoCard from "../PhotoCard/PhotoCard";
import './PhotoFeed.css';

function InstagramFeed() {
    const photoPathPrefix = "/images/photography/"
    const photoNames = ["1.JPG", "2.JPG", "3.JPG", "4.JPG"]
    const photoCards = photoNames.map((photo) =>
        <Col xs={6} lg={4} className="photo-col">
            <PhotoCard backgroundImage={photoPathPrefix+photo}></PhotoCard>
        </Col>
    );
    return (
        <div id="photography" className="monokai-cream-bg big-section">
            <Container>
                <h1><strong>Photography</strong></h1>
                <h5 className="pb-2">Mainly a Hobby</h5>
                <Row>
                    <Col md={6}>
                        <p className="about-me-blurb">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <div className="see-more">
                            <a href="/photography"><h5>More Photos</h5></a>
                        </div>
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