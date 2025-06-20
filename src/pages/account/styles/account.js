import styled from "styled-components";
import { colors } from "../../../components/common/element/elements.js";

export const Styles = styled.div`
    .login-page {
        .login-area {
            padding : 70px 0;
            .login-box {
                max-width : 500px;
                margin: auto;
                border: 1px solid ${colors.border1};
                box-shadow: 0 0px 20px rgba(0,0,0,0.08);
                padding: 25px 30px 35px;
                border-radius: 5px;
                .login-title {
                    h3 {
                        color : ${colors.black2};
                        text-transform: uppercase;
                        font-weight: 600;
                        padding-bottom: 10px;
                        margin-bottom: 20px;
                        position: relative;
                        &:before {
                            position: absolute;
                            content: "";
                            background: ${colors.green};
                            width: 50px;
                            height: 2px;
                            bottom: 0;
                            left: 50%;
                            margin-left: -25px;
                        }

                        @media(max-width: 575px) {
                            font-size : 20px;
                        }
                    }
                }

                form.form {
                    p.form-control {
                        padding      : 0;
                        width        : auto;
                        height       : auto;
                        background   : transparent;
                        border       : none;
                        margin-bottom: 28px;
                        position     : relative;

                        label {
                            font-size : 15px;
                            color : ${colors.text1};
                            font-weight : 500;

                            @media(max-width: 575px) {
                                font-size : 14px;
                            }
                        }

                        input {
                            width           : 100%;
                            height          : 48px;
                            background-color: #ffffff;
                            font-size       : 14px;
                            padding         : 15px 20px;
                            color           : ${colors.black1};
                            border          : 1px solid ${colors.border3};
                            border-radius : 5px;

                            &::placeholder {
                                font-size : 14px;
                                font-style: italic;
                                color     : ${colors.text3};

                                @media(max-width: 575px) {
                                    font-size : 13px;
                                }
                            }

                            &:focus {
                                border-color : ${colors.green};
                            }

                            @media(max-width: 575px) {
                                height : 40px;
                            }
                        }

                        span {
                            color      : ${colors.red};
                            font-weight: 300;
                            position   : absolute;
                            bottom     : -20px;
                            left       : 0;
                            visibility : hidden;
                        }
                    }

                    p.form-control.success {
                        input {
                            border: 2px solid ${colors.green};
                        }

                        &::before {
                            position   : absolute;
                            content    : "\f058";
                            font-family: "Line Awesome Free";
                            font-size  : 24px;
                            color      : ${colors.green};
                            font-weight: 900;
                            top        : 34px;
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
                            top        : 34px;
                            right      : 10px;
                        }
                    }

                    p.form-control.error {
                        span {
                            visibility: visible;
                        }
                    }

                    button {
                        font-size  : 16px;
                        color      : #fff;
                        background : ${colors.gr_bg};
                        width      : 100%;
                        height     : 48px;
                        font-weight: 500;
                        border     : none;
                        border-radius : 5px;
                        text-transform: uppercase;
                        margin-bottom : 20px;

                        &:hover {
                            background: ${colors.gr_bg2};

                            i {
                                color: #ffffff;
                            }
                        }

                        @media(max-width: 575px) {
                            font-size : 15px;
                            height     : 40px;
                        }
                    }

                    .save-forget-password {
                        margin-bottom: 15px;
                        .save-passowrd {
                            label {
                                font-size: 14px;
                                color: ${colors.text3};
                                display: block;
                                font-weight : 500;
                                margin-bottom : 0;
                                cursor: pointer;

                                input[type=checkbox] {
                                    border : 2px solid ${colors.border3};
                                    appearance: none;
                                    width: 18px;
                                    height: 18px;
                                    cursor: pointer;
                                    margin-right: 6px;
                                    position: relative;
                                    top: 4px;

                                    &:focus {
                                        outline: none;
                                    }

                                    &:checked {
                                        background-color: ${colors.green};
                                        background: ${colors.green} url("data:image/gif;base64,R0lGODlhCwAKAIABAP////3cnSH5BAEKAAEALAAAAAALAAoAAAIUjH+AC73WHIsw0UCjglraO20PNhYAOw==") 2px 2px no-repeat;
                                        border-color : ${colors.green};
                                    }
                                }
                            }
                        }
                        .forget-password {
                            margin-top: 3px;
                            a {
                                font-size : 14px;
                                color : ${colors.green};
                                font-weight : 500;
                                &:hover {
                                    text-decoration : underline;
                                }
                            }
                        }
                    }

                    .not_account-btn {
                        border-bottom: 1px solid ${colors.border1};
                        margin-bottom: 20px;
                        padding-bottom: 20px;
                        p {
                            font-size : 14px;
                            color     : ${colors.text3};
                            a {
                                font-size : 14px;
                                color : ${colors.green};
                                font-weight : 500;
                                &:hover {
                                    text-decoration : underline;
                                }
                            }
                        }
                    }

                    .social-login {
                        p {
                            font-size : 14px;
                            color     : ${colors.text3};
                            margin-bottom : 15px;
                        }
                        ul {
                            li {
                                a {
                                    font-size: 14px;
                                    color: #ffffff;
                                    display: inline-block;
                                    width: 110px;
                                    height: 40px;
                                    border-radius: 30px;
                                    padding-top: 10px;
                                    i {
                                        margin-right : 3px;
                                    }
                                    &:hover {
                                        background: ${colors.green} !important;
                                    }

                                }
                                &:nth-child(1) {
                                    a {
                                        background: #DB4437;
                                    }
                                }
                                &:nth-child(2) {
                                    a {
                                        background: #4267B2;
                                    }
                                }
                                &:nth-child(3) {
                                    a {
                                        background: #1DA1F2;
                                    }
                                }
                            }
                        }
                    }
                }
            }

            @media(max-width: 767px) {
                padding: 30px 0;
            }
        }
    }

    .registration-page {
        .registration-area {
            padding: 70px 0;
            .registration-box {
                max-width: 1100px;
                margin: auto;
                border: 1px solid ${colors.border1};
                box-shadow: 0 0px 20px rgba(0,0,0,0.08);
                padding: 25px 35px 40px;
                border-radius: 5px;
                
                .registration-title {
                    h3 {
                        color: #C00000;
                        text-transform: uppercase;
                        font-weight: 600;
                        padding-bottom: 10px;
                        margin-bottom: 20px;
                        position: relative;
                        font-size: 24px;
                        text-align: center;
                        
                        &:before {
                            position: absolute;
                            content: "";
                            background: ${colors.green};
                            width: 50px;
                            height: 2px;
                            bottom: 0;
                            left: 50%;
                            margin-left: -25px;
                        }

                        @media(max-width: 575px) {
                            font-size: 20px;
                        }
                    }
                }

                form.form {
                    border: 2px solid #384032;
                    border-radius: 8px;
                    padding: 25px;
                    margin-top: 15px;
                    
                    .form-group {
                        margin-bottom: 20px;
                        
                        label {
                            font-size: 15px;
                            color: ${colors.text1};
                            font-weight: 500;
                            margin-bottom: 8px;
                            display: block;
                            
                            .required {
                                color: #C00000;
                                margin-left: 2px;
                            }
                            
                            @media(max-width: 575px) {
                                font-size: 14px;
                            }
                        }
                        
                        input, select, textarea {
                            width: 100%;
                            height: 45px;
                            background-color: #ffffff;
                            font-size: 14px;
                            padding: 10px 15px;
                            color: ${colors.black1};
                            border: 1px solid #ced4da;
                            border-radius: 5px;
                            
                            &::placeholder {
                                font-size: 14px;
                                color: #6c757d;
                                
                                @media(max-width: 575px) {
                                    font-size: 13px;
                                }
                            }
                            
                            &:focus {
                                border-color: ${colors.green};
                                box-shadow: 0 0 0 0.2rem rgba(13, 51, 128, 0.25);
                                outline: 0;
                            }
                            
                            @media(max-width: 575px) {
                                height: 40px;
                            }
                        }
                        
                        textarea {
                            height: 100px;
                        }
                        
                        .invalid-feedback {
                            display: block;
                            width: 100%;
                            margin-top: 0.25rem;
                            font-size: 80%;
                            color: #dc3545;
                        }

                        .radio-group {
                            padding: 5px 0;
                            
                            .form-check-inline {
                                margin-right: 15px;
                                
                                .form-check-input {
                                    margin-right: 5px;
                                }
                            }
                        }
                    }
                    
                    .section-title {
                        margin: 35px 0 20px;
                        
                        h4 {
                            color: #000;
                            font-weight: 600;
                            font-size: 20px;
                            margin-bottom: 5px;
                            text-transform: uppercase;
                        }
                        
                        .section-divider {
                            height: 1px;
                            background: #000;
                            width: 100%;
                            margin-top: 5px;
                        }
                    }
                    
                    .upload-box {
                        border: 1px dashed #ccc;
                        padding: 15px;
                        border-radius: 5px;
                        background: #f9f9f9;
                        
                        .upload-label {
                            display: block;
                            margin-bottom: 10px;
                        }
                    }
                    
                    .register-btn {
                        font-size: 16px;
                        color: #fff;
                        background: #C00000;
                        padding: 12px 30px;
                        font-weight: 600;
                        border: none;
                        border-radius: 5px;
                        text-transform: uppercase;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        width: auto;
                        min-width: 180px;
                        
                        &:hover {
                            background: #990000;
                        }
                        
                        @media(max-width: 575px) {
                            font-size: 15px;
                            padding: 10px 20px;
                        }
                    }
                    
                    .form-note {
                        p {
                            font-size: 14px;
                            color: #555;
                            font-style: italic;
                        }
                    }
                }
            }

            @media(max-width: 767px) {
                padding: 30px 0;
            }
        }
    }
`;