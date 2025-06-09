import React, { Component } from 'react';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import FooterTwo from '../../components/FooterTwo';
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from "./styles/patronMessage.js";

class PatronMessage extends Component {
    render() {
        return (
            <Styles>
                {/* Main Wrapper */}
                <div className="main-wrapper patron-message-page">
                    {/* Header 2 */}
                    <HeaderTwo />

                    {/* Breadcroumb */}
                    <BreadcrumbBox title="Message from Patron" />

                    {/* Patron Message Area */}
                    <section className="patron-message-area">
                        <Container>
                            <Row>
                                <Col lg="4" md="5">
                                    <div className="patron-img">
                                        <img src={process.env.PUBLIC_URL + "/assets/images/patron.jpeg"} alt="Patron" className="img-fluid" />
                                        <div className="patron-position">
                                            <h5>Mohammad Maqbool</h5>
                                            <p>Founder & Patron</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg="8" md="7">
                                    <div className="patron-message">
                                        <div className="section-title">
                                            <h4>Message from <span>Patron</span></h4>
                                        </div>
                                        <p>Dear Parents, Students and Well-wishers,</p>
                                        <p>It gives me immense pleasure to welcome you to The Heritage School. As the founder of this institution, I am proud of what we have achieved since our establishment in 2007. Our journey began with a dream to provide quality education to the rural vicinity at affordable fees, ultimately producing elite human assets for society.</p>
                                        <p>At Heritage School, we believe that education is not merely about academic excellence but also about building character, instilling values, and nurturing young minds to achieve the impossible. Our vision is to become world-class by providing an affordable, unparalleled learning experience and environment that illuminates the intellect to prepare responsible citizens who meet the challenges of the future.</p>
                                        <p>We have successfully overcome all difficult barriers created in our path during our establishment, and now with the grace of Almighty Allah, the school is touching the skies. Today, with 700 students and 62 staff members, we continue to provide a congenial atmosphere where dreams are transformed into reality.</p>
                                        <p>I invite you to join us in this educational journey where we strive to achieve our goals efficiently and produce responsible citizens who will contribute positively to our nation's development.</p>
                                        <p className="patron-signature">Mohammad Maqbool</p>
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

export default PatronMessage 