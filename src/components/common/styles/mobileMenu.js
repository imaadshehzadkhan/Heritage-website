import styled from "styled-components";
import { colors } from "../element/elements.js";

export const Styles = styled.div`
.mobile-menu-area {
    background : ${colors.bg1};
    display: none;
    .mb-topbar {
        border-bottom: 1px solid ${colors.black2};
        .topbar-item {
            p {
                font-size: 13px;
                color: ${colors.text4};
                padding: 8px 0;
                i {
                    font-size: 16px;
                    color: ${colors.green};
                    vertical-align: text-top;
                    margin-right: 5px;
                }
            }
            ul {
                padding: 8px 0;
                li {
                    a {
                        font-size : 13px;
                        color : ${colors.green};
                        font-weight : 500;
                        text-transform : uppercase;
                        &:hover {
                            color : #ffffff;
                        }
                    }
                    &:nth-child(2) {
                        color : ${colors.text3};
                    }
                }
            }
        }
    }

    .mb-logo-area {
        padding : 18px 0;
        .mb-logo-box {
            .hm-button {
                margin-top: 8px;
                margin-right: 35px;
                position: relative;
                &:before {
                    position: absolute;
                    content : "";
                    background : ${colors.text1};
                    width: 1px;
                    height: 25px;
                    top: -4px;
                    right: -16px;
                }
                a#mb-sidebar-btn {
                    i {
                        font-size : 20px;
                        color : ${colors.green};
                    }
                }

                @media(max-width: 480px) {
                    margin-top: 6px;
                    margin-right: 8px;
                    &:before {
                        content : none;
                    }
                }
            }
            .mb-logo {
                a {
                    img {
                        max-width: 150px;
                        @media(max-width: 480px) {
                            max-width : 120px;
                        }
                    }
                }
            }
        }

        .mb-contact {
            display: flex;
            align-items: center;
            p {
                font-size: 13px;
                color: ${colors.text4};
                margin-bottom: 0;
                i {
                    font-size: 16px;
                    color: ${colors.green};
                    margin-right: 5px;
                }
            }
        }
    }

    @media(max-width: 767px) {
        display : block;
    }
}

.mb-sidebar {
    position: fixed;
    width: 320px;
    height: 100%;
    overflow: auto;
    background: #ffffff;
    padding: 15px;
    left: -320px;
    top: 0;
    transition: all 400ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
    z-index: 9999;

    .mb-sidebar-heading {
        background: ${colors.bg1};
        padding: 20px 10px;
        margin: -15px -15px 0;
        h5 {
            color: #ffffff;
            text-transform: uppercase;
            margin-bottom: 0;
        }
    }

    .mb-sidebar-menu {
        margin-top: 15px;

        .mb-menu-item {
            margin-bottom: 6px;

            button.mb-menu-button {
                display: flex;
                background: #3c3d42;
                color: #ffffff;
                font-size: 13px;
                text-transform: uppercase;
                height: 45px;
                width: 100%;
                border: none;
                padding: 0 15px;
                border-radius: 5px;
                align-items: center;
                justify-content: space-between;

                p {
                    font-size: 13px;
                    color: #ffffff;
                    margin-bottom: 0;
                }

                i {
                    font-size: 16px;
                    color: #ffffff;
                }

                &:hover {
                    background: ${colors.gr_bg};
                }
            }

            .mb-menu-content {
                max-height: 0;
                overflow: hidden;
                transition: max-height 0.2s ease-in-out;

                ul {
                    background: transparent;
                    padding-left: 14px;

                    li {
                        padding: 7px 10px;
                        margin: 5px 0;
                        a {
                            font-size: 13px;
                            color: ${colors.text1};
                            display: block;
                            padding: 0;
                            i {
                                font-size: 12px;
                                float: right;
                                border: 1px solid ${colors.border3};
                                border-radius: 50%;
                                padding: 4px;
                            }

                            &:hover {
                                color: ${colors.green};
                                i {
                                    border-color: ${colors.green};
                                }
                            }
                        }

                        ul {
                            max-height: 0;
                            overflow: hidden;
                            transition: max-height 0.2s ease-in-out;
                            li {
                                a {
                                    padding: 0px 10px;
                                    margin: 1px 0;
                                    font-size: 12px;

                                    i {
                                        display: none;
                                    }
                                }
                            }
                        }

                        ul.show {
                            max-height: 1000px;
                        }
                    }
                }
            }
        }

        .mb-menu-content.show {
            max-height: 100%;
        }
    }

    .apply-btn-mobile {
        text-align: center;
        margin-top: 30px;
        a {
            font-size: 14px;
            color: #ffffff;
            background: linear-gradient(135deg, #0D3380 0%, #082c70 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            width: 200px;
            height: 42px;
            text-align: center;
            text-transform: uppercase;
            font-weight: 500;
            padding: 11px 15px 11px 40px;
            border-radius: 4px;
            box-shadow: 0 4px 10px rgba(13, 51, 128, 0.3);
            margin: 0 auto;
            position: relative;
            
            i {
                font-size: 16px;
                margin-right: 4px;
                color: #ffffff;
                position: absolute;
                left: 5px;
                top: 0;
                height: 100%;
                width: 35px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: #082c70;
                border-radius: 4px 0 0 4px;
            }
            
            &:hover {
                background: linear-gradient(135deg, #082c70 0%, #061d4c 100%);
                transform: translateY(-2px);
                box-shadow: 0px 6px 15px rgba(13, 51, 128, 0.5);
            }
        }
    }
}

.mb-sidebar.opened {
    left: 0 !important;
}

.mb-sidebar-overlay {
    position        : fixed;
    left            : 0;
    top             : 0;
    height          : 100%;
    width           : 100%;
    display         : block;
    background-color: rgba(0, 0, 0, 0.8);
    z-index         : 1111;
    visibility      : hidden;
    opacity         : 0;
    transition      : 0.3s ease;
}

.mb-sidebar-overlay.visible {
    visibility: visible;
    opacity   : 1;
}
`;