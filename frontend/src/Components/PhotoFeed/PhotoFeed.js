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
                        <p className="photography-blurb">
                            Before 2021, I mainly only took pictures with my phone #shotoniphone.
                            Last year (Fall of 2021) I got a Sony a7C and I took over 1000+ photos on my trip to the West coast.
                            I'll posting the full resolution photos on this site because Instagram does not do the photos justice.
                            Fun fact that I learned when I was looking over my photos, I subconsciously  really like the color blue.
                            Although  if you ask me what my favorite color is I'd probably say "I don't know" or "it depends", because it's true.
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