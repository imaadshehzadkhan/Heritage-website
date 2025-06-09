import styled from "styled-components";
import { colors } from "../common/element/elements.js";

export const Styles = styled.div`
    .hero-slider-area {
        position: relative;
        height: 100vh;
        overflow: hidden;
        
        .video-container {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            overflow: hidden;
            
            .hero-video {
                min-width: 100%;
                min-height: 100%;
                width: 100%;
                height: 100%;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                object-fit: cover;
            }
            
            .video-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(13, 51, 128, 0.5));
                z-index: 2;
            }
        }
        
        .swiper-container {
            position: relative;
            z-index: 2;

            .swiper-wrapper {
                .swiper-slide.slider-item {
                    position: relative;
                    overflow: hidden;

                    &:before {
                        content: "";
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4));
                        z-index: 9;
                    }

                    .image-container {
                        width: 100%;
                        display: block;
                        overflow: hidden;
                        position: relative;
                        height: 700px;

                        &:after {
                            content: "";
                            position: absolute;
                            top: 0;
                            left: -100%;
                            width: 50%;
                            height: 100%;
                            background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 100%);
                            transform: skewX(-25deg);
                            z-index: 10;
                            transition: all 1s ease;
                        }

                        img.slider-image {
                            width: 100%;
                            height: 100%;
                            margin-top: 0;
                            transition: all 9000ms cubic-bezier(0.19, 1, 0.22, 1);
                            transform: scale(1);
                            object-fit: cover;
                        }

                        @media(max-width: 767px) {
                            height: 450px;
                        }

                        @media(max-width: 575px) {
                            height: 360px;
                        }
                    }

                    .slider-table {
                        display: table;
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        top: 0;
                        left: 0;
                        z-index: 999;

                        .slider-tablecell {
                            display: table-cell;
                            vertical-align: middle;
                            text-align: center;

                            .slider-box {
                                .slider-title {
                                    p {
                                        font-size: 20px;
                                        color: #ffffff;
                                        text-transform: uppercase;
                                        margin-bottom: 12px;
                                        font-weight: 500;
                                        text-shadow: 0 2px 4px rgba(0,0,0,0.6);
                                    }
                                }

                                .slider-desc {
                                    h1 {
                                        font-size: 50px;
                                        color: #ffffff;
                                        max-width: 700px;
                                        margin-bottom: 40px;
                                        font-weight: 600;
                                        text-shadow: 0 3px 6px rgba(0,0,0,0.7);
                                        line-height: 1.2;

                                        @media(max-width: 767px) {
                                            font-size: 30px;
                                            font-weight: 500;
                                            margin-bottom: 25px;
                                        }
                                    }
                                }

                                .slider-btn {
                                    position: relative;
                                    margin-top: 50px;
                                    
                                    a.slider-btn1 {
                                        font-size: 16px;
                                        color: #fff;
                                        background: ${colors.gr_bg};
                                        display: inline-block;
                                        width: 180px;
                                        height: 50px;
                                        text-align: center;
                                        padding: 14px;
                                        border-radius: 5px;
                                        box-shadow: 0px 8px 15px rgba(77, 128, 179, 0.5);
                                        transition: all 0.3s ease;
                                        font-weight: 500;

                                        &:hover {
                                            background: ${colors.gr_bg2};
                                            box-shadow: 0px 12px 20px rgba(45, 62, 105, 0.6);
                                            transform: translateY(-3px);
                                        }
                                    }

                                    a.slider-btn2 {
                                        font-size: 16px;
                                        color: #fff;
                                        display: inline-block;
                                        background: ${colors.bg1};
                                        width: 180px;
                                        height: 50px;
                                        text-align: center;
                                        padding: 14px;
                                        border-radius: 5px;
                                        margin-left: 20px;
                                        box-shadow: 0px 8px 15px rgba(45, 62, 105, 0.5);
                                        transition: all 0.3s ease;
                                        font-weight: 500;

                                        &:hover {
                                            background: ${colors.gr_bg};
                                            border: none;
                                            color: #ffffff;
                                            box-shadow: 0px 12px 20px rgba(77, 128, 179, 0.6);
                                            transform: translateY(-3px);
                                        }
                                    }

                                    @media(max-width: 575px) {
                                        a.slider-btn1, a.slider-btn2 {
                                            width: 140px;
                                            height: 45px;
                                            padding: 13px;
                                            font-size: 14px;
                                            margin: 0 5px;
                                        }
                                    }
                                }
                                
                                @media(max-width: 575px) {
                                    text-align: center !important;
                                }
                            }

                            .slider-box2 {
                                .slider-desc {
                                    h1 {
                                        margin-left: auto;
                                    }
                                }
                            }
                        }
                    }
                }

                .swiper-slide.slider-item.swiper-slide-visible.swiper-slide-active {
                    .image-container {
                        img.slider-image {
                            transform: scale(1.15);
                        }
                        
                        &:after {
                            left: 100%;
                            transition-delay: 0.5s;
                        }
                    }

                    .slider-table {
                        .slider-tablecell {
                            .slider-title {
                                animation-name: fadeInDown;
                                animation-duration: 1s;
                                animation-delay: 0.2s;
                                animation-fill-mode: both;
                            }

                            .slider-desc {
                                animation-name: fadeInUp;
                                animation-duration: 1.5s;
                                animation-delay: 0.2s;
                                animation-fill-mode: both;
                            }

                            .slider-btn {
                                animation-name: fadeInUp;
                                animation-duration: 2s;
                                animation-delay: 0.2s;
                                animation-fill-mode: both;
                            }
                        }
                    }
                }
            }

            .swiper-btn {
                position: absolute;
                top: 50%;
                left: 40px;
                width: 50px;
                height: 50px;
                font-size: 26px;
                color: ${colors.border1};
                text-align: center;
                padding-top: 5px;
                border-radius: 50%;
                transition: all 0.3s ease;
                margin-top: -35px;
                z-index: 111;
                background: rgba(255,255,255,0.4);
                backdrop-filter: blur(10px);
                box-shadow: 0 8px 20px rgba(0,0,0,0.15);

                &:hover {
                    background: ${colors.gr_bg};
                    color: #ffffff;
                    transform: scale(1.1);
                }

                @media(max-width: 767px) {
                    width: 40px;
                    height: 40px;
                    font-size: 22px;
                    left: 20px;
                }
            }

            .swiper-btn.slider-button-next {
                left: inherit;
                right: 40px;

                @media(max-width: 767px) {
                    right: 20px;
                }
            }
            
            .swiper-pagination {
                position: absolute;
                bottom: 30px;
                left: 0;
                width: 100%;
                text-align: center;
                z-index: 100;
                
                .swiper-pagination-bullet {
                    width: 12px;
                    height: 12px;
                    display: inline-block;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.5);
                    opacity: 1;
                    margin: 0 5px;
                    transition: all 0.3s ease;
                    
                    &:hover {
                        background: #fff;
                    }
                }
                
                .swiper-pagination-bullet-active {
                    background: ${colors.gr_bg};
                    width: 30px;
                    height: 12px;
                    border-radius: 10px;
                }
            }
        }
        
        .slider-bottom-image-content {
            position: absolute;
            left: 0;
            bottom: -5px;
            width: 100%;
            z-index: 10;
            
            .slider-bottom-shape {
                position: relative;
                height: 30px;
                background: #fff;
                border-top-left-radius: 50% 100%;
                border-top-right-radius: 50% 100%;
                transform: scaleX(1.3);
                z-index: 1;
                margin-top: -30px;
            }
        }
        
        @media(max-width: 767px) {
            height: 90vh;
        }
        
        @media(max-width: 575px) {
            height: 80vh;
        }
    }
`;