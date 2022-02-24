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
                                        <h5 className="monokai-red">National High School Game Academy</h5>
                                        <p>
                                            I've always enjoyed playing video games, but in the summer of 2016, I actually made a few. 
                                            At this point in my life, I had tinkered with programming, I was doing an online AP Computer Science course (because my high school didn't have one) and learning from YouTube tutorials. 
                                            Even though I could have said I knew how to program at this point, I wasn't confident I matched with other people. 
                                            I took the video game development Pre-College program at Carnegie Mellon University dubbed, National High School Game Academy, everyone just called it NHSGA. 
                                            I was not surprised to find out that I was behind literary everyone else, not just in programming, but also 3D modeling and animation, and sound design. 
                                            My greatest memories from this time period, were those in which I was up until 3am trying to figure what I was being taught because it was all new to me. 
                                            I mostly wrote Unity game code in C#. 
                                        </p>
                                        <h5 className="monokai-red">Science Olympiad - Scratch</h5>
                                        <p>
                                            In the Fall of 2015, my high school started (in mt opinion) the first STEM focused club. 
                                            Science Olympiad is a multi-disciplinary competition that culminates in a national competition if your high school makes it that far. 
                                            I was in charge of two events: hover craft and game on (scratch game creation). 
                                            Admittedly I ranked better in hover craft than game on, ranking in at 19 out of 63. 
                                            But scratch was my first taste at what programming is, for loops, if statements, functions, etc... 
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
                                            In the summer of 2020, I took the time to learn a few things on my own, one of those things was React. 
                                            I have coded many websites over the years, every time better than the one before it. 
                                            When I first started, I remember thinking to myself, "this is too easy". 
                                            That was just HTML and CSS, no JavaScript, just plain pictures and styles. 
                                            As the pages became bigger and the updates became more frequent, I realized there had to be a better way. 
                                            I started by writing PHP in high school, used template languages at MIDASoft and March for Science NYC, and finally React for this website. 
                                            Admittedly this isn't a hard site to build, but I'm proud I was able to build this site mostly in 2 days, the writing was a separate endeavor. 
                                        </p>
                                        <h5 className="monokai-red">Accrete.AI - My First Internship</h5>
                                        <p>
                                            I had an absolute blast. 
                                            Accrete was no Google or Facebook, but it was pretty much a dream come true. 
                                            My two greatest goals in life have always been: to work around people I admire, and to work doing what I love. 
                                            I had the opportunity to work with some of the smartest people I knew at the time. 
                                            When I started there was no code writing involved, in fact I don't believe there any software engineer interns before me. 
                                            I started in July of 2017 by reading statements from the Federal Reserve and highlighting key information so that a Machine Learning algorithm can learn from it. 
                                            My first actually software development work surrounded an application that consolidated a workflow for interns that were doing the highlighting. 
                                            This project which was almost a year's worth of work was my first dive into building apps, using frameworks like Electron, and improving my understanding of JavaScript in general. 
                                            After writing more than 3,000+ lines of code in JavaScript, spending many sleepless nights designing the system and then implementing it, I realized this is what I want to do for the rest of my life. 
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
                                            My two main goals haven't changed since I decided to major in Computer Science.
                                            <br/>
                                            First, I'd like to work as a software developer to some capacity.
                                            <br/>
                                            Second, I'm hoping that whatever I work on makes an impact on people.
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