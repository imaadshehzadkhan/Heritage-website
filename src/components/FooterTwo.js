import React, { useEffect } from 'react';
import Datas from '../data/footer/footer2.json';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import BackToTop from './common/BackToTop';
import { Styles } from "./styles/footerTwo.js";

function FooterTwo() {
    useEffect(() => {
        const form = document.getElementById("form4");
        const email = document.getElementById("email4");

        form.addEventListener("submit", formSubmit);

        function formSubmit(e) {
            e.preventDefault();

            const emailValue = email.value.trim();

            if (emailValue === "") {
                setError(email, "Email can't be blank");
            } else if (!isEmail(emailValue)) {
                setError(email, "Not a valid email");
            } else {
                setSuccess(email);
            }
        }

        function setError(input, message) {
            const formControl = input.parentElement;
            const errorMsg = formControl.querySelector(".input-msg4");
            formControl.className = "form-control error";
            errorMsg.innerText = message;
        }

        function setSuccess(input) {
            const formControl = input.parentElement;
            formControl.className = "form-control success";
        }

        function isEmail(email) {
            return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
        }
    });

    return (
        <Styles>
            {/* Footer Two */}
            <footer className="footer2" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${Datas.backgroundImage})` }}>
                <Container>
                    <Row>
                        <Col md="4">
                            <div className="footer-logo-info">
                                <img src={process.env.PUBLIC_URL + "/assets/images/heritageschoolnew.png"} alt="Heritage School Logo" className="img-fluid" style={{
                                    maxWidth: '100%',
                                    maxHeight: '120px',
                                    marginBottom: '20px'
                                }} />
                                <p>The Heritage School provides a nurturing environment where students develop into well-rounded, confident individuals ready to make a positive impact on society through academic excellence and character development.</p>
                                <ul className="list-unstyled">
                                    <li><i className="las la-map-marker"></i>Choora Hygam Baramullah J&K 193121</li>
                                    <li><i className="las la-envelope"></i>contact@theheritageschool.in</li>
                                    <li><i className="las la-phone"></i>+91 9906819261, +91 9797960419</li>
                                </ul>
                            </div>
                        </Col>
                        <Col md="4">
                            <div className="f-links">
                                <h5>Quick Links</h5>
                                <ul className="list-unstyled">
                                    <li><Link to={process.env.PUBLIC_URL + "/about"}><i className="las la-angle-right"></i>About Us</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + "/admissions"}><i className="las la-angle-right"></i>Admissions</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + "/faculty"}><i className="las la-angle-right"></i>Our Faculty</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + "/gallery"}><i className="las la-angle-right"></i>Photo Gallery</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + "/contact"}><i className="las la-angle-right"></i>Contact Us</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + "/faq"}><i className="las la-angle-right"></i>FAQ</Link></li>
                                </ul>
                            </div>
                        </Col>
                        <Col md="4">
                            <div className="f-newsletter">
                                <h5>Stay Connected</h5>
                                <p>Subscribe to our newsletter to receive the latest updates, news and announcements from Heritage School.</p>

                                <form id="form4" className="form">
                                    <p className="form-control">
                                        <input type="email" placeholder="Enter your email" id="email4" />
                                        <span className="input-msg4"></span>
                                    </p>
                                    <button>Subscribe Now</button>
                                </form>
                                
                                <div className="social-icons-footer mt-4">
                                    <ul className="social-big list-unstyled list-inline">
                                        <li className="list-inline-item"><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                                        <li className="list-inline-item"><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                                        <li className="list-inline-item"><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col md="12">
                            <div className="copytext-area text-center">
                                <p>Copyright &copy; {new Date().getFullYear()} Heritage School | Designed With <i className="las la-heart"></i> by <a href="#" target="_blank" rel="noopener noreferrer">TEAM ADTS</a></p>
                                <ul className="social list-unstyled list-inline">
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-youtube"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fab fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>

                {/* Back To Top  */}
                <BackToTop />
            </footer>
        </Styles>
    );
}

export default FooterTwo
