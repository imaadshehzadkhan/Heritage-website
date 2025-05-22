import styled from "styled-components";
import { colors } from "../common/element/elements.js";

export const Styles = styled.div`
    .campus-tour {
        background: ${colors.bg2};
        padding   : 63px 0 60px;

        .sec-title {
            h4 {
                color        : ${colors.black1};
                line-height  : 35px;
                font-weight  : 600;
                max-width    : 550px;
                margin       : auto;
                margin-bottom: 48px;
                position     : relative;
                
                &:after {
                    content: "";
                    position: absolute;
                    bottom: -15px;
                    left: 50%;
                    width: 70px;
                    height: 2px;
                    background: ${colors.green};
                    transform: translateX(-50%);
                }

                @media(max-width: 575px) {
                    margin-bottom: 15px;
                    font-size: 20px;
                }
            }
        }

        .tour-box {
            border-radius : 5px;
            overflow     : hidden;
            position     : relative;
            margin-bottom: 30px;
            height       : 250px;
            box-shadow   : 0 10px 20px rgba(0,0,0,0.1);
            transition   : all 0.4s ease;
            
            &:hover {
                transform: translateY(-5px);
                box-shadow: 0 15px 30px rgba(0,0,0,0.15);
                
                img, .gallery-image {
                    transform: scale(1.1);
                }
                
                .tour-overlay {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            img, .gallery-image {
                border-radius : 5px;
                transition : all 0.5s ease;
                width      : 100%;
                height     : 100%;
                object-fit : cover;
            }
            
            .tour-overlay {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                padding: 15px;
                background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%);
                transition: all 0.4s ease;
                opacity: 0.8;
                transform: translateY(10px);
                
                h5 {
                    color: #fff;
                    margin: 0;
                    font-size: 16px;
                    font-weight: 500;
                    text-shadow: 0 1px 2px rgba(0,0,0,0.6);
                }
            }

            img.__react_modal_image__medium_img {
                border-radius : 0;
                object-fit    : contain;
                width         : auto;
                height        : auto;
                max-height    : 90vh;
            }
        }

        .row > [class*="col-lg-6"] .tour-box {
            height: 280px;
        }

        @media(max-width: 991px) {
            .tour-box {
                height: 220px;
                
                .tour-overlay {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            .row > [class*="col-lg-6"] .tour-box {
                height: 250px;
            }
        }

        @media(max-width: 767px) {
            padding: 30px 0 25px;
            
            .tour-box {
                height: 200px;
            }
        }
    }
`;