import styled from "styled-components";
import { colors } from "../common/element/elements.js";

export const Styles = styled.div`
    .top-bar2 {
        height       : auto;
        border-bottom: 1px solid ${colors.border1};
        background: #f6f6f6;
        padding: 0;

        .bar-left {
            margin-top: 0;

            ul {
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                
                li {
                    font-size   : 14px;
                    color       : ${colors.text2};
                    margin-right: 20px;
                    display     : inline-flex;
                    align-items: center;
                    padding: 8px 0;

                    i {
                        font-size     : 18px;
                        color         : #0D3380;
                        vertical-align: text-bottom;
                        margin-right  : 5px;
                        flex-shrink: 0;

                        @media(max-width: 1199px) {
                            margin-right : 2px;
                        }
                    }

                    &.address-li {
                        display: flex;
                        align-items: center;
                        max-width: 200px;
                        overflow: hidden;
                        
                        span {
                            display: inline-block;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            overflow: hidden;
                            max-width: 100%;
                        }
                        
                        i {
                            min-width: 18px;
                        }
                    }

                    @media(max-width: 1199px) {
                        margin-right : 8px;
                    }

                    @media(max-width: 991px) {
                        font-size : 13px;
                    }
                }
            }
        }

        .bar-right {
            margin-top: 6px;

            ul.bar-social {
                margin-right: 30px;
                position    : relative;

                &::before {
                    position  : absolute;
                    content   : '';
                    background: ${colors.border1};
                    width     : 1px;
                    height    : 20px;
                    top       : 3px;
                    right     : -15px;
                }

                li {
                    display: inline-block;
                    margin-right: 8px;
                    
                    a {
                        font-size  : 13px;
                        color      : #ffffff;
                        background : #0D3380;
                        display    : inline-block;
                        width      : 25px;
                        height     : 25px;
                        text-align : center;
                        padding-top: 3px;
                        border-radius : 5px;

                        &:hover {
                            background: #082c70;
                            color     : #ffffff;
                        }
                    }

                    &:last-child {
                        a {
                            margin-right: 0;
                        }
                    }
                }

                @media(max-width: 991px) {
                    display: none;
                }
            }

            ul.bar-login {
                li {
                    display: inline-block;
                    margin-right: 10px;
                    
                    a {
                        font-size: 13px;
                        color: ${colors.text2};
                        
                        i {
                            font-size: 16px;
                            color: #0D3380;
                            margin-right: 5px;
                            vertical-align: text-bottom;
                        }
                        
                        &:hover {
                            color: #0D3380;
                        }
                    }
                    
                    &:last-child {
                        margin-right: 0;
                    }
                }
            }
        }
        
        @media(max-width: 767px) {
            display: none;
        }
    }

    .logo-area2 {
        height     : 82px;
        padding-top: 15px;

        .logo {
            a {
                img {
                    max-height: 65px;
                    width: auto;
                    
                    @media(max-width: 991px) {
                        max-width: 100%;
                        max-height: 55px;
                    }
                }
            }
        }

        div.menu-box {
            ul.nav.menu-nav {
                display: flex;
                flex-wrap: nowrap;
                margin-right: 15px;
                
                li.nav-item {
                    position: relative;
                    margin: 0 10px;

                    a.nav-link {
                        font-size     : 13px;
                        color         : ${colors.black1};
                        text-transform: uppercase;
                        font-weight   : 500;
                        padding       : 10px 5px 20px;
                        white-space: nowrap;

                        i {
                            font-size: 10px;
                            margin-left: 2px;
                        }

                        &:after {
                            content: none;
                        }

                        &:hover {
                            color: #0D3380;
                        }

                        @media(max-width: 1199px) {
                            padding: 10px 2px 20px;
                            letter-spacing: 0;
                            font-size: 11px;
                        }
                    }

                    ul.dropdown {
                        position  : absolute;
                        left      : 0;
                        top       : 100%;
                        min-width : 190px;
                        background: #fff;
                        border    : 1px solid ${colors.border1};
                        text-align: left;
                        padding   : 0;
                        border-radius : 5px;
                        transition : 0.2s ease;
                        opacity         : 0;
                        transform       : scaleY(0);
                        visibility      : hidden;
                        z-index         : 999;
                        transform-origin: center top 0;

                        li.nav-item {
                            position: relative;
                            margin: 0;

                            a.nav-link {
                                font-size    : 13px;
                                color        : ${colors.text1};
                                padding      : 10px 20px;
                                text-transform: capitalize;
                                margin-right : 0px;
                                font-weight  : 400;
                                border-bottom: 1px solid ${colors.border1};

                                &:hover {
                                    color: #0D3380;
                                    }

                                &::before {
                                    content: none;
                                }
                            }

                            &:last-child {
                                margin-bottom: 0;

                                a.nav-link {
                                    border-bottom: none;
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

            .search-box {
                margin-right: 10px;

                .search-icon {
                    i {
                        font-size: 18px;
                        color    : ${colors.black1};
                    }
                }
            }

            .apply-btn {
                a {
                    font-size: 13px !important;
                    color: #ffffff !important;
                    background: linear-gradient(135deg, #0D3380 0%, #082c70 100%) !important;
                    display: flex !important;
                    width: 160px !important;
                    height: 40px !important;
                    text-align: center !important;
                    text-transform: uppercase !important;
                    font-weight: 600 !important;
                    padding: 11px 15px 11px 40px !important;
                    border-radius: 4px !important;
                    position: relative !important;
                    align-items: center !important;
                    justify-content: center !important;
                    box-shadow: 0 4px 10px rgba(13, 51, 128, 0.3) !important;
                    
                    i {
                        font-size: 16px !important;
                        color: #ffffff !important;
                        margin-right: 4px !important;
                        position: absolute !important;
                        left: 5px !important;
                        top: 0 !important;
                        height: 100% !important;
                        width: 35px !important;
                        display: flex !important;
                        align-items: center !important;
                        justify-content: center !important;
                        background: #082c70 !important;
                        border-radius: 4px 0 0 4px !important;
                    }

                    &:hover {
                        background: linear-gradient(135deg, #082c70 0%, #061d4c 100%) !important;
                        transform: translateY(-2px) !important;
                        box-shadow: 0px 6px 15px rgba(13, 51, 128, 0.5) !important;
                    }
                }
            }
        }

        @media(max-width: 991px) {
            display: none;
        }
    }
`;