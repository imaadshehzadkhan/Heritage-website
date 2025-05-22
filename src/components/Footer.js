import React, { Component } from 'react';
import Datas from '../data/footer/footer.json';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import BackToTop from './common/BackToTop';
import { Styles } from "./styles/footerOne.js";

class Footer extends Component {
    render() {
        return (
            <Styles>
                {/* Footer Area */}
                <footer className="footer1" style={{ backgroundImage: `url(assets/images/${process.env.PUBLIC_URL + Datas.backgroundImage})` }}>
                    <Container>
                        <Row>
                            <Col md="4">
                                <div className="footer-logo-info">
                                    <img src={process.env.PUBLIC_URL + "/assets/images/heritagenavlogo.png"} alt="The Heritage School" className="img-fluid" />
                                    <p>Pioneer Institute of Learning is committed to nurturing talent and fostering an environment of academic excellence. Discover the possibilities at our school.</p>
                                    <ul className="list-unstyled">
                                        <li><i className="las la-map-marker"></i>Hanjiwera Pattan, Baramulla, J&K</li>
                                        <li><i className="las la-envelope"></i>pil@pioneerinstitute.in</li>
                                        <li><i className="las la-phone"></i>+91 9596298036</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md="4">
                                <div className="f-links">
                                    <h5>Useful Links</h5>
                                    <ul className="list-unstyled">
                                        <li><Link to={process.env.PUBLIC_URL + "/about"}><i className="las la-angle-right"></i>About Us</Link></li>
                                        <li><Link to={process.env.PUBLIC_URL + "/course-grid"}><i className="las la-angle-right"></i>Admissions</Link></li>
                                        <li><Link to={process.env.PUBLIC_URL + "/about"}><i className="las la-angle-right"></i>About Us</Link></li>
                                        <li><Link to={process.env.PUBLIC_URL + "/contact"}><i className="las la-angle-right"></i>Contact Us</Link></li>
                                        <li><Link to={process.env.PUBLIC_URL + "/events"}><i className="las la-angle-right"></i>Event</Link></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md="4">
                                <div className="upcoming-events">
                                    <h5>Upcoming Events</h5>
                                    <div className="event-box d-flex">
                                        <div className="event-icon">
                                            <i className="las la-calendar-alt"></i>
                                        </div>
                                        <div className="event-content">
                                            <h6>Annual Day Celebrations - A Day of Joy and Festivities</h6>
                                            <p>Mar 30, 2024</p>
                                        </div>
                                    </div>
                                    <div className="event-box d-flex">
                                        <div className="event-icon">
                                            <i className="las la-flask"></i>
                                        </div>
                                        <div className="event-content">
                                            <h6>Science Exhibition - Showcasing Student Innovations</h6>
                                            <p>Apr 15, 2024</p>
                                        </div>
                                    </div>
                                    <div className="event-box d-flex">
                                        <div className="event-icon">
                                            <i className="las la-trophy"></i>
                                        </div>
                                        <div className="event-content">
                                            <h6>Sports Day - Celebrating Athletic Achievements</h6>
                                            <p>May 5, 2024</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </footer>

                {/* Copyright Area */}
                <section className="copyright-area">
                    <Container>
                        <Row>
                            <Col md="6">
                                <div className="copy-text">
                                    <p>Copyright &copy; 2024 | Designed With <span className="heart">❤</span> by ADTS</p>
                                </div>
                            </Col>
                            <Col md="6" className="text-right">
                                <ul className="social list-unstyled list-inline">
                                    <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-facebook-f"></i></a></li>
                                    <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-twitter"></i></a></li>
                                    <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-linkedin-in"></i></a></li>
                                    <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-youtube"></i></a></li>
                                    <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-instagram"></i></a></li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>

                    {/* Back To Top */}
                    <BackToTop/>
                </section>
            </Styles>
        )
    }
}

export default Footer
