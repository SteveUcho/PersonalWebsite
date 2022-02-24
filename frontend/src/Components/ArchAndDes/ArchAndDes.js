import { Col, Container, Row } from "react-bootstrap"
import PhotoCard from "../PhotoCard/PhotoCard"

function ArchAndDes() {
    const photoPathPrefix = "/images/arch-des/"
    const photoNames = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"]
    const photoCards = photoNames.map((photo) =>
        <Col xs={6} lg={4} className="photo-col">
            <PhotoCard backgroundImage={photoPathPrefix+photo}></PhotoCard>
        </Col>
    );
    return (
        <div id="archDes" className="monokai-orange-bg big-section">
            <Container>
                <h1><strong>Architecture and Design</strong></h1>
                <h5 className="pb-2">A Surprising Thing I Enjoy</h5>
                <Row>
                    <Col md={6}>
                        <p className="arch-des-blurb">
                            Before I had ever even heard about computer science or even programming, I always enjoyed architecture and design.
                            For the longest time I wanted to be an Architect, that is until I realized I wasn't very creative artistically.
                            But I still enjoy perusing architectural magazine and keeping up to date with what the starchitects are up to.
                            Three of my favorite architects are Zaha Hadid Architects, Bjarke Ingels Group, and VTN Architects.
                            <br/>
                            <br/>
                            In the summer of 2019, I decided to try and see if there was a path for me between the lines of an architecture and computer science.
                            So, I enrolled in summer classes at Cornell University for Introduction to Architecture.
                            My main take away from that summer was "Architecture is so much more amazing than what I thought it would be".
                            I got to get hands on with architectural thinking and learning and modeling and all the good stuff.
                            I really enjoyed stimulating a part of my brain that I hadn't done much with.
                            <br/>
                            <br/>
                        </p>
                        {/* <div className="see-more">
                            <a href="/arch-des"><h5>More Photos</h5></a>
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

export default ArchAndDes