import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Search from './common/Search';
import StickyMenu from './common/StickyMenu';
import MobileMenu from './common/MobileMenu';
import { Styles } from "./styles/header.js";

class Header extends Component {
    render() {
        return (
            <Styles>
                {/* Topbar */}
                <section className="top-bar">
                    <Container>
                        <Row>
                            <Col lg="8" md="9">
                                <div className="bar-left">
                                    <ul className="list-unstyled list-inline">
                                        <li className="list-inline-item" style={{marginRight: "20px"}}><i className="las la-phone"></i>+91 9906819261</li>
                                        <li className="list-inline-item address-li" style={{marginLeft: "15px", maxWidth: "550px"}}>
                                            <i className="las la-map-marker"></i>
                                            <span style={{fontWeight: "500", display: "inline-block", whiteSpace: "nowrap", fontSize: "14px"}}>Choora Hygam Baramullah J&K 193121</span>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg="4" md="3">
                                <div className="bar-right d-flex justify-content-end">
                                    <ul className="list-unstyled list-inline bar-social">
                                        <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-facebook-f"></i></a></li>
                                        <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-twitter"></i></a></li>
                                        <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-linkedin-in"></i></a></li>
                                        <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-instagram"></i></a></li>
                                    </ul>
                                    <ul className="list-unstyled list-inline bar-login">
                                        <li className="list-inline-item"><Link to={process.env.PUBLIC_URL + "/login"}><i className="las la-user"></i>Log In</Link></li>
                                        <li className="list-inline-item"><Link to={process.env.PUBLIC_URL + "/registration"}><i className="las la-user-edit"></i>Register</Link></li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* Logo and Contact Area */}
                <section className="logo-contact-area bg-white py-3">
                    <Container>
                        <Row className="align-items-center">
                            <Col lg="3" md="3">
                                <div className="logo animate__animated animate__fadeIn">
                                    <Link to={process.env.PUBLIC_URL + "/"}>
                                        <img src={process.env.PUBLIC_URL + "/assets/images/heritageweblogo.png"} alt="Heritage School Choora" style={{maxWidth: '250px', height: 'auto'}} />
                                    </Link>
                                </div>
                            </Col>
                            <Col lg="6" md="6">
                                <div className="logo-contact-box" style={{display: 'flex', justifyContent: 'center'}}>
                                    <div className="emcontact-box" style={{marginRight: '45px', display: 'flex'}}>
                                        <div className="box-icon" style={{
                                            background: '#0D3380',
                                            height: '42px',
                                            marginTop: '6px',
                                            marginRight: '15px',
                                            position: 'relative',
                                            width: '42px',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            boxShadow: '0 4px 10px rgba(13, 51, 128, 0.3)'
                                        }}>
                                            <i className="flaticon-phone-call" style={{
                                                position: 'relative',
                                                zIndex: '111',
                                                fontSize: '20px',
                                                color: '#ffffff',
                                                margin: '0 auto'
                                            }}></i>
                                        </div>
                                        <div className="box-content" style={{display: 'flex', flexDirection: 'column'}}>
                                            <p style={{fontSize: '13px', color: '#666666', marginBottom: '0', fontWeight: '500'}}>Call Us Now</p>
                                            <span style={{fontSize: '15px', color: '#333333', fontWeight: '600', display: 'block'}}>+91 9906819261</span>
                                        </div>
                                    </div>
                                    <div className="emcontact-box" style={{display: 'flex'}}>
                                        <div className="box-icon" style={{
                                            background: '#0D3380',
                                            height: '42px',
                                            marginTop: '6px',
                                            marginRight: '15px',
                                            position: 'relative',
                                            width: '42px',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            boxShadow: '0 4px 10px rgba(13, 51, 128, 0.3)'
                                        }}>
                                            <i className="flaticon-envelope" style={{
                                                position: 'relative',
                                                zIndex: '111',
                                                fontSize: '20px',
                                                color: '#ffffff',
                                                margin: '0 auto'
                                            }}></i>
                                        </div>
                                        <div className="box-content" style={{display: 'flex', flexDirection: 'column'}}>
                                            <p style={{fontSize: '13px', color: '#666666', marginBottom: '0', fontWeight: '500'}}>Enquiry Us</p>
                                            <span style={{fontSize: '15px', color: '#333333', fontWeight: '600', display: 'block'}}>info@heritageschool.in</span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="3" md="3" className="text-right">
                                <div className="apply-btn">
                                    <Link to={process.env.PUBLIC_URL + "/registration"} style={{
                                        fontSize: '14px',
                                        color: '#ffffff',
                                        background: 'linear-gradient(135deg, #0D3380 0%, #082c70 100%)',
                                        display: 'flex',
                                        width: '200px',
                                        height: '40px',
                                        textAlign: 'center',
                                        textTransform: 'uppercase',
                                        fontWeight: '600',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '10px 15px 10px 40px',
                                        borderRadius: '4px',
                                        position: 'relative',
                                        boxShadow: '0 4px 10px rgba(13, 51, 128, 0.3)',
                                        transition: 'all 0.3s ease'
                                    }} 
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow = '0px 6px 15px rgba(13, 51, 128, 0.5)';
                                        e.currentTarget.style.background = 'linear-gradient(135deg, #082c70 0%, #061d4c 100%)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 4px 10px rgba(13, 51, 128, 0.3)';
                                        e.currentTarget.style.background = 'linear-gradient(135deg, #0D3380 0%, #082c70 100%)';
                                    }}>
                                        <i className="las la-clipboard-list" style={{
                                            position: 'absolute',
                                            fontSize: '16px',
                                            left: '5px',
                                            top: '0',
                                            padding: '9px',
                                            width: '35px',
                                            height: '100%',
                                            borderRadius: '4px 0 0 4px',
                                            backgroundColor: '#082c70',
                                            color: '#ffffff',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}></i>APPLY NOW
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* Main Navigation Menu */}
                <section className="main-menu">
                    <Container>
                        <Row>
                            <Col md="12">
                                <div className="main-menu-box">
                                    <div className="menu-box d-flex justify-content-between align-items-center">
                                        <ul className="nav menu-nav">
                                            <li className="nav-item">
                                                <Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>HOME</Link>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/"} data-toggle="dropdown">ADMISSIONS <i className="las la-angle-down"></i></Link>
                                                <div className="horizontal-dropdown">
                                                    <div className="menu-item">
                                                        <Link to={process.env.PUBLIC_URL + "/admissions"}>Admission Process</Link>
                                                    </div>
                                                    <div className="menu-item">
                                                        <Link to={process.env.PUBLIC_URL + "/apply-online"}>Apply Online</Link>
                                                    </div>
                                                    <div className="menu-item">
                                                        <Link to={process.env.PUBLIC_URL + "/fee-structure"}>Fee Structure</Link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/"} data-toggle="dropdown">SCHOOL <i className="las la-angle-down"></i></Link>
                                                <div className="horizontal-dropdown">
                                                    <div className="menu-item">
                                                        <Link to={process.env.PUBLIC_URL + "/about"}>About School</Link>
                                                    </div>
                                                    <div className="menu-item">
                                                        <Link to={process.env.PUBLIC_URL + "/mission-vision"}>Mission and Vision</Link>
                                                    </div>
                                                    <div className="menu-item">
                                                        <Link to={process.env.PUBLIC_URL + "/patron-message"}>Message from Patron</Link>
                                                    </div>
                                                    <div className="menu-item">
                                                        <Link to={process.env.PUBLIC_URL + "/principal-message"}>Message from Principal</Link>
                                                    </div>
                                                    <div className="menu-item">
                                                        <Link to={process.env.PUBLIC_URL + "/facilities"}>Facilities</Link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to={process.env.PUBLIC_URL + "/gallery"}>GALLERY</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to={process.env.PUBLIC_URL + "/about"}>ABOUT US</Link>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/"} data-toggle="dropdown">UPDATES & RESOURCES <i className="las la-angle-down"></i></Link>
                                                <div className="horizontal-dropdown">
                                                    <div className="menu-item">
                                                        <Link to={process.env.PUBLIC_URL + "/news"}>News & Announcements</Link>
                                                    </div>
                                                    <div className="menu-item">
                                                        <Link to={process.env.PUBLIC_URL + "/events"}>Events</Link>
                                                    </div>
                                                    <div className="menu-item">
                                                        <Link to={process.env.PUBLIC_URL + "/downloads"}>Downloads</Link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/"} data-toggle="dropdown">LOGIN <i className="las la-angle-down"></i></Link>
                                                <div className="horizontal-dropdown">
                                                    <div className="menu-item">
                                                        <Link to={process.env.PUBLIC_URL + "/student-login"}>Student Login</Link>
                                                    </div>
                                                    <div className="menu-item">
                                                        <Link to={process.env.PUBLIC_URL + "/parent-login"}>Parent Login</Link>
                                                    </div>
                                                    <div className="menu-item">
                                                        <Link to={process.env.PUBLIC_URL + "/staff-login"}>Staff Login</Link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to={process.env.PUBLIC_URL + "/contact"}>CONTACT</Link>
                                            </li>
                                        </ul>
                                        <div className="d-flex align-items-center">
                                            <ul className="nav search-cart-bar ml-auto">
                                                <li className="nav-item search-box" style={{
                                                    marginRight: '15px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    width: '40px',
                                                    height: '40px'
                                                }}>
                                                    <Search iconColor="#ffffff" iconSize="30px" />
                                                </li>
                                            </ul>
                                            <div className="menu-toggle" style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                cursor: 'pointer',
                                                width: '40px',
                                                height: '40px'
                                            }}>
                                                <i className="fas fa-bars" style={{
                                                    fontSize: '30px',
                                                    color: '#ffffff'
                                                }}></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* Sticky Menu */}
                <StickyMenu />

                {/* Mobile Menu */}
                <MobileMenu />
            </Styles>
        )
    }
}

export default Header
