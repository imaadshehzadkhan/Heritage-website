import React, { Component } from 'react';
import Datas from '../data/icon-box/icon-box.json';
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from "./styles/iconBox.js";

class IconBox extends Component {
    componentDidMount() {
        // Add fade-in animation on scroll
        const animatedItems = document.querySelectorAll('.animated-box');
        
        const fadeInObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const delay = entry.target.dataset.delay || 0;
                    setTimeout(() => {
                        entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                        entry.target.style.opacity = 1;
                    }, delay);
                    fadeInObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        animatedItems.forEach((item, index) => {
            item.style.opacity = 0;
            item.dataset.delay = index * 200; // Stagger the animations
            fadeInObserver.observe(item);
        });
    }

    render() {
        return (
            <Styles>
                {/* Icon Box */}
                <section className="icon-box-area">
                    <Container>
                        <Row className="justify-content-center">
                            {
                                Datas.map((data, i) => (
                                    <Col lg={4} md={4} sm={12} key={i}>
                                        <div className="full-icon-box animated-box">
                                            <div className="icon-box">
                                                <div className="d-flex align-items-center">
                                                <div className={`${data.uniqClass} animate__animated animate__pulse animate__infinite animate__slower`}>
                                                    <i className={data.boxIcon}></i>
                                                </div>
                                                <div className="box-title">
                                                    <h6>{data.title}</h6>
                                                    <p>{data.subTitle}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                ))
                            }
                        </Row>
                    </Container>
                </section>
            </Styles>
        )
    }
}

export default IconBox
