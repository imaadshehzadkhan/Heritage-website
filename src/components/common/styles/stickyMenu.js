import styled from "styled-components";
import { colors } from "../element/elements.js";

export const Styles = styled.div`
    /* Fix for unwanted dot */
    .nav-item::before, 
    .nav-item::after,
    .nav-link::before,
    .nav-link::after {
        display: none !important;
        content: none !important;
    }

    .sticky-menu {
        /* Use flex layout for consistent alignment */
        display: none;
        position: fixed;
        top: -100px;
        left: 0;
        width: 100%;
        z-index: 11;
        animation: none;
        background: #ffffff;
        height: 70px;
        padding: 0 20px; /* added horizontal padding */
        box-shadow: 0 0 20px -10px #222222;
        transition: all 0.5s ease;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        .logo {
            height: 100%;
            overflow: hidden;
            margin-bottom: 12px;
            flex-shrink: 0;
            max-width: 180px; /* smaller logo size */

            a {
                display: block;
                line-height: 1;
                img {
                    max-width: 180px; /* smaller logo size */
                    max-height: 50px;
                    transition: all 0.3s ease;
                    object-fit: contain;
                }
            }
        }

        .menu-box {
            flex: 1;
            margin-left: 60px; /* reduce gap from logo */

            ul.nav.menu-nav {
                display: flex;
                align-items: center;
                margin: 0;
                padding: 0;
                list-style: none;
                flex-wrap: nowrap; /* prevent wrapping to new line */

                li.nav-item {
                    position: relative;
                    margin: 0 5px; /* slightly increase spacing between items */

                    a.nav-link {
                        font-size: 13px; /* increased font size */
                        color: ${colors.black1};
                        text-transform: uppercase;
                        font-weight: 500;
                        padding: 20px 5px; /* slight increase in horizontal padding */
                        white-space: nowrap;

                        &:hover {
                            color: ${colors.green};
                        }

                        i {
                            font-size: 10px; /* smaller icon */
                            margin-left: 2px;
                        }

                        @media(max-width: 1199px) {
                            padding: 20px 4px;
                            font-size: 12px;
                        }
                        @media(max-width: 991px) {
                            font-size: 11px;
                            padding: 20px 3px;
                        }
                    }

                    ul.dropdown {
                        /* unchanged */
                        position: absolute;
                        left: 0;
                        top: 100%;
                        min-width: 190px;
                        background: #fff;
                        border: 1px solid ${colors.border1};
                        text-align: left;
                        padding: 0;
                        border-radius: 5px;
                        transition: 0.2s ease;
                        opacity: 0;
                        transform: scaleY(0);
                        visibility: hidden;
                        z-index: 999;
                        transform-origin: center top 0;

                        li.nav-item {
                            a.nav-link {
                                font-size: 13px;
                                color: ${colors.text1};
                                padding: 10px 20px;
                                text-transform: capitalize;
                                font-weight: 400;
                                border-bottom: 1px solid ${colors.border1};

                                &:hover {
                                    color: ${colors.green};
                                }
                            }

                            &:last-child a.nav-link {
                                border-bottom: none;
                            }

                            ul.dropdown2 {
                                position: absolute;
                                top: 0;
                                left: 100%;
                                min-width: 180px;
                                background: #fff;
                                border: 1px solid ${colors.border1};
                                transition: 0.2s ease;
                                opacity: 0;
                                transform: scaleY(0);
                                visibility: hidden;
                                z-index: 999;
                                transform-origin: center top 0;
                            }

                            &:hover ul.dropdown2 {
                                opacity: 1;
                                transform: scaleY(1);
                                visibility: visible;
                            }
                        }
                    }

                    &:hover ul.dropdown {
                        opacity: 1;
                        transform: scaleY(1);
                        visibility: visible;
                    }
                }
            }
        }

        /* New nav-tools styling */
        .nav-tools {
            display: flex;
            align-items: center;
            margin-left: auto;
        }

        /* Contact info styling (phone and email) */
        .contact-info {
            display: flex;
            align-items: center;
            margin-right: 15px;

            .contact-item {
                display: flex;
                align-items: center;
                margin-right: 15px;

                .icon-wrapper {
                    position: relative;
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-right: 8px;
                    background-color: #EEF1F6;
                    border-radius: 5px;
                    
                    i {
                        font-size: 18px;
                        color: ${colors.green};
                        display: block;
                    }
                }

                .text {
                    p {
                        font-size: 11px;
                        color: ${colors.text3};
                        margin-bottom: -2px;
                    }
                    span {
                        font-size: 12px;
                        color: ${colors.black1};
                        font-weight: 600; /* bolder */
                    }
                }

                @media(max-width: 1199px) {
                    display: none;
                }
            }
        }

        .search-cart-bar {
            display: flex;
            align-items: center;
            margin: 0 10px;

            li.search-box {
                position: relative;
                margin-right: 0;

                .search-button i,
                .nav-search i {
                    font-size: 16px;
                    color: ${colors.black1};
                }

                &:hover i {
                    color: ${colors.green};
                }
            }
        }

        /* Menu toggle icon */
        .menu-toggle {
            margin: 0 15px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;

            i {
                font-size: 18px;
                color: ${colors.black1};
            }

            @media(max-width: 991px) {
                display: none;
            }
        }

        .apply-btn {
            margin-left: 5px;
            margin-top: 0;
            flex-shrink: 0;

            a {
                font-size: 13px;
                color: #ffffff;
                background: ${colors.gr_bg};
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 120px; /* matched to image */
                height: 38px; /* matched to image */
                text-transform: uppercase;
                font-weight: 600;
                border-radius: 4px;
                transition: all 0.3s ease;
                box-shadow: 0px 4px 10px rgba(77, 128, 179, 0.3);
                letter-spacing: 0.5px;
                
                i {
                    font-size: 14px;
                    margin-right: 6px;
                }

                &:hover {
                    background: ${colors.gr_bg2};
                    transform: translateY(-2px);
                    box-shadow: 0px 5px 12px rgba(45, 62, 105, 0.4);
                }
            }
            
            .apply-button {
                width: 120px;
                height: 38px;
            }

            @media(max-width: 991px) {
                display: none;
            }
        }

        @media(max-width: 767px) {
            height: 60px;
            padding: 0 10px;

            .logo a img {
                max-width: 150px;
            }
        }
    }
    
    @keyframes stickySlideDown {
        0% { opacity: 0; top: -100px; }
        100% { opacity: 1; top: 0; }
    }
    
    .sticky-menu.sticky {
        display: flex;
        top: 0;
        animation: stickySlideDown 0.7s ease forwards;
        box-shadow: 0 5px 25px rgba(0,0,0,0.15);
        padding: 0 20px;

        .logo img {
            transform: scale(0.98);
        }

        .nav-link,
        .search-cart-bar li i,
        .apply-btn a {
            animation: fadeIn 0.6s ease;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    }
`;
