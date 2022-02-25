import { Col, Container, Row } from "react-bootstrap"
import PhotoCard from "../PhotoCard/PhotoCard"

function ArchAndDes(props) {
    const photoCards = props.content.photoList.map((photo) =>
        <Col xs={6} lg={4} className="photo-col">
            <PhotoCard backgroundImage={photo}></PhotoCard>
        </Col>
    );
    return (
        <div id="archDes" className="monokai-orange-bg big-section">
            <Container>
                <h1><strong>Architecture and Design</strong></h1>
                <h5 className="pb-2">{props.content.subtitle}</h5>
                <Row>
                    <Col md={6}>
                        <p className="arch-des-blurb">
                            {props.content.description}
                            <br/>
                            <br/>
                            {props.content.description2}
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