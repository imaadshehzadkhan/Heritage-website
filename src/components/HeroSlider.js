import React, { Component } from 'react';
import Datas from '../data/hero/hero-slider.json';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Swiper from 'react-id-swiper';
import { Styles } from "./styles/heroSlider.js";

class HeroSlider extends Component {
    render() {
        const settings = {
            slidesPerView: 1,
            loop: true,
            speed: 3000,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },
            watchSlidesVisibility: true,
            effect: 'fade',
            navigation: {
                nextEl: '.slider-button-next',
                prevEl: '.slider-button-prev'
            },
            renderPrevButton: () => (
                <div className="swiper-btn slider-button-prev"><i className="flaticon-arrow-left-th"></i></div>
            ),
            renderNextButton: () => (
                <div className="swiper-btn slider-button-next"><i className="flaticon-arrow-right-th"></i></div>
            )
        };

        return (
            <Styles>
                {/* Hero Slider */}
                <section className="hero-slider-area">
                    <Swiper {...settings}>
                        {
                            Datas.map((data, i) => (
                                <div className="slider-item" key={i}>
                                    <div className="image-container">
                                        <img src={process.env.PUBLIC_URL + `/assets/images/${data.backgroundImage}`} className="slider-image" alt={data.backgroundImage} />
                                    </div>
                                    <div className="slider-table">
                                        <div className="slider-tablecell">
                                            <Container>
                                                <Row>
                                                    <Col md="12">
                                                        <div className={data.uniqClass}>
                                                            <div className="slider-title animate__animated animate__slideInDown animate__delay-0.5s">
                                                                <p>{data.title}</p>
                                                            </div>
                                                            <div className="slider-desc animate__animated animate__zoomIn animate__delay-1s">
                                                                <h1>Welcome to The Heritage School Choora</h1>
                                                            </div>
                                                            <div className="slider-btn animate__animated animate__fadeInUp animate__delay-1.5s">
                                                                <Link className="slider-btn1 animate__animated animate__pulse animate__infinite animate__slower" to={process.env.PUBLIC_URL + `/${data.btnOneLink}`}>Our Courses</Link>
                                                                <Link className="slider-btn2" to={process.env.PUBLIC_URL + `/${data.btnTwoLink}`}>Contact Us</Link>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Swiper>
                </section>
            </Styles>
        )
    }
}

export default HeroSlider
