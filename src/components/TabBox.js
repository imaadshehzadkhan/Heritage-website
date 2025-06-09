import React, { Component } from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { Styles } from "./styles/tabBox.js";

class TabBox extends Component {

    render() {
        return (
            <Styles>
                {/* Tab Box Area */}
                <section className="tab-section">
                    <Container>
                        <Tab.Container defaultActiveKey="why">
                            <Row>
                                <Col lg="3" md="4">
                                    <Nav className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link eventKey="why"><i className="las la-arrow-right"></i> Why Heritage</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="mission"><i className="las la-arrow-right"></i> Our Mission</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="vision"><i className="las la-arrow-right"></i> Our Vision</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="values"><i className="las la-arrow-right"></i> Our Values</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="approach"><i className="las la-arrow-right"></i> Our Approach</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col lg="9" md="8">
                                    <Tab.Content>
                                        <Tab.Pane eventKey="why">
                                            <h4 className="tab-title">Why Heritage School</h4>
                                            <p className="tab-desc">The Heritage School, founded in 2007 by Mohammad Maqbool, has emerged as a premier educational institution in the region. Operating from its beautiful campus in Hygam among lush green orchards, the school provides a congenial atmosphere to nurture young minds. Recognized by the J&K Government and ISO-Certified, we have successfully transformed the dream of providing quality education to rural areas at affordable fees into reality.</p>
                                            <ul className="list-unstyled check-list">
                                                <li><i className="fa fa-check"></i>Experienced and dedicated team of 62 staff members committed to educational excellence</li>
                                                <li><i className="fa fa-check"></i>Serving a community of 700+ students with personalized attention and care</li>
                                                <li><i className="fa fa-check"></i>Accredited by multiple organizations and institutions of repute</li>
                                                <li><i className="fa fa-check"></i>Safe and nurturing environment that promotes curiosity and creativity</li>
                                                <li><i className="fa fa-check"></i>Strong emphasis on creating elite human assets for society through holistic education</li>
                                            </ul>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="mission">
                                            <h4 className="tab-title">Our Mission</h4>
                                            <p className="tab-desc">Our mission is to provide services leading to quality education by adopting holistic and dynamic curriculum, providing emotionally safe and morally invigorating environment to all type of learners. We strive to achieve the excellence in education with simultaneous development of body mind and soul, and to Endeavour to create competent human asset committed to development of nation.</p>
                                            <ul className="list-unstyled check-list">
                                                <li><i className="fa fa-check"></i>Adopting a holistic and dynamic curriculum for all learners</li>
                                                <li><i className="fa fa-check"></i>Creating an emotionally safe and morally invigorating environment</li>
                                                <li><i className="fa fa-check"></i>Developing body, mind, and soul simultaneously</li>
                                                <li><i className="fa fa-check"></i>Creating competent human assets committed to national development</li>
                                                <li><i className="fa fa-check"></i>Ensuring quality education accessible to all</li>
                                            </ul>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="vision">
                                            <h4 className="tab-title">Our Vision</h4>
                                            <p className="tab-desc">The Heritage values and foster superior levels of educational standard among all the students irrespective of their social status. The school envisions to becomes to World class by providing affordable unparallel learning experience and environment and to illuminate the intellect to prepare responsible citizens who meet the challenges of future, achieve goals successfully and be the best while retaining their culture values.</p>
                                            <ul className="list-unstyled check-list">
                                                <li><i className="fa fa-check"></i>Fostering superior levels of educational standards for all students regardless of social status</li>
                                                <li><i className="fa fa-check"></i>Becoming a world-class institution with affordable, unparalleled learning experiences</li>
                                                <li><i className="fa fa-check"></i>Illuminating intellects to prepare responsible citizens for future challenges</li>
                                                <li><i className="fa fa-check"></i>Helping students achieve goals successfully while retaining cultural values</li>
                                            </ul>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="values">
                                            <h4 className="tab-title">Our Values</h4>
                                            <p className="tab-desc">The core values of Heritage School guide our educational philosophy and day-to-day operations. These values are deeply embedded in our curriculum and school culture, shaping how we interact with students, parents, and the community at large.</p>
                                            <ul className="list-unstyled check-list">
                                                <li><i className="fa fa-check"></i><strong>Excellence:</strong> Striving for the highest standards in all endeavors, academic and otherwise</li>
                                                <li><i className="fa fa-check"></i><strong>Integrity:</strong> Promoting honesty, ethics, and moral courage in thought and action</li>
                                                <li><i className="fa fa-check"></i><strong>Respect:</strong> Fostering mutual respect, tolerance, and appreciation for diversity</li>
                                                <li><i className="fa fa-check"></i><strong>Responsibility:</strong> Encouraging personal and social responsibility toward self, others, and the environment</li>
                                                <li><i className="fa fa-check"></i><strong>Innovation:</strong> Embracing creativity, critical thinking, and adaptability in a changing world</li>
                                            </ul>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="approach">
                                            <h4 className="tab-title">Our Educational Approach</h4>
                                            <p className="tab-desc">Heritage School follows a student-centered approach to education that balances traditional learning methods with innovative teaching strategies. We believe that every child is unique and deserves an education tailored to their individual needs, interests, and learning styles. Our aim is to achieve our goals efficiently!</p>
                                            <ul className="list-unstyled check-list">
                                                <li><i className="fa fa-check"></i>Blend of theoretical knowledge and practical applications to ensure comprehensive understanding</li>
                                                <li><i className="fa fa-check"></i>Integration of technology and digital resources to enhance learning experiences</li>
                                                <li><i className="fa fa-check"></i>Regular assessments that focus on measuring growth rather than just performance</li>
                                                <li><i className="fa fa-check"></i>Collaborative learning environments that encourage teamwork and peer learning</li>
                                                <li><i className="fa fa-check"></i>Strong mentorship program connecting students with teachers and industry professionals</li>
                                            </ul>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Container>
                </section>
            </Styles>
        )
    }
}

export default TabBox
