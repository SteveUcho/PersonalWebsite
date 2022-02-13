import { Col, Collapse, Container, Row } from "react-bootstrap"
import React, { useState } from 'react';
import PhotoCard from "../PhotoCard/PhotoCard";
import './Programming.css'

function exclusiveOpen(index, aList) {
    for (let i = 0; i < aList.length; i++) {
        if (i !== index) {
            aList[i][1](false)
        }
        else {
            aList[index][1](!aList[i][0])
        }
    }
}

function Programming() {
    const [pastOpen, setPastOpen] = useState(false);
    const [presentOpen, setPresentOpen] = useState(false);
    const [futureOpen, setFutureOpen] = useState(false);

    const allDrawers = [[pastOpen, setPastOpen], [presentOpen, setPresentOpen], [futureOpen, setFutureOpen]]

    return (
        <div id="programming" className="programming big-section monokai-green-bg">
            <Container>
                <h1><strong>Programming</strong></h1>
                <Row>
                    <Col>
                        <h2>Past</h2>
                        <div onClick={() => exclusiveOpen(0, allDrawers)} className="clickable">
                            <PhotoCard backgroundImage="/images/programming/scratch.png"/>
                        </div>
                    </Col>
                    <Col>
                        <h2>Present</h2>
                        <div onClick={() => exclusiveOpen(1, allDrawers)} className="clickable">
                            <PhotoCard backgroundImage="/images/programming/python.png"/>
                        </div>
                    </Col>
                    <Col>
                        <h2>Future</h2>
                        <div onClick={() => exclusiveOpen(2, allDrawers)} className="clickable">
                            <PhotoCard backgroundImage="/images/programming/question.jpg"/>
                        </div>
                    </Col>
                    <Collapse in={pastOpen}>
                        <div>
                            <div className="era-text">
                                <h2>My Past</h2>
                                <h5>SciOly Scratch</h5>
                                <p>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                    terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                    labore wes anderson cred nesciunt sapiente ea proident.
                                </p>
                                <h5>National High School Game Academy</h5>
                                <p>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                    terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                    labore wes anderson cred nesciunt sapiente ea proident.
                                </p>
                                <h5>Websites and PHP</h5>
                                <p>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                    terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                    labore wes anderson cred nesciunt sapiente ea proident.
                                </p>
                            </div>
                        </div>
                    </Collapse>
                    <Collapse in={presentOpen}>
                        <div>
                            <div className="era-text">
                                <h2>My Present</h2>
                                <h5>SciOly Scratch</h5>
                                <p>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                    terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                    labore wes anderson cred nesciunt sapiente ea proident.
                                </p>
                                <h5>National High School Game Academy</h5>
                                <p>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                    terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                    labore wes anderson cred nesciunt sapiente ea proident.
                                </p>
                                <h5>Websites and PHP</h5>
                                <p>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                    terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                    labore wes anderson cred nesciunt sapiente ea proident.
                                </p>
                            </div>
                        </div>
                    </Collapse>
                    <Collapse className="monokai-orange" in={futureOpen}>
                        <div>
                            <div className="era-text">
                                <h2>My Future</h2>
                                <p>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                    terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                    labore wes anderson cred nesciunt sapiente ea proident.
                                </p>
                            </div>
                        </div>
                    </Collapse>
                </Row>
            </Container>
        </div>
    )
}

export default Programming