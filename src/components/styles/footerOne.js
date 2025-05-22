import styled from "styled-components";

export const Styles = styled.div`
    footer.footer1 {
        background-size    : cover;
        background-position: center;
        background-repeat  : no-repeat;
        position           : relative;
        padding            : 95px 0 55px;

        &:before {
            position  : absolute;
            content   : "";
            background: #2c3e50;
            opacity   : 0.97;
            width     : 100%;
            height    : 100%;
            top       : 0;
            left      : 0;
        }

        .footer-logo-info {
            img {
                margin-bottom: 30px;
                max-width: 260px;
                filter: brightness(1.2) contrast(1.1);

                @media(max-width: 575px) {
                    margin-bottom : 20px;
                }
            }

            p {
                font-size    : 15px;
                color        : #ffffff;
                line-height  : 28px;
                margin-bottom: 20px;
            }

            ul {
                li {
                    color        : #ffffff;
                    margin-bottom: 12px;

                    i {
                        font-size     : 18px;
                        color         : #3498db;
                        width         : 35px;
                        vertical-align: top;
                    }
                }
            }

            @media(max-width: 767px) {
                margin-bottom : 30px;
            }
        }

        .f-links {
            h5 {
                color         : #ffffff;
                text-transform: uppercase;
                margin-top    : 8px;
                margin-bottom : 35px;
                font-weight   : 600;

                @media(max-width: 575px) {
                    margin-bottom: 15px;
                    font-size: 20px;
                }
            }

            ul {
                width: 100%;

                li {
                    a {
                        font-size  : 15px;
                        color      : #ffffff;
                        line-height: 38px;

                        i {
                            font-size   : 12px;
                            color       : #3498db;
                            margin-right: 10px;
                        }

                        &:hover {
                            color: #3498db;
                        }

                        @media(max-width: 991px) {
                            font-size: 14px;
                            letter-spacing: 0;
                        }
                    }
                }
            }

            @media(max-width: 767px) {
                margin-bottom : 20px;
                display: inline-block;
            }
        }

        .upcoming-events {
            h5 {
                color         : #ffffff;
                text-transform: uppercase;
                margin-top    : 8px;
                margin-bottom : 35px;
                font-weight   : 600;

                @media(max-width: 575px) {
                    margin-bottom: 15px;
                    font-size: 20px;
                }
            }

            .event-box {
                margin-bottom: 20px;

                .event-icon {
                    margin-right: 15px;
                    i {
                        font-size: 24px;
                        color: #ffffff;
                        background-color: #3498db;
                        width: 44px;
                        height: 44px;
                        line-height: 44px;
                        text-align: center;
                        border-radius: 50%;
                    }
                }

                .event-content {
                    h6 {
                        font-size: 15px;
                        color: #ffffff;
                        line-height: 1.4;
                        margin-bottom: 5px;
                    }

                    p {
                        font-size: 14px;
                        color: #e0e0e0;
                        margin-bottom: 0;
                    }
                }
            }
        }

        @media(max-width: 767px) {
            padding: 60px 0 20px;
        }
    }

    .copyright-area {
        padding   : 35px 0 38px;
        background: #1e2b38;

        .copy-text {
            p {
                color      : #ffffff;
                padding-top: 3px;
                margin-bottom: 0;

                .heart {
                    color: #e91e63;
                    margin: 0 2px;
                }
            }

            @media(max-width: 767px) {
                text-align : center;
                margin-bottom: 20px;
            }
        }

        ul.social {
            li {
                a {
                    text-align: center;
                    position  : relative;

                    &:before {
                        content           : "";
                        position          : absolute;
                        border-width      : 8px 14px;
                        border-style      : solid;
                        border-top-color  : transparent;
                        border-right-color: transparent;
                        border-left-color : transparent;
                        top               : -16px;
                        left              : 0;
                        z-index           : 1;
                        transition : all 0.2s ease;
                    }

                    &:after {
                        content            : "";
                        position           : absolute;
                        border-width       : 8px 14px;
                        border-style       : solid;
                        border-right-color : transparent;
                        border-bottom-color: transparent;
                        border-left-color  : transparent;
                        bottom             : -16px;
                        left               : 0;
                        z-index            : 1;
                        transition : all 0.2s ease;
                    }

                    i {
                        font-size: 14px;
                        color    : #ffffff;
                        width    : 28px;
                    }

                    &:hover {
                        background-color: #3498db !important;

                        &:before {
                            border-bottom-color: #3498db !important;
                        }

                        &:after {
                            border-top-color: #3498db !important;
                        }
                    }
                }

                &:nth-child(1) {
                    a {
                        background-color: #3b5998;

                        &:before {
                            border-bottom-color: #3b5998;
                        }

                        &:after {
                            border-top-color: #3b5998;
                        }
                    }
                }

                &:nth-child(2) {
                    a {
                        background-color: #1da1f2;

                        &:before {
                            border-bottom-color: #1da1f2;
                        }

                        &:after {
                            border-top-color: #1da1f2;
                        }
                    }
                }

                &:nth-child(3) {
                    a {
                        background-color: #2867B2;

                        &:before {
                            border-bottom-color: #2867B2;
                        }

                        &:after {
                            border-top-color: #2867B2;
                        }
                    }
                }

                &:nth-child(4) {
                    a {
                        background-color: #c32aa3;

                        &:before {
                            border-bottom-color: #c32aa3;
                        }

                        &:after {
                            border-top-color: #c32aa3;
                        }
                    }
                }
            }

            @media(max-width: 767px) {
                text-align : center;
            }
        }
    }
`;