import { Col, Container, Row, Tab, Tabs } from "react-bootstrap"
import PhotoCard from "../PhotoCard/PhotoCard";
import './Programming.css'

function Programming(props) {
    const tabs = props.content.tabs.map((tab) =>
        <Tab eventKey={tab.eventKey} title={tab.title} className="monokai-black-bg some-tab">
            <Container>
                <h2 className="monokai-orange pb-2">{tab.subtitle}</h2>
                <Row>
                    <Col md={4}>
                        <PhotoCard backgroundImage={tab.image}/>
                    </Col>
                    <Col md={8}>
                        <div className="era-text">
                            {tab.items.map((item) =>
                                <>
                                    <h5 className="monokai-red">{item.headline}</h5>
                                    <p>
                                        {item.description}
                                    </p>
                                </>
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
        </Tab>
    );

    return (
        <div id="programming" className="programming big-section monokai-green-bg">
            <Container>
                <h1><strong>Programming</strong></h1>
                <h5 className="pb-2">{props.content.subtitle}</h5>
                <Tabs justify defaultActiveKey="past" className="monokai-black-bg all-tabs">
                    {tabs}
                </Tabs>
            </Container>
        </div>
    )
}

export default Programming