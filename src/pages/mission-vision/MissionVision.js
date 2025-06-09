import React, { Component } from 'react';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import FooterTwo from '../../components/FooterTwo';
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from "./styles/missionVision.js";

class MissionVision extends Component {
    render() {
        return (
            <Styles>
                {/* Main Wrapper */}
                <div className="main-wrapper mission-vision-page">
                    {/* Header 2 */}
                    <HeaderTwo />

                    {/* Breadcroumb */}
                    <BreadcrumbBox title="Mission and Vision" />

                    {/* Mission Vision Area */}
                    <section className="mission-vision-area">
                        <Container>
                            <Row>
                                <Col lg="12">
                                    <div className="intro-box text-center">
                                        <h3>Guiding Principles of Heritage School</h3>
                                        <p>At Heritage School, our mission and vision statements serve as the foundation for all our educational endeavors. They guide our decision-making, shape our curriculum, and inspire our approach to developing the next generation of leaders.</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="mt-5">
                                <Col lg="12">
                                    <div className="section-title text-center">
                                        <h4>Our Mission</h4>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="align-items-center">
                                <Col lg="6" md="6">
                                    <div className="mission-box">
                                        <p>Our mission is to provide services leading to quality education by adopting holistic and dynamic curriculum, providing emotionally safe and morally invigorating environment to all type of learners. We strive to achieve the excellence in education with simultaneous development of body mind and soul, and to Endeavour to create competent human asset committed to development of nation.</p>
                                        <div className="mission-points">
                                            <ul className="list-unstyled">
                                                <li><i className="fa fa-check"></i>Adopting a holistic and dynamic curriculum for all learners</li>
                                                <li><i className="fa fa-check"></i>Creating an emotionally safe and morally invigorating environment</li>
                                                <li><i className="fa fa-check"></i>Developing body, mind, and soul simultaneously</li>
                                                <li><i className="fa fa-check"></i>Creating competent human assets committed to national development</li>
                                                <li><i className="fa fa-check"></i>Ensuring quality education accessible to all</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg="6" md="6">
                                    <div className="mission-image">
                                        <img src={process.env.PUBLIC_URL + "/assets/images/highlight1.jpg"} alt="Mission" className="img-fluid" />
                                    </div>
                                </Col>
                            </Row>
                            <Row className="mt-5 align-items-center">
                                <Col lg="12">
                                    <div className="section-title text-center">
                                        <h4>Our Vision</h4>
                                    </div>
                                </Col>
                                <Col lg="6" md="6" className="order-md-2 order-1">
                                    <div className="vision-box">
                                        <p>The Heritage values and foster superior levels of educational standard among all the students irrespective of their social status. The school envisions to becomes to World class by providing affordable unparallel learning experience and environment and to illuminate the intellect to prepare responsible citizens who meet the challenges of future, achieve goals successfully and be the best while retaining their culture values.</p>
                                        <div className="vision-points">
                                            <ul className="list-unstyled">
                                                <li><i className="fa fa-check"></i>Fostering superior levels of educational standards for all students regardless of social status</li>
                                                <li><i className="fa fa-check"></i>Becoming a world-class institution with affordable, unparalleled learning experiences</li>
                                                <li><i className="fa fa-check"></i>Illuminating intellects to prepare responsible citizens for future challenges</li>
                                                <li><i className="fa fa-check"></i>Helping students achieve goals successfully while retaining cultural values</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg="6" md="6" className="order-md-1 order-2">
                                    <div className="vision-image">
                                        <img src={process.env.PUBLIC_URL + "/assets/images/highlight3.jpg"} alt="Vision" className="img-fluid" />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>

                    {/* Footer 2 */}
                    <FooterTwo />
                </div>
            </Styles>
        )
    }
}

export default MissionVision 