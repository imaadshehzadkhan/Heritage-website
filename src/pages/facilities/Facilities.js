import React, { Component } from 'react';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import FooterTwo from '../../components/FooterTwo';
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from "./styles/facilities.js";

class Facilities extends Component {
    render() {
        return (
            <Styles>
                {/* Main Wrapper */}
                <div className="main-wrapper facilities-page">
                    {/* Header 2 */}
                    <HeaderTwo />

                    {/* Breadcroumb */}
                    <BreadcrumbBox title="Our Facilities" />

                    {/* Facilities Area */}
                    <section className="facilities-area">
                        <Container>
                            <Row>
                                <Col lg="12">
                                    <div className="sec-title text-center">
                                        <h4>Our Facilities</h4>
                                        <p>Providing the best facilities for our students to enhance their learning experience</p>
                                    </div>
                                </Col>
                            </Row>

                            {/* Education & Infrastructure Section */}
                            <Row className="facility-box align-items-center">
                                <Col lg="6" md="6">
                                    <div className="facility-content">
                                        <h5>Quality Education and Infrastructure</h5>
                                        <p>To provide quality education the school has made latest human and other resources available to the students. Best faculty is selected, spacious classrooms and campus is available. Requirements viz Lab, Library, reading room, Computer Lab, change room, museum, Auditorium have been introduced as per latest requirements, smart classrooms have also been introduced, pure drinking water, washroom facility (20 in No.) and prayer room is available.</p>
                                        <ul className="list-unstyled">
                                            <li><i className="fa fa-check"></i>Modern laboratories and library resources</li>
                                            <li><i className="fa fa-check"></i>Spacious and well-ventilated classrooms</li>
                                            <li><i className="fa fa-check"></i>Smart classrooms with latest technology</li>
                                            <li><i className="fa fa-check"></i>Pure drinking water facilities</li>
                                            <li><i className="fa fa-check"></i>Clean and hygienic washrooms</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col lg="6" md="6">
                                    <div className="facility-image">
                                        <img src={process.env.PUBLIC_URL + "/assets/images/gallery1.jpg"} alt="Education Infrastructure" className="img-fluid" />
                                    </div>
                                </Col>
                            </Row>

                            {/* Sports Section */}
                            <Row className="facility-box align-items-center">
                                <Col lg="6" md="6" className="order-md-2 order-1">
                                    <div className="facility-content">
                                        <h5>Sports & Wellbeing</h5>
                                        <p>Sports and physical activities are essential part of life, and at Heritage special interest is paid towards indoor and outdoor activities. Tennis, badminton, Volleyball, Baseball, Kho Kho, Yoga and other games are being taken care of.</p>
                                        <ul className="list-unstyled">
                                            <li><i className="fa fa-check"></i>Indoor and outdoor sports facilities</li>
                                            <li><i className="fa fa-check"></i>Regular physical fitness programs</li>
                                            <li><i className="fa fa-check"></i>Professional sports coaching</li>
                                            <li><i className="fa fa-check"></i>Yoga and meditation sessions</li>
                                            <li><i className="fa fa-check"></i>Annual sports competitions and events</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col lg="6" md="6" className="order-md-1 order-2">
                                    <div className="facility-image">
                                        <img src={process.env.PUBLIC_URL + "/assets/images/gallery3.jpg"} alt="Sports Activities" className="img-fluid" />
                                    </div>
                                </Col>
                            </Row>

                            {/* Co-Curricular Section */}
                            <Row className="facility-box align-items-center">
                                <Col lg="6" md="6">
                                    <div className="facility-content">
                                        <h5>Co-Curricular Activities</h5>
                                        <p>Like Painting, Drawing, Quiz competitions, debates, speeches, student conferences and Bal Melas are organized. Singing and Dancing has also been introduced as an art. Field trips, Picnics and tours are also organized.</p>
                                        <ul className="list-unstyled">
                                            <li><i className="fa fa-check"></i>Art and craft activities</li>
                                            <li><i className="fa fa-check"></i>Debate and public speaking programs</li>
                                            <li><i className="fa fa-check"></i>Music and dance classes</li>
                                            <li><i className="fa fa-check"></i>Educational field trips and excursions</li>
                                            <li><i className="fa fa-check"></i>Regular cultural events and competitions</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col lg="6" md="6">
                                    <div className="facility-image">
                                        <img src={process.env.PUBLIC_URL + "/assets/images/gallery5.jpg"} alt="Co-Curricular Activities" className="img-fluid" />
                                    </div>
                                </Col>
                            </Row>

                            {/* Transport Section */}
                            <Row className="facility-box align-items-center">
                                <Col lg="6" md="6" className="order-md-2 order-1">
                                    <div className="facility-content">
                                        <h5>Transport</h5>
                                        <p>We assure no student is denied facility of an affordable and safe transport from school to home and vice-versa. A fleet of buses are kept at disposal for carrying school children. The transport staff is well trained and student friendly.</p>
                                        <ul className="list-unstyled">
                                            <li><i className="fa fa-check"></i>Safe and reliable transportation</li>
                                            <li><i className="fa fa-check"></i>Well-maintained fleet of buses</li>
                                            <li><i className="fa fa-check"></i>Trained and friendly transport staff</li>
                                            <li><i className="fa fa-check"></i>Convenient pickup and drop points</li>
                                            <li><i className="fa fa-check"></i>Affordable transport fees</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col lg="6" md="6" className="order-md-1 order-2">
                                    <div className="facility-image">
                                        <img src={process.env.PUBLIC_URL + "/assets/images/highlight6.jpg"} alt="School Transport" className="img-fluid" />
                                    </div>
                                </Col>
                            </Row>
                            
                            {/* School Song Section */}
                            <Row className="mt-5 mb-5">
                                <Col lg="12">
                                    <div className="sec-title text-center">
                                        <h4><span className="heading-icon"><i className="las la-music"></i></span> School Song</h4>
                                        <div className="heading-line"></div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="8" md="10" className="mx-auto">
                                    <div className="narrative-poem-container">
                                        <div className="poem-header">
                                            <h5>Heritage School Song</h5>
                                        </div>
                                        <div className="poem-content">
                                            <div className="school-song-image">
                                                <img src={process.env.PUBLIC_URL + "/assets/images/heritagesong.JPG"} alt="Heritage School Song" className="img-fluid" />
                                            </div>
                                            
                                            <p className="poem-text">
                                                I dream the Heritage<br/>
                                                Should have the prestige.<br/>
                                                In all this area<br/>
                                                With good criteria<br/>
                                                Never should down it !<br/>
                                                Let all we crown it !<br/>
                                                It is the home<br/>
                                                It is my home and your home
                                            </p>
                                            
                                            <p className="poem-text">
                                                Oh ! when I look at you<br/>
                                                I feel it everywhere only you<br/>
                                                You are my dream land<br/>
                                                Where my dreams will come true<br/>
                                                Let's be Majestic<br/>
                                                Let's be delicate<br/>
                                                Let's be vigilant<br/>
                                                Let's be dedicate
                                            </p>
                                            
                                            <p className="poem-text">
                                                It is the aim<br/>
                                                It is my aim and your aim<br/>
                                                Let's be full moon<br/>
                                                Let's be crescent<br/>
                                                Let's be Supreme<br/>
                                                Let's be decent<br/>
                                                It is the dream<br/>
                                                It is my dream and your dream
                                            </p>
                                            
                                            <div className="school-crest">
                                                <img src={process.env.PUBLIC_URL + "/assets/images/heritageweblogo.png"} alt="Heritage School Logo" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            
                            {/* School Rules Section */}
                            <Row className="mt-5 mb-4">
                                <Col lg="12">
                                    <div className="sec-title text-center">
                                        <h4><span className="heading-icon"><i className="las la-gavel"></i></span> School Rules & Regulations</h4>
                                        <div className="heading-line"></div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="10" md="12" className="mx-auto">
                                    <div className="faq-rules-container">
                                        <div className="rules-title">
                                            <h3>Discipline & Code of Conduct</h3>
                                        </div>
                                        <div className="rules-intro text-center">
                                            <div className="quote-container">
                                                <span className="quote-mark quote-left">"</span>
                                                <p className="rules-quote">Life without discipline is barren. Discipline makes life meaningful. Since discipline can make a life successful so 1st rule in the school is that students have to obey all the school rules and regulations with utmost discipline.</p>
                                                <span className="quote-mark quote-right">"</span>
                                            </div>
                                        </div>
                                        
                                        <div className="faq-columns">
                                            <div className="column-left">
                                                <div className="faq-item">
                                                    <div className="hex-icon">
                                                        <i className="las la-clock"></i>
                                                    </div>
                                                    <div className="faq-content">
                                                        <h5>Punctuality</h5>
                                                        <p>Students have to be punctual and regular.</p>
                                                    </div>
                                                </div>
                                                
                                                <div className="faq-item">
                                                    <div className="hex-icon">
                                                        <i className="las la-tshirt"></i>
                                                    </div>
                                                    <div className="faq-content">
                                                        <h5>Dress Code</h5>
                                                        <p>Proper dress code /Uniform is only allowed.</p>
                                                    </div>
                                                </div>
                                                
                                                <div className="faq-item">
                                                    <div className="hex-icon">
                                                        <i className="las la-comments"></i>
                                                    </div>
                                                    <div className="faq-content">
                                                        <h5>Language & Ethics</h5>
                                                        <p>Use of proper language and ethics are to be observed strictly.</p>
                                                    </div>
                                                </div>
                                                
                                                <div className="faq-item">
                                                    <div className="hex-icon">
                                                        <i className="las la-book"></i>
                                                    </div>
                                                    <div className="faq-content">
                                                        <h5>Academic Diligence</h5>
                                                        <p>Negligence on part of student in studies, school rules will be cause of discharge from the school.</p>
                                                    </div>
                                                </div>
                                                
                                                <div className="faq-item">
                                                    <div className="hex-icon">
                                                        <i className="las la-users"></i>
                                                    </div>
                                                    <div className="faq-content">
                                                        <h5>Parent Meetings</h5>
                                                        <p>Parents are allowed to meet school authorities during prescribed visiting hours.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="column-right">
                                                <div className="faq-item">
                                                    <div className="hex-icon">
                                                        <i className="las la-door-open"></i>
                                                    </div>
                                                    <div className="faq-content">
                                                        <h5>Withdrawal</h5>
                                                        <p>In case of withdrawal one month advance applications is to be produced.</p>
                                                    </div>
                                                </div>
                                                
                                                <div className="faq-item">
                                                    <div className="hex-icon">
                                                        <i className="las la-money-bill"></i>
                                                    </div>
                                                    <div className="faq-content">
                                                        <h5>Fee Payment</h5>
                                                        <p>School fee and dues are to be liquidated on monthly basis and default will cause parent to withdraw the student.</p>
                                                    </div>
                                                </div>
                                                
                                                <div className="faq-item">
                                                    <div className="hex-icon">
                                                        <i className="las la-mobile"></i>
                                                    </div>
                                                    <div className="faq-content">
                                                        <h5>Mobile Phones</h5>
                                                        <p>No mobile phones are allowed to school.</p>
                                                    </div>
                                                </div>
                                                
                                                <div className="faq-item">
                                                    <div className="hex-icon">
                                                        <i className="las la-broom"></i>
                                                    </div>
                                                    <div className="faq-content">
                                                        <h5>Cleanliness</h5>
                                                        <p>Students have to be habitually clean and always neatly dressed.</p>
                                                    </div>
                                                </div>
                                                
                                                <div className="faq-item">
                                                    <div className="hex-icon">
                                                        <i className="las la-exchange-alt"></i>
                                                    </div>
                                                    <div className="faq-content">
                                                        <h5>Borrowing</h5>
                                                        <p>Lending or borrowing of money or other articles is not allowed.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

export default Facilities 