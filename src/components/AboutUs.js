import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import VideoModal from './common/VideoModal';
import CountUp from 'react-countup';
import { Styles } from "./styles/aboutUs.js";

class AboutUs extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
            isMounted: false,
            countStarted: false
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount() {
        this.setState({ isMounted: true });
        
        // Add scroll animations
        const animatedElements = document.querySelectorAll('.scroll-animation');
        
        const scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const animationClass = entry.target.dataset.animation || 'animate__fadeIn';
                    const delay = entry.target.dataset.delay || '0s';
                    
                    entry.target.classList.add('animate__animated', animationClass);
                    entry.target.style.animationDelay = delay;
                    
                    if (entry.target.classList.contains('counter-trigger') && !this.state.countStarted) {
                        this.setState({ countStarted: true });
                    }
                    
                    scrollObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        animatedElements.forEach(element => {
            scrollObserver.observe(element);
        });
    }

    componentWillUnmount() {
        // Prevent memory leak warning
        this.setState = (state, callback) => {
            return;
        };
    }

    openModal() {
        if (this.state.isMounted) {
            this.setState({ isOpen: true });
        }
    }

    closeModal() {
        if (this.state.isMounted) {
            this.setState({ isOpen: false });
        }
    }

    render() {
        return (
            <Styles>
                {/* About Us */}
                <section className="about-us">
                    <Container>
                        <Row>
                            <Col md="6">
                                <div className="about-image scroll-animation" data-animation="animate__fadeIn" data-delay="0.2s">
                                    <img src={process.env.PUBLIC_URL + "/assets/images/about1.jpg"} className="main-img" alt="About The Heritage School" />
                                    <img src={process.env.PUBLIC_URL + "/assets/images/pattern.png"} className="pattern-img scroll-animation" data-animation="animate__zoomIn" data-delay="0.5s" alt="" />
                                    <div className="video-player scroll-animation" data-animation="animate__fadeInUp" data-delay="0.8s" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/about2.jpg)`}}>
                                        {this.state.isMounted && (
                                            <VideoModal 
                                                isOpen={this.state.isOpen} 
                                                videoId="uXFUl0KcIkA" 
                                                onClose={this.closeModal} 
                                            />
                                        )}
                                        <button onClick={this.openModal} className="play-button animate__animated animate__pulse animate__infinite">
                                            <i className="las la-play"></i>
                                        </button>
                                    </div>
                                </div>
                            </Col>
                            <Col md="6">
                                <div className="about-content">
                                    <h4 className="about-title scroll-animation" data-animation="animate__fadeInRight" data-delay="0.3s">About The Heritage School</h4>
                                    <p className="about-para scroll-animation" data-animation="animate__fadeInRight" data-delay="0.5s">
                                        The Heritage School is a premier educational institution committed to nurturing young minds through a balanced blend of academic excellence and moral values. 
                                        <span className="scroll-animation" data-animation="animate__fadeIn" data-delay="1s">Our school provides a dynamic learning environment where students can discover their potential and grow into responsible global citizens.</span>
                                    </p>
                                    <Row>
                                        <Col sm="4">
                                            <div className="counter-box box1 text-center scroll-animation counter-trigger" data-animation="animate__fadeInUp" data-delay="0.4s">
                                                <h3><CountUp end={970} duration={3} start={this.state.countStarted ? null : 0} /><i className="las la-plus"></i></h3>
                                                <p>Happy Students</p>
                                            </div>
                                        </Col>
                                        <Col sm="4">
                                            <div className="counter-box box2 text-center scroll-animation counter-trigger" data-animation="animate__fadeInUp" data-delay="0.6s">
                                                <h3><CountUp end={130} duration={3} start={this.state.countStarted ? null : 0} /><i className="las la-plus"></i></h3>
                                                <p>Teachers</p>
                                            </div>
                                        </Col>
                                        <Col sm="4">
                                            <div className="counter-box box3 text-center scroll-animation counter-trigger" data-animation="animate__fadeInUp" data-delay="0.8s">
                                                <h3><CountUp end={340} duration={3} start={this.state.countStarted ? null : 0} /><i className="las la-plus"></i></h3>
                                                <p>Courses</p>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Link className="readmore-btn scroll-animation" data-animation="animate__fadeInUp" data-delay="1s" to={process.env.PUBLIC_URL + "/about"}>Read More</Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Styles>
        )
    }
}

export default AboutUs
