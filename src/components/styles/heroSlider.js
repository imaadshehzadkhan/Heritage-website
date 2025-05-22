import styled from "styled-components";
import { colors } from "../common/element/elements.js";

export const Styles = styled.div`
    .hero-slider-area {
        position: relative;
        
        .swiper-container {
            position: relative;
            z-index: 2;

            .swiper-wrapper {
                .swiper-slide.slider-item {
                    position: relative;

                    &:before {
                        content: "";
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: rgba(0, 0, 0, 0.3);
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
                            transition: all 8000ms cubic-bezier(0.19, 1, 0.22, 1);
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

                            .slider-box {
                                .slider-title {
                                    p {
                                        font-size: 18px;
                                        color: #ffffff;
                                        text-transform: uppercase;
                                        margin-bottom: 12px;
                                        font-weight: 500;
                                        text-shadow: 0 2px 4px rgba(0,0,0,0.5);
                                    }
                                }

                                .slider-desc {
                                    h1 {
                                        font-size: 46px;
                                        color: #ffffff;
                                        max-width: 700px;
                                        margin-bottom: 32px;
                                        font-weight: 600;
                                        text-shadow: 0 3px 6px rgba(0,0,0,0.6);

                                        @media(max-width: 767px) {
                                            font-size: 26px;
                                            font-weight: 500;
                                        }
                                    }
                                }

                                .slider-btn {
                                    a.slider-btn1 {
                                        font-size: 14px;
                                        color: #fff;
                                        background: ${colors.gr_bg};
                                        display: inline-block;
                                        width: 145px;
                                        height: 40px;
                                        text-align: center;
                                        padding: 11px;
                                        border-radius: 5px;
                                        box-shadow: 0px 4px 15px rgba(77, 128, 179, 0.4);
                                        transition: all 0.3s ease;

                                        &:hover {
                                            background: ${colors.gr_bg2};
                                            box-shadow: 0px 8px 15px rgba(45, 62, 105, 0.5);
                                            transform: translateY(-3px);
                                        }
                                    }

                                    a.slider-btn2 {
                                        font-size: 14px;
                                        color: #fff;
                                        display: inline-block;
                                        background: ${colors.bg1};
                                        width: 145px;
                                        height: 40px;
                                        text-align: center;
                                        padding: 11px;
                                        border-radius: 5px;
                                        margin-left: 15px;
                                        box-shadow: 0px 4px 15px rgba(45, 62, 105, 0.4);
                                        transition: all 0.3s ease;

                                        &:hover {
                                            background: ${colors.gr_bg};
                                            border: none;
                                            color: #ffffff;
                                            box-shadow: 0px 8px 15px rgba(77, 128, 179, 0.5);
                                            transform: translateY(-3px);
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
                width: 45px;
                height: 45px;
                font-size: 24px;
                color: ${colors.border1};
                text-align: center;
                padding-top: 5px;
                border-radius: 5px;
                transition: all 0.3s ease;
                margin-top: -35px;
                z-index: 111;
                background: rgba(255,255,255,0.3);
                backdrop-filter: blur(5px);
                box-shadow: 0 5px 15px rgba(0,0,0,0.1);

                &:hover {
                    background: ${colors.gr_bg};
                    color: #ffffff;
                    transform: scale(1.1);
                }
            }

            .swiper-btn.slider-button-next {
                left: inherit;
                right: 40px;
            }
        }
    }
`;