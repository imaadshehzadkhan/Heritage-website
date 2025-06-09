import styled from "styled-components";
import { colors } from "../common/element/elements.js";

export const Styles = styled.div`
    /* Fix for unwanted dot */
    .nav-item::before, 
    .nav-item::after,
    .nav-link::before,
    .nav-link::after {
        display: none !important;
        content: none !important;
    }

    /* Horizontal Dropdown Styling */
    .horizontal-dropdown {
        position: absolute;
        left: 0;
        top: 100%;
        min-width: 190px;
        background: #fff;
        text-align: left;
        padding: 0;
        border-radius: 0 0 5px 5px;
        transition: 0.2s ease;
        opacity: 0;
        transform: scaleY(0);
        visibility: hidden;
        z-index: 999;
        transform-origin: center top 0;
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);

        .menu-item {
            position: relative;
            border-bottom: 1px solid ${colors.border1};
            
            &:last-child {
                border-bottom: none;
            }
            
            a {
                font-size: 13px;
                color: ${colors.text1};
                padding: 10px 20px;
                display: block;
                text-transform: capitalize;
                font-weight: 400;
                
                &:hover {
                    color: #0D3380;
                }
            }
        }
    }

    .nav-item.dropdown:hover .horizontal-dropdown {
        opacity: 1;
        transform: scaleY(1);
        visibility: visible;
    }

    .top-bar {
        background: ${colors.bg1};
        .bar-left {
            ul {
                li {
                    font-size  : 13px;
                    color      : ${colors.text4};
                    border-left: 1px solid ${colors.border2};
                    padding    : 10px 15px;
                    margin     : 0;
                    display    : inline-block;

                    a {
                        font-size: 13px;
                        color    : ${colors.text4};

                        &:hover {
                            color: #0D3380;
                        }
                    }

                    i {
                        font-size     : 20px;
                        color         : #0D3380;
                        vertical-align: bottom;
                        margin-right  : 5px;
                    }

                    &.address-li {
                        span {
                            display: inline-block;
                            vertical-align: middle;
                            font-weight: 500;
                        }
                    }

                    &:last-child {
                        border-right: 1px solid ${colors.border2};
                    }

                    @media(max-width: 991px) {
                        border : none;
                        padding: 10px 0px;
                        &:last-child {
                            display : none;
                        }
                    }
                }
            }
        }

        .bar-right {
            ul.bar-social {
                border-right: 1px solid ${colors.border2};
                border-left : 1px solid ${colors.border2};
                padding     : 10px 15px;

                li {
                    a {
                        font-size   : 14px;
                        color       : #0D3380;
                        margin-right: 10px;

                        &:hover {
                            color: #ffffff;
                        }
                    }

                    &:last-child {
                        a {
                            margin-right: 0;
                        }
                    }
                }

                @media(max-width: 991px) {
                    display : none;
                }
            }

            ul.bar-lang {
                border-right: 1px solid ${colors.border2};
                padding     : 10px 15px;

                li {
                    .dropdown {
                        a.dropdown-toggle {
                            font-size: 13px;
                            color    : ${colors.text4};

                            img {
                                margin-right: 5px;
                                max-width   : 21px;
                            }

                            i {
                                font-size  : 12px;
                                margin-left: 3px;
                            }

                            &::after {
                                display: none;
                            }

                            &:hover {
                                cursor: pointer;
                                color : #0D3380;
                            }
                        }

                        ul.dropdown-menu {
                            padding: 0;
                            margin : 0;
                            border : none;
                            background: #ffffff;
                            border-radius: 5px;
                            top       : 68% !important;
                            left      : -16px !important;
                            box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);

                            li {
                                display      : block;
                                background: transparent;
                                border-bottom: 1px solid ${colors.border1};
                                padding      : 7px 15px;
                                color        : ${colors.text2};
                                cursor       : pointer;
                                overflow    : hidden;

                                img {
                                    max-width   : 21px;
                                    margin-right: 5px;
                                }

                                &:hover {
                                    color      : ${colors.bg1};
                                    font-weight: 500;
                                }

                                &:last-child {
                                    border-bottom: none;
                                }
                            }
                        }
                    }
                }

                @media(max-width: 991px) {
                    border-right : none;
                    padding: 10px 0px;
                }
            }

            ul.bar-login {
                li {
                    border-right: 1px solid ${colors.border2};
                    padding     : 10px 15px;
                    margin      : 0;
                    display     : inline-block;

                    a {
                        font-size: 13px;
                        color    : ${colors.text4};

                        i {
                            font-size     : 20px;
                            color         : #0D3380;
                            vertical-align: bottom;
                            margin-right  : 5px;
                        }

                        &:hover {
                            color: #0D3380;
                        }
                    }

                    @media(max-width: 991px) {
                        border-right : none;
                        padding-right: 0;
                    }
                }
            }
        }

        @media(max-width: 767px) {
            display : none;
        }
    }

    .logo-area {
        padding: 22px 0;
        .logo {
            a {
                img {
                    @media(max-width: 991px) {
                        max-width : 100%;
                        margin-top: 4px;
                    }
                }
            }
        }

        .logo-contact-box {
            .emcontact-box {
                margin-right: 45px;

                .box-icon {
                    background  : #0D3380 !important;
                    height      : 42px !important;
                    text-align  : center !important;
                    margin-top  : 10px !important;
                    margin-right: 12px !important;
                    position    : relative !important;
                    width       : 42px !important;
                    border-radius: 50% !important;
                    display: flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                    box-shadow: 0 4px 10px rgba(13, 51, 128, 0.3) !important;

                    i {
                        position  : relative !important;
                        z-index   : 111 !important;
                        font-size : 22px !important;
                        color     : #ffffff !important;
                        width     : auto !important;
                        display   : inline-block !important;
                        margin: 0 auto !important;
                    }

                    &:before {
                        display: none !important;
                    }

                    &:after {
                        display: none !important;
                    }

                    @media(max-width: 991px) {
                        display : none;
                    }
                }

                .box-content {
                    p {
                        font-size    : 14px !important;
                        color        : #666666 !important;
                        margin-bottom: 0 !important;
                        font-weight  : 400 !important;
                    }

                    span {
                        font-size  : 17px !important;
                        color      : #333333 !important;
                        font-weight: 600 !important;
                        display    : block !important;
                    }
                }

                @media(max-width: 991px) {
                    margin-right : 20px;
                }
            }

            .apply-btn {
                margin-left: 40px;

                a {
                    font-size     : 13px !important;
                    color         : #ffffff !important;
                    background    :rgb(255, 255, 255) !important;
                    display       : inline-block !important;
                    width         : 90px !important;
                    height        : 35px !important;
                    text-align    : center !important;
                    text-transform: uppercase !important;
                    font-weight   : 500 !important;
                    padding       : 9px !important;
                    border-radius : 0 5px 5px 0 !important;
                    position: relative !important;
                    box-shadow: 0 4px 10px rgba(13, 51, 128, 0.3) !important;

                    i {
                        position : absolute !important;
                        font-size: 16px !important;
                        left     : -32px !important;
                        top      : 0 !important;
                        padding  : 9px !important;
                        width    : 32px !important;
                        height   : 100% !important;
                        border-radius : 5px 0 0 5px !important;
                        background-color: #082c70 !important;
                        color: #ffffff !important;
                    }

                    &:hover {
                        background:rgb(245, 247, 250) !important;
                    }
                }
            }
        }

        @media(max-width: 767px) {
            display : none;
        }
    }

    .main-menu {
        .main-menu-box {
            position: relative;
            z-index : 111;

            .menu-box {
                position  : absolute;
                width     : 100%;
                top       : 20px;
                left      : 0;
                padding   : 0 30px;
                background: ${colors.gr_bg};
                border-radius : 5px;

                ul.nav.menu-nav {
                    li.nav-item {
                        position: relative;

                        a.nav-link {
                            font-size     : 14px;
                            color         : #ffffff;
                            text-transform: uppercase;
                            font-weight   : 500;
                            padding       : 18px 25px 15px 0;

                            i {
                                font-size: 12px;
                            }

                            &:after {
                                content: none;
                            }

                            &:hover {
                                color: ${colors.black1};
                            }

                            @media(max-width: 991px) {
                                padding-right : 10px;
                            }
                        }

                        ul.dropdown {
                            position  : absolute;
                            left      : -10px;
                            top       : 100%;
                            min-width : 190px;
                            background: #fff;
                            text-align: left;
                            padding   : 0;
                            border-radius : 0 0 5px 5px;
                            transition : 0.2s ease;
                            opacity         : 0;
                            transform       : scaleY(0);
                            visibility      : hidden;
                            z-index         : 999;
                            transform-origin: center top 0;

                            li.nav-item {
                                position: relative;

                                a.nav-link {
                                    font-size     : 13px;
                                    color         : ${colors.text1};
                                    padding       : 10px 20px;
                                    text-transform: capitalize;
                                    margin-right  : 0;
                                    font-weight   : 400;
                                    border-bottom : 1px solid ${colors.border1};

                                    &:hover {
                                        color: #0D3380;

                                        i {
                                            color: #fff;
                                        }
                                    }

                                    i {
                                        float     : right;
                                        margin-top: 4px;
                                    }
                                }

                                &:last-child {
                                    margin-left: 0;

                                    a.nav-link {
                                        border-bottom: none;
                                    }
                                }

                                ul.dropdown2 {
                                    position  : absolute;
                                    top       : 0;
                                    left      : 100%;
                                    min-width : 180px;
                                    background: #fff;
                                    border    : 1px solid ${colors.border1};
                                    transition : 0.2s ease;
                                    opacity         : 0;
                                    transform       : scaleY(0);
                                    visibility      : hidden;
                                    z-index         : 999;
                                    transform-origin: center top 0;
                                }

                                &:hover {
                                    ul.dropdown2 {
                                        opacity   : 1;
                                        transform : scaleY(1);
                                        visibility: visible;
                                    }
                                }
                            }
                        }

                        &:hover {
                            ul.dropdown {
                                opacity   : 1;
                                transform : scaleY(1);
                                visibility: visible;
                            }
                        }
                    }
                }

                ul.search-cart-bar {
                    li.search-box {
                        i.close-btn {
                            position : absolute;
                            top      : 25px;
                            right    : -12px;
                            font-size: 26px;
                            color    : #0D3380;
                            cursor   : pointer;
                        }
                    }

                    li.cart-box {
                        a.nav-cart {
                            padding: 18px 0 0 10px;

                            i {
                                font-size: 20px;
                                color    : ${colors.border1};
                                line-height: 17px;
                            }
                        }
                    }
                }

                @media(max-width: 991px) {
                    padding: 0 20px;
                }
            }
        }

        @media(max-width: 767px) {
            display : none;
        }
    }
`;