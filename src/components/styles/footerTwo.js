import styled from "styled-components";
import { colors } from "../common/element/elements.js";

export const Styles = styled.div`
    footer.footer2 {
        background-size    : cover;
        background-position: center;
        background-repeat  : no-repeat;
        position           : relative;
        padding            : 70px 0 80px;

        &:before {
            position  : absolute;
            content   : "";
            background: linear-gradient(135deg,rgb(5, 19, 49) 0%,rgb(17, 27, 49) 100%);
            opacity   : 0.98;
            width     : 100%;
            height    : 100%;
            top       : 0;
            left      : 0;
        }

        .footer-logo-info {
            img {
                max-width : 100%;
                margin-bottom: 30px;
                filter: brightness(1.2) contrast(1.2);

                @media(max-width: 767px) {
                    margin-bottom: 18px;
                }
            }

            p {
                font-size    : 15px;
                color        : #ffffff;
                line-height  : 28px;
                margin-bottom: 20px;
                text-shadow: 0 0 1px rgba(255, 255, 255, 0.2);
                font-weight: 400;
                letter-spacing: 0.3px;

                @media(max-width: 991px) {
                    line-height: 25px;
                    margin-bottom: 12px;
                }
            }

            ul {
                li {
                    color        : #ffffff;
                    margin-bottom: 15px;
                    font-size    : 15px;
                    font-weight  : 400;
                    letter-spacing: 0.3px;

                    i {
                        font-size     : 20px;
                        color         : #00ff80;
                        width         : 38px;
                        height        : 38px;
                        line-height   : 38px;
                        text-align    : center;
                        background    : rgba(0, 255, 128, 0.15);
                        border-radius : 50%;
                        margin-right  : 15px;
                        vertical-align: middle;
                        display       : inline-block;
                        transition    : all 0.3s ease;
                        box-shadow    : 0 0 10px rgba(0, 255, 128, 0.3);

                        @media(max-width: 991px) {
                            width : 32px;
                            height: 32px;
                            line-height: 32px;
                            margin-right: 10px;
                        }
                    }

                    &:hover i {
                        background: #00ff80;
                        color: #ffffff;
                        transform: scale(1.1);
                        box-shadow: 0 0 15px rgba(0, 255, 128, 0.6);
                    }

                    &:last-child {
                        margin-bottom : 0;
                    }
                }
            }

            @media(max-width: 767px) {
                margin-bottom: 30px;
            }
        }

        .f-links {
            padding-left: 25px;

            h5 {
                color         : #ffffff;
                text-transform: uppercase;
                margin-top    : 8px;
                margin-bottom : 35px;
                position      : relative;
                font-size     : 19px;
                font-weight   : 600;
                letter-spacing: 0.5px;
                
                &:after {
                    content: "";
                    position: absolute;
                    bottom: -10px;
                    left: 0;
                    width: 50px;
                    height: 2px;
                    background: #00ff80;
                }

                @media(max-width: 991px) {
                    font-size: 18px;
                    margin-bottom: 29px;
                }

                @media(max-width: 767px) {
                    margin-bottom: 10px;
                }
            }

            ul {
                li {
                    a {
                        font-size  : 15px;
                        color      : #ffffff;
                        line-height: 39px;
                        transition : all 0.3s ease;
                        display    : flex;
                        align-items: center;
                        font-weight: 400;
                        letter-spacing: 0.3px;

                        i {
                            font-size   : 13px;
                            color       : #00ff80;
                            margin-right: 10px;
                            transition  : all 0.3s ease;

                            @media(max-width: 991px) {
                                margin-right: 5px;
                            }
                        }

                        &:hover {
                            color: #00ff80;
                            transform: translateX(5px);
                            
                            i {
                                transform: scale(1.2);
                            }
                        }
                    }
                }
            }

            @media(max-width: 991px) {
                padding-left : 0;
            }

            @media(max-width: 767px) {
                margin-bottom: 30px;
            }
        }

        .f-post {
            h5 {
                color         : #ffffff;
                text-transform: uppercase;
                margin-top    : 8px;
                margin-bottom : 42px;
                position      : relative;
                
                &:after {
                    content: "";
                    position: absolute;
                    bottom: -10px;
                    left: 0;
                    width: 50px;
                    height: 2px;
                    background: #00ff80;
                }

                @media(max-width: 991px) {
                    font-size: 18px;
                    margin-bottom: 39px;
                }

                @media(max-width: 767px) {
                    margin-bottom: 10px;
                }
            }

            .post-box {
                margin-bottom: 22px;
                transition: all 0.3s ease;

                .po-icon {
                    i {
                        font-size     : 26px;
                        color         : #00ff80;
                        width         : 40px;
                        height        : 40px;
                        line-height   : 40px;
                        text-align    : center;
                        border-radius : 50%;
                        background    : rgba(0, 255, 128, 0.1);
                        margin-right  : 10px;
                        transition    : all 0.3s ease;
                    }
                }

                .po-content {
                    a {
                        font-size    : 14px;
                        color        : #ffffff;
                        display      : inline-block;
                        margin-bottom: 3px;
                        transition   : all 0.3s ease;

                        &:hover {
                            color: #00ff80;
                        }
                    }

                    span {
                        display    : block;
                        color      : rgba(255, 255, 255, 0.7);
                        font-size  : 13px;
                        font-style : italic;
                    }
                }

                &:hover {
                    transform: translateY(-3px);
                    
                    .po-icon i {
                        background: #00ff80;
                        color: #ffffff;
                        box-shadow: 0 0 10px rgba(0, 255, 128, 0.5);
                    }
                }

                &:last-child {
                    margin-bottom: 0;
                }

                @media(max-width: 991px) {
                    margin-bottom: 10px;
                }
            }

            @media(max-width: 767px) {
                margin-bottom: 30px;
            }
        }

        .f-newsletter {
            h5 {
                color         : #ffffff;
                text-transform: uppercase;
                margin-top    : 8px;
                margin-bottom : 38px;
                position      : relative;
                font-size     : 19px;
                font-weight   : 600;
                letter-spacing: 0.5px;
                
                &:after {
                    content: "";
                    position: absolute;
                    bottom: -10px;
                    left: 0;
                    width: 50px;
                    height: 2px;
                    background: #00ff80;
                }

                @media(max-width: 991px) {
                    font-size: 18px;
                    margin-bottom: 37px;
                }

                @media(max-width: 767px) {
                    margin-bottom: 10px;
                }
            }

            p {
                font-size    : 15px;
                color        : #ffffff;
                line-height  : 28px;
                margin-bottom: 22px;
                font-weight  : 400;
                letter-spacing: 0.3px;
            }

            form.form {
                p.form-control {
                    padding      : 0;
                    width        : auto;
                    height       : auto;
                    background   : transparent;
                    border       : none;
                    margin-bottom: 25px;
                    position     : relative;

                    input {
                        width       : 100%;
                        height      : 45px;
                        border      : 1px solid rgba(255, 255, 255, 0.3);
                        background  : transparent;
                        color       : #ffffff;
                        padding-left: 15px;
                        border-radius : 5px;
                        transition  : all 0.3s ease;
                        font-size   : 15px;
                        letter-spacing: 0.3px;

                        &::placeholder {
                            font-style: italic;
                            color     : rgba(255, 255, 255, 0.7);
                        }
                        
                        &:focus {
                            border-color: #00ff80;
                            box-shadow: 0 0 10px rgba(0, 255, 128, 0.3);
                        }
                    }

                    span {
                        font-size  : 13px;
                        color      : #00ff80;
                        font-weight: 300;
                        position   : absolute;
                        bottom     : -22px;
                        left       : 0;
                        visibility : hidden;
                    }
                }

                p.form-control.success {
                    input {
                        border: 2px solid #00ff80;
                    }

                    &::before {
                        position   : absolute;
                        content    : "\f058";
                        font-family: "Line Awesome Free";
                        font-size  : 24px;
                        color      : #00ff80;
                        font-weight: 900;
                        top        : 8px;
                        right      : 10px;
                    }
                }

                p.form-control.error {
                    input {
                        border: 2px solid ${colors.red};
                    }

                    &::before {
                        position   : absolute;
                        content    : "\f06a";
                        font-family: "Line Awesome Free";
                        font-size  : 24px;
                        color      : ${colors.red};
                        font-weight: 900;
                        top        : 8px;
                        right      : 10px;
                    }
                }

                p.form-control.error {
                    span {
                        visibility: visible;
                    }
                }

                button {
                    font-size     : 16px;
                    color         : #ffffff;
                    background    : linear-gradient(to right, #00ff80, #00b3ff);
                    width         : 100%;
                    height        : 45px;
                    font-weight   : 500;
                    border        : none;
                    border-radius : 5px;
                    transition    : all 0.3s ease;
                    letter-spacing: 0.5px;
                    text-transform: uppercase;

                    &:hover {
                        background: linear-gradient(to right, #00b3ff, #00ff80);
                        box-shadow: 0 0 15px rgba(0, 255, 128, 0.4);
                    }
                }
            }
            
            .social-icons-footer {
                ul.social-big {
                    display: flex;
                    justify-content: flex-start;
                    
                    li {
                        margin-right: 15px;
                        
                        a {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            width: 42px;
                            height: 42px;
                            background: rgba(255, 255, 255, 0.1);
                            border-radius: 50%;
                            transition: all 0.3s ease;
                            
                            i {
                                font-size: 18px;
                                color: #ffffff;
                                transition: all 0.3s ease;
                            }
                            
                            &:hover {
                                background: #00ff80;
                                transform: translateY(-5px);
                                box-shadow: 0 5px 15px rgba(0, 255, 128, 0.4);
                                
                                i {
                                    color: #fff;
                                    transform: scale(1.1);
                                }
                            }
                        }
                    }
                }
            }
        }

        .copytext-area {
            border-top : 1px solid rgba(255, 255, 255, 0.1);
            padding-top: 45px;
            margin-top : 40px;

            p {
                font-size    : 15px;
                color        : #ffffff;
                margin-bottom: 25px;
                font-weight  : 400;
                letter-spacing: 0.5px;

                i {
                    color : #ff5e9c;
                    margin: 0 2px;
                    animation: heartBeat 1.5s ease infinite;
                    font-size: 18px;
                }
                
                @keyframes heartBeat {
                    0% { transform: scale(1); }
                    15% { transform: scale(1.3); }
                    30% { transform: scale(1); }
                    45% { transform: scale(1.3); }
                    60% { transform: scale(1); }
                }

                a {
                    color: #00ff80;
                    transition: all 0.3s ease;
                    font-weight: 500;

                    &:hover {
                        text-decoration: underline;
                        color: #00b3ff;
                    }
                }
            }

            ul.social {
                li {
                    margin: 0 8px;
                    
                    a {
                        text-align: center;
                        position  : relative;
                        height    : 18px;
                        display   : inline-block;
                        transition: all 0.3s ease;

                        &:before {
                            content           : "";
                            position          : absolute;
                            border-width      : 9px 18px;
                            border-style      : solid;
                            border-top-color  : transparent;
                            border-right-color: transparent;
                            border-left-color : transparent;
                            top               : -18px;
                            left              : 0;
                            z-index           : 1;
                            transition        : all 0.3s ease;
                        }

                        &:after {
                            content            : "";
                            position           : absolute;
                            border-width       : 9px 18px;
                            border-style       : solid;
                            border-right-color : transparent;
                            border-bottom-color: transparent;
                            border-left-color  : transparent;
                            bottom             : -18px;
                            left               : 0;
                            z-index            : 1;
                            transition         : all 0.3s ease;
                        }

                        i {
                            font-size : 16px;
                            color     : #ffffff;
                            width     : 36px;
                            transition: all 0.3s ease;
                        }

                        &:hover {
                            background-color: #00ff80 !important;
                            transform: translateY(-3px);

                            &:before {
                                border-bottom-color: #00ff80 !important;
                            }

                            &:after {
                                border-top-color: #00ff80 !important;
                            }
                            
                            i {
                                transform: rotate(360deg);
                            }
                        }
                    }

                    &:nth-child(1) {
                        a {
                            background-color: #4267B2;

                            &:before {
                                border-bottom-color: #4267B2;
                            }

                            &:after {
                                border-top-color: #4267B2;
                            }
                        }
                    }

                    &:nth-child(2) {
                        a {
                            background-color: #1DA1F2;

                            &:before {
                                border-bottom-color: #1DA1F2;
                            }

                            &:after {
                                border-top-color: #1DA1F2;
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
                            background-color: #FF0000;

                            &:before {
                                border-bottom-color: #FF0000;
                            }

                            &:after {
                                border-top-color: #FF0000;
                            }
                        }
                    }

                    &:nth-child(5) {
                        a {
                            background-color: #E1306C;

                            &:before {
                                border-bottom-color: #E1306C;
                            }

                            &:after {
                                border-top-color: #E1306C;
                            }
                        }
                    }
                }
            }

            @media(max-width: 767px) {
                padding-top: 30px;
                margin-top: 30px;
            }
        }

        @media(max-width: 767px) {
            padding: 30px 0;
        }
        
        @media(min-width: 768px) {
            .row {
                display: flex;
                
                .col-md-4:first-child {
                    padding-right: 20px;
                }
                
                .col-md-4:nth-child(2) {
                    padding-left: 20px;
                    padding-right: 20px;
                }
                
                .col-md-4:last-child {
                    padding-left: 20px;
                }
            }
        }
    }
`;