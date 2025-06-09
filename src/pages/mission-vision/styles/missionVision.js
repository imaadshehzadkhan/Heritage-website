import styled from "styled-components";
import { colors } from "../../../components/common/element/elements.js";

export const Styles = styled.div`
    .mission-vision-page {
        .mission-vision-area {
            padding: 70px 0;
            
            .intro-box {
                margin-bottom: 20px;
                
                h3 {
                    font-size: 28px;
                    font-weight: 600;
                    color: ${colors.black1};
                    margin-bottom: 20px;
                    position: relative;
                    padding-bottom: 15px;
                    
                    &:before {
                        position: absolute;
                        content: "";
                        background: ${colors.green};
                        width: 70px;
                        height: 2px;
                        bottom: 0;
                        left: 50%;
                        margin-left: -35px;
                    }
                }
                
                p {
                    font-size: 16px;
                    color: ${colors.text1};
                    line-height: 30px;
                    margin: 0 auto;
                    max-width: 800px;
                }
                
                @media(max-width: 575px) {
                    h3 {
                        font-size: 22px;
                    }
                }
            }
            
            .section-title {
                h4 {
                    color: ${colors.black1};
                    font-weight: 600;
                    line-height: 35px;
                    margin-bottom: 35px;
                    position: relative;
                    padding-bottom: 15px;
                    
                    &:before {
                        position: absolute;
                        content: "";
                        background: ${colors.green};
                        width: 70px;
                        height: 2px;
                        bottom: 0;
                        left: 50%;
                        margin-left: -35px;
                    }
                    
                    @media(max-width: 575px) {
                        font-size: 20px;
                    }
                }
            }
            
            .vision-box, .mission-box {
                padding: 30px;
                border-radius: 5px;
                box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
                background: #fff;
                height: 100%;
                
                p {
                    font-size: 16px;
                    color: ${colors.text1};
                    line-height: 30px;
                    margin-bottom: 25px;
                }
                
                .vision-points, .mission-points {
                    margin-top: 30px;
                    
                    ul {
                        li {
                            font-size: 16px;
                            color: ${colors.text2};
                            margin-bottom: 15px;
                            
                            i {
                                font-size: 14px;
                                color: ${colors.green};
                                width: 25px;
                                height: 25px;
                                border-radius: 5px;
                                background: rgba(16, 176, 74, 0.1);
                                text-align: center;
                                line-height: 25px;
                                margin-right: 12px;
                            }
                            
                            &:last-child {
                                margin-bottom: 0;
                            }
                        }
                    }
                }
            }
            
            .vision-box {
                border-top: 5px solid ${colors.blue};
            }
            
            .mission-box {
                border-top: 5px solid ${colors.green};
            }
            
            .mission-image, .vision-image {
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                
                img {
                    border-radius: 5px;
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
                    width: 100%;
                    transition: all 0.3s ease;
                    
                    &:hover {
                        transform: scale(1.02);
                        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
                    }
                }
            }
            
            .quote-box {
                padding: 50px 30px;
                background: linear-gradient(90deg, rgba(13, 51, 128, 0.1) 0%, rgba(16, 176, 74, 0.1) 100%);
                border-radius: 5px;
                margin: 0 auto;
                max-width: 800px;
                position: relative;
                
                i {
                    font-size: 40px;
                    color: rgba(13, 51, 128, 0.2);
                    margin-bottom: 15px;
                }
                
                h5 {
                    font-size: 22px;
                    font-weight: 600;
                    font-style: italic;
                    color: ${colors.black1};
                    line-height: 35px;
                    margin-bottom: 15px;
                }
                
                p {
                    font-size: 16px;
                    color: ${colors.text1};
                    font-weight: 500;
                }
                
                &:before {
                    position: absolute;
                    content: "";
                    border-left: 5px solid ${colors.blue};
                    height: 70%;
                    left: 0;
                    top: 15%;
                }
                
                @media(max-width: 575px) {
                    h5 {
                        font-size: 18px;
                        line-height: 30px;
                    }
                }
            }
            
            .commitment-box {
                margin: 0 auto;
                max-width: 900px;
                
                h4 {
                    font-size: 24px;
                    font-weight: 600;
                    color: ${colors.black1};
                    margin-bottom: 20px;
                    position: relative;
                    padding-bottom: 15px;
                    
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
                }
                
                p {
                    font-size: 16px;
                    color: ${colors.text1};
                    line-height: 30px;
                    margin: 0 auto;
                    max-width: 700px;
                    margin-bottom: 25px;
                }
                
                .image-row {
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    gap: 20px;
                    
                    img {
                        width: 30%;
                        max-width: 250px;
                        border-radius: 5px;
                        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
                        transition: all 0.3s ease;
                        
                        &:hover {
                            transform: translateY(-5px);
                            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
                        }
                        
                        @media(max-width: 767px) {
                            width: 45%;
                        }
                        
                        @media(max-width: 575px) {
                            width: 100%;
                            max-width: 350px;
                        }
                    }
                }
            }
            
            @media(max-width: 767px) {
                padding: 40px 0;
                
                .mission-image, .vision-image {
                    margin-top: 30px;
                    margin-bottom: 30px;
                }
                
                .order-md-1 {
                    order: 1 !important;
                }
                
                .order-md-2 {
                    order: 2 !important;
                }
            }
        }
    }
`; 