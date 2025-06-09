import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from "./styles/heroSlider.js";

class HeroSlider extends Component {
    render() {
        return (
            <Styles>
                {/* Hero Video */}
                <section className="hero-slider-area">
                    <div className="video-container">
                        <video 
                            autoPlay 
                            loop 
                            muted 
                            playsInline
                            className="hero-video"
                        >
                            <source src={process.env.PUBLIC_URL + "/assets/images/heritageopener.mp4"} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="video-overlay"></div>
                    </div>
                    <div className="slider-table">
                        <div className="slider-tablecell">
                            <Container>
                                <Row>
                                    <Col md="12">
                                        <div className="slider-box slider-box1">
                                            {/* Buttons removed */}
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </section>
            </Styles>
        )
    }
}

export default HeroSlider
