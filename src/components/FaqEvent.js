import React, { useEffect } from 'react';
import Datas from '../data/faq-event/faq-event.json';
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from "./styles/faqEvent.js";

function FaqEvent() {
    useEffect(() => {
        const accordionButton = document.querySelectorAll(".accordion-button");
        accordionButton.forEach(button => {
            button.addEventListener("click", () => {
                button.classList.toggle("active");
                const content = button.nextElementSibling;

                if (button.classList.contains("active")) {
                    content.className = "accordion-content show";
                    content.style.maxHeight = content.scrollHeight + "px";
                } else {
                    content.className = "accordion-content";
                    content.style.maxHeight = "0";
                }
            });
        });
    });

    return (
        <Styles>
            {/* Faq Section */}
            <section className="event-faq-area">
                <Container>
                    <Row>
                        <Col md="6">
                            <div className="faq-area">
                                <div className="sec-title">
                                    <h4>Frequently Asked <span>Questions</span></h4>
                                </div>
                                <div className="faq-box">
                                    {
                                        Datas.faqDataList.map((faqData, i) => (
                                            <div className="faq-item" key={i}>
                                                <button className="accordion-button active">
                                                    <div className="accordion-icon"><i className="las la-plus"></i></div>
                                                    <p>{faqData.faqTitle}</p>
                                                </button>
                                                <div className="accordion-content show">
                                                    <p>{faqData.faqDesc}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </Col>
                        <Col md="6">
                            <div className="faq-area">
                                <div className="sec-title">
                                    <h4>Parents <span>Speak</span></h4>
                                </div>
                                <div className="testimonial-area">
                                    <div className="testimonial-box">
                                        <div className="testimonial-content">
                                            <div className="testimonial-icon">
                                                <i className="las la-quote-left"></i>
                                            </div>
                                            <p>"I am highly satisfied, The Heritage is doing excellent in all fields. Very nicely planned and organized academic programme. I feel my decision to get my kids admitted was the best ever. Keep it up! Heritage."</p>
                                            <div className="testimonial-name">
                                                <h6>Bhat Parvaiz</h6>
                                                <p>R/O:- Hail Kreeri</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-box">
                                        <div className="testimonial-content">
                                            <div className="testimonial-icon">
                                                <i className="las la-quote-left"></i>
                                            </div>
                                            <p>"THE HERITAGE is providing an inclusive environment where students feel valued and supported every student is excelling."</p>
                                            <div className="testimonial-name">
                                                <h6>Mohd Ashraf</h6>
                                                <p>R/O:- Choora Sopore</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-box">
                                        <div className="testimonial-content">
                                            <div className="testimonial-icon">
                                                <i className="las la-quote-left"></i>
                                            </div>
                                            <p>"HERITAGE Shapes and future and lifts the students up!"</p>
                                            <div className="testimonial-name">
                                                <h6>Fayaz Ahmad Khan</h6>
                                                <p>R/O:- Dungdara Kreeri</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-box">
                                        <div className="testimonial-content">
                                            <div className="testimonial-icon">
                                                <i className="las la-quote-left"></i>
                                            </div>
                                            <p>"Heritage is always at the top and ahead of all."</p>
                                            <div className="testimonial-name">
                                                <h6>Hilal Ahmad</h6>
                                                <p>R/O:- Chandkote</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Styles>
    )
}

export default FaqEvent
