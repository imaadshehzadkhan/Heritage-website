import React, { Component } from 'react';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import FooterTwo from '../../components/FooterTwo';
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from "./styles/principalMessage.js";

class PrincipalMessage extends Component {
    render() {
        return (
            <Styles>
                {/* Main Wrapper */}
                <div className="main-wrapper principal-message-page">
                    {/* Header 2 */}
                    <HeaderTwo />

                    {/* Breadcroumb */}
                    <BreadcrumbBox title="Message from Principal" />

                    {/* Principal Message Area */}
                    <section className="principal-message-area">
                        <Container>
                            <Row>
                                <Col lg="4" md="5">
                                    <div className="principal-img">
                                        <img src={process.env.PUBLIC_URL + "/assets/images/principal.jpeg"} alt="Principal" className="img-fluid" />
                                        <div className="principal-position">
                                            <h5>Aabeen Nazir</h5>
                                            <p>Principal</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg="8" md="7">
                                    <div className="principal-message">
                                        <div className="section-title">
                                            <h4>Message from <span>Principal</span></h4>
                                        </div>
                                        <p>Dear Parents and Students,</p>
                                        <p>It is my privilege to lead The Heritage School, an institution dedicated to excellence in education and character building. At Heritage, we believe in providing a nurturing environment where students can develop into well-rounded, confident individuals ready to make a positive impact on society.</p>
                                        <p>Our mission is to provide quality education by adopting a holistic and dynamic curriculum, creating an emotionally safe and morally invigorating environment for all types of learners. We strive for excellence in education with the simultaneous development of body, mind, and soul.</p>
                                        <p>The school offers a balanced curriculum with focus on academic rigor, physical education, arts, and character development. Our dedicated team of 62 educators work tirelessly to ensure that each of our 700 students receives personalized attention and guidance.</p>
                                        <p>We value the partnership between home and school, and believe that when we work together, we can help each child achieve their full potential. I encourage parents to be actively involved in their child's education and to maintain open communication with our teachers and staff.</p>
                                        <p>I look forward to working with you to create a positive and enriching educational experience for your child at The Heritage School.</p>
                                        <p className="principal-signature">Aabeen Nazir</p>
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

export default PrincipalMessage 