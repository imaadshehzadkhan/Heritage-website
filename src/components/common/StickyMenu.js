import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import { Styles } from "./styles/stickyMenu.js";

function StickyMenu() {
    useEffect(() => {
        window.addEventListener("scroll", () => {
            const stickyMenu = document.querySelector(".sticky-menu");

            if (window.scrollY > 160) {
                stickyMenu.classList.add("sticky");
            } else {
                stickyMenu.classList.remove("sticky");
            }
        });
    });

    return (
        <Styles>
            {/* Sticky Menu */}
            <section className="sticky-menu">
                <div className="logo">
                    <Link to={process.env.PUBLIC_URL + "/"}>
                        <img src={process.env.PUBLIC_URL + "/assets/images/heritageweblogo.png"} alt="Heritage School" />
                    </Link>
                </div>
                <div className="menu-box">
                    <ul className="nav menu-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>HOME</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/"} data-toggle="dropdown">ADMISSIONS <i className="las la-angle-down"></i></Link>
                            <ul className="dropdown list-unstyled">
                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/admissions"}>Admission Process</Link></li>
                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/registration"}>Apply Online</Link></li>
                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/fees"}>Fee Structure</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/"} data-toggle="dropdown">SCHOOL <i className="las la-angle-down"></i></Link>
                            <ul className="dropdown list-unstyled">
                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/about"}>About School</Link></li>
                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/mission-vision"}>Mission and Vision</Link></li>
                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/patron-message"}>Message from Patron</Link></li>
                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/principal-message"}>Message from Principal</Link></li>
                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/facilities"}>Facilities</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={process.env.PUBLIC_URL + "/gallery"}>GALLERY</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={process.env.PUBLIC_URL + "/about"}>ABOUT US</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/"} data-toggle="dropdown">UPDATES & RESOURCES <i className="las la-angle-down"></i></Link>
                            <ul className="dropdown list-unstyled">
                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/news"}>News & Announcements</Link></li>
                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/events"}>Events</Link></li>
                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/downloads"}>Downloads</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/"} data-toggle="dropdown">LOGIN <i className="las la-angle-down"></i></Link>
                            <ul className="dropdown list-unstyled">
                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/student-login"}>Student Login</Link></li>
                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/parent-login"}>Parent Login</Link></li>
                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/staff-login"}>Staff Login</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={process.env.PUBLIC_URL + "/contact"}>CONTACT</Link>
                        </li>
                    </ul>
                </div>
                <div className="search-cart-bar">
                    <li className="search-box">
                        <Search />
                    </li>
                </div>
                <div className="apply-btn">
                    <Link to={process.env.PUBLIC_URL + "/registration"} className="apply-button"><i className="las la-clipboard-list"></i>APPLY NOW</Link>
                </div>
            </section>
        </Styles>
    )
}

export default StickyMenu