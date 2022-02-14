import { Col, Container, Row, Tab, Tabs } from "react-bootstrap"
import PhotoCard from "../PhotoCard/PhotoCard";
import './Programming.css'

function Programming() {
    return (
        <div id="programming" className="programming big-section monokai-green-bg">
            <Container>
                <h1><strong>Programming</strong></h1>
                <h5 className="pb-2">A Brief History</h5>
                <Tabs justify defaultActiveKey="past" className="monokai-black-bg all-tabs">
                    <Tab eventKey="past" title="Past" className="monokai-black-bg some-tab">
                        <Container>
                            <h2 className="monokai-orange pb-2">How It All Began</h2>
                            <Row>
                                <Col md={4}>
                                    <PhotoCard backgroundImage="/images/programming/scratch.png"/>
                                </Col>
                                <Col md={8}>
                                    <div className="era-text">
                                        <h5 className="monokai-red">SciOly Scratch</h5>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        </p>
                                        <h5 className="monokai-red">National High School Game Academy</h5>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        </p>
                                        <h5 className="monokai-red">Websites and PHP</h5>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Tab>
                    <Tab eventKey="present" title="Present" className="monokai-black-bg some-tab">
                        <Container>
                            <h2 className="monokai-orange pb-2">Better Programming Era</h2>
                            <Row>
                                <Col md={4}>
                                    <PhotoCard backgroundImage="/images/programming/python.png"/>
                                </Col>
                                <Col md={8}>
                                    <div className="era-text">
                                        <h5 className="monokai-red">SteveUcho.com</h5>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        </p>
                                        <h5 className="monokai-red">Undergraduate Studies</h5>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        </p>
                                        <h5 className="monokai-red">Accrete.AI - The World on its Head</h5>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Tab>
                    <Tab eventKey="future" title="Future" className="monokai-black-bg some-tab">
                        <Container>
                            <h2 className="monokai-orange pb-2">What the Future Holds</h2>
                            <Row>
                                <Col md={4}>
                                    <PhotoCard backgroundImage="/images/programming/question.jpg"/>
                                </Col>
                                <Col md={8}>
                                    <div className="era-text">
                                        <h5 className="monokai-red">Honestly, Who Knows</h5>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Tab>
                </Tabs>
            </Container>
        </div>
    )
}

export default Programming