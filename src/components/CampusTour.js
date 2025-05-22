import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ModalImage from "react-modal-image";
import { Styles } from "./styles/campusTour.js";

class CampusTour extends Component {
    state = {
        secTitle: "Explore Our Beautiful Campus",
    }

    componentDidMount() {
        // Animation for gallery items on scroll
        const galleryItems = document.querySelectorAll('.tour-box');
        
        const animateGallery = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Calculate a staggered delay based on position
                    const delay = 0.1 + (index % 3) * 0.15;
                    
                    // Alternate animations for variety
                    const animations = ['animate__fadeIn', 'animate__zoomIn', 'animate__fadeInUp'];
                    const animationClass = animations[index % animations.length];
                    
                    setTimeout(() => {
                        entry.target.classList.add('animate__animated', animationClass);
                        entry.target.style.opacity = 1;
                    }, delay * 1000);
                    
                    animateGallery.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        galleryItems.forEach((item) => {
            item.style.opacity = 0;
            animateGallery.observe(item);
        });
    }

    render() {
        return (
            <Styles>
                {/* Campus Tour */}
                <section className="campus-tour">
                    <Container>
                        <Row>
                            <Col md="12">
                                <div className="sec-title text-center animate__animated animate__fadeInDown">
                                    <h4>{this.state.secTitle}</h4>
                                </div>
                            </Col>
                            <Col lg="4" md="6">
                                <div className="tour-box">
                                    <ModalImage 
                                        small={process.env.PUBLIC_URL + "/assets/images/gallery1.jpg"} 
                                        large={process.env.PUBLIC_URL + "/assets/images/gallery1.jpg"} 
                                        alt="Campus Image"
                                        className="gallery-image" 
                                    />
                                    <div className="tour-overlay">
                                        <h5>Academic Block</h5>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" md="6">
                                <div className="tour-box">
                                    <ModalImage 
                                        small={process.env.PUBLIC_URL + "/assets/images/gallery2.jpg"} 
                                        large={process.env.PUBLIC_URL + "/assets/images/gallery2.jpg"} 
                                        alt="Campus Image"
                                        className="gallery-image" 
                                    />
                                    <div className="tour-overlay">
                                        <h5>School Library</h5>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" md="6">
                                <div className="tour-box">
                                    <ModalImage 
                                        small={process.env.PUBLIC_URL + "/assets/images/gallery5.jpg"} 
                                        large={process.env.PUBLIC_URL + "/assets/images/gallery5.jpg"} 
                                        alt="Campus Image"
                                        className="gallery-image" 
                                    />
                                    <div className="tour-overlay">
                                        <h5>Sports Ground</h5>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="6" md="6">
                                <div className="tour-box">
                                    <ModalImage 
                                        small={process.env.PUBLIC_URL + "/assets/images/gallery3.jpg"} 
                                        large={process.env.PUBLIC_URL + "/assets/images/gallery3.jpg"} 
                                        alt="Campus Image"
                                        className="gallery-image" 
                                    />
                                    <div className="tour-overlay">
                                        <h5>Science Lab</h5>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="6" md="6">
                                <div className="tour-box">
                                    <ModalImage 
                                        small={process.env.PUBLIC_URL + "/assets/images/gallery4.jpg"} 
                                        large={process.env.PUBLIC_URL + "/assets/images/gallery4.jpg"} 
                                        alt="Campus Image"
                                        className="gallery-image" 
                                    />
                                    <div className="tour-overlay">
                                        <h5>Computer Lab</h5>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" md="6">
                                <div className="tour-box">
                                    <ModalImage 
                                        small={process.env.PUBLIC_URL + "/assets/images/gallery6.jpg"} 
                                        large={process.env.PUBLIC_URL + "/assets/images/gallery6.jpg"} 
                                        alt="Campus Image"
                                        className="gallery-image" 
                                    />
                                    <div className="tour-overlay">
                                        <h5>Auditorium</h5>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" md="6">
                                <div className="tour-box">
                                    <ModalImage 
                                        small={process.env.PUBLIC_URL + "/assets/images/gallery7.jpg"} 
                                        large={process.env.PUBLIC_URL + "/assets/images/gallery7.jpg"} 
                                        alt="Campus Image"
                                        className="gallery-image" 
                                    />
                                    <div className="tour-overlay">
                                        <h5>Cafeteria</h5>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" md="6">
                                <div className="tour-box">
                                    <ModalImage 
                                        small={process.env.PUBLIC_URL + "/assets/images/gallery8.jpg"} 
                                        large={process.env.PUBLIC_URL + "/assets/images/gallery8.jpg"} 
                                        alt="Campus Image"
                                        className="gallery-image" 
                                    />
                                    <div className="tour-overlay">
                                        <h5>Art Room</h5>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Styles>
        )
    }
}

export default CampusTour
