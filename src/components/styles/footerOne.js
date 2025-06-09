import styled from "styled-components";

export const Styles = styled.div`
    footer.footer1 {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        position: relative;
        padding: 70px 0 40px;

        &:before {
            position: absolute;
            content: "";
            background: linear-gradient(135deg, #0D3380 0%, #0a2a6d 100%);
            opacity: 0.97;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
        }

        .footer-logo-info {
            position: relative;
            
            img {
                margin-bottom: 25px;
                max-width: 220px;
                filter: brightness(1.1) contrast(1.1);

                @media(max-width: 575px) {
                    margin-bottom: 20px;
                }
            }

            p {
                font-size: 15px;
                color: rgba(255, 255, 255, 1);
                line-height: 28px;
                margin-bottom: 20px;
            }

            ul {
                li {
                    color: #ffffff;
                    margin-bottom: 12px;
                    display: flex;
                    align-items: center;

                    i {
                        font-size: 18px;
                        color: #22e069;
                        width: 35px;
                        height: 35px;
                        background: rgba(255, 255, 255, 0.15);
                        border-radius: 50%;
                        margin-right: 15px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        transition: all 0.3s ease;
                        box-shadow: 0 0 10px rgba(34, 224, 105, 0.3);
                    }

                    &:hover i {
                        background: #22e069;
                        color: #ffffff;
                        transform: scale(1.1);
                        box-shadow: 0 0 15px rgba(34, 224, 105, 0.5);
                    }
                }
            }

            @media(max-width: 767px) {
                margin-bottom: 30px;
            }
        }

        .f-links {
            position: relative;
            
            h5 {
                color: #ffffff;
                text-transform: uppercase;
                margin-top: 8px;
                margin-bottom: 25px;
                font-weight: 600;
                position: relative;
                display: inline-block;
                
                &:after {
                    content: "";
                    position: absolute;
                    bottom: -10px;
                    left: 0;
                    width: 50px;
                    height: 2px;
                    background: #22e069;
                }

                @media(max-width: 575px) {
                    margin-bottom: 15px;
                    font-size: 20px;
                }
            }

            ul {
                width: 100%;

                li {
                    a {
                        font-size: 15px;
                        color: rgba(255, 255, 255, 1);
                        line-height: 38px;
                        transition: all 0.3s ease;
                        display: flex;
                        align-items: center;

                        i {
                            font-size: 12px;
                            color: #22e069;
                            margin-right: 10px;
                            transition: all 0.3s ease;
                        }

                        &:hover {
                            color: #ffffff;
                            transform: translateX(5px);
                            text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
                            
                            i {
                                color: #ffffff;
                                transform: scale(1.2);
                            }
                        }

                        @media(max-width: 991px) {
                            font-size: 14px;
                            letter-spacing: 0;
                        }
                    }
                }
            }

            @media(max-width: 767px) {
                margin-bottom: 20px;
                display: inline-block;
            }
        }

        .upcoming-events {
            position: relative;
            
            h5 {
                color: #ffffff;
                text-transform: uppercase;
                margin-top: 8px;
                margin-bottom: 25px;
                font-weight: 600;
                position: relative;
                display: inline-block;
                
                &:after {
                    content: "";
                    position: absolute;
                    bottom: -10px;
                    left: 0;
                    width: 50px;
                    height: 2px;
                    background: #22e069;
                }

                @media(max-width: 575px) {
                    margin-bottom: 15px;
                    font-size: 20px;
                }
            }

            .event-box {
                margin-bottom: 20px;
                background: transparent;
                border-radius: 10px;
                padding: 15px;
                transition: all 0.3s ease;
                border-left: 2px solid rgba(34, 224, 105, 0.5);

                &:hover {
                    transform: translateY(-5px);
                    border-left: 2px solid #22e069;
                    
                    .event-icon i {
                        background-color: #22e069;
                        box-shadow: 0 0 15px rgba(34, 224, 105, 0.6);
                    }
                }

                .event-icon {
                    margin-right: 15px;
                    i {
                        font-size: 20px;
                        color: #ffffff;
                        background: rgba(34, 224, 105, 0.4);
                        width: 44px;
                        height: 44px;
                        line-height: 44px;
                        text-align: center;
                        border-radius: 50%;
                        transition: all 0.3s ease;
                        box-shadow: 0 0 10px rgba(34, 224, 105, 0.3);
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
                        color: rgba(255, 255, 255, 0.9);
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
        padding: 25px 0;
        background: #0a2460;
        position: relative;
        
        &:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background: linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent);
        }

        .copy-text {
            p {
                color: rgba(255, 255, 255, 0.9);
                padding-top: 3px;
                margin-bottom: 0;
                font-size: 14px;

                .heart {
                    color: #ff4081;
                    margin: 0 2px;
                    animation: heartBeat 1.5s ease infinite;
                    text-shadow: 0 0 5px rgba(255, 64, 129, 0.5);
                }
                
                @keyframes heartBeat {
                    0% { transform: scale(1); }
                    15% { transform: scale(1.25); }
                    30% { transform: scale(1); }
                    45% { transform: scale(1.25); }
                    60% { transform: scale(1); }
                }
            }

            @media(max-width: 767px) {
                text-align: center;
                margin-bottom: 20px;
            }
        }

        ul.social {
            display: flex;
            justify-content: flex-end;
            
            @media(max-width: 767px) {
                justify-content: center;
            }
            
            li {
                margin: 0 5px;
                
                a {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 36px;
                    height: 36px;
                    background: rgba(255,255,255,0.15);
                    border-radius: 50%;
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 0 8px rgba(255, 255, 255, 0.2);
                    
                    i {
                        font-size: 16px;
                        color: #ffffff;
                        position: relative;
                        z-index: 2;
                        transition: all 0.3s ease;
                    }
                    
                    &:before {
                        content: "";
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: linear-gradient(135deg, #22e069, #0D3380);
                        opacity: 0;
                        transform: scale(0);
                        border-radius: 50%;
                        transition: all 0.4s ease;
                    }
                    
                    &:hover {
                        transform: translateY(-5px);
                        box-shadow: 0 0 15px rgba(34, 224, 105, 0.4);
                        
                        &:before {
                            opacity: 1;
                            transform: scale(1);
                        }
                    }
                }
                
                &:nth-child(1) a:before { background: linear-gradient(135deg, #4267B2, #0D3380); }
                &:nth-child(2) a:before { background: linear-gradient(135deg, #1DA1F2, #0D3380); }
                &:nth-child(3) a:before { background: linear-gradient(135deg, #0077B5, #0D3380); }
                &:nth-child(4) a:before { background: linear-gradient(135deg, #FF0000, #0D3380); }
                &:nth-child(5) a:before { background: linear-gradient(135deg, #E1306C, #0D3380); }
            }
        }
    }
`;