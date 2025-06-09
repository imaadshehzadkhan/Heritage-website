import styled from "styled-components";
import { colors } from "../../../components/common/element/elements.js";

export const Styles = styled.div`
    .principal-message-page {
        .principal-message-area {
            padding: 70px 0;
            
            .principal-img {
                position: relative;
                margin-bottom: 30px;
                
                img {
                    border-radius: 5px;
                    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
                }
                
                .principal-position {
                    background: ${colors.green};
                    width: 80%;
                    padding: 15px;
                    text-align: center;
                    position: absolute;
                    bottom: -20px;
                    left: 10%;
                    border-radius: 5px;
                    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
                    
                    h5 {
                        color: #ffffff;
                        font-weight: 600;
                        margin-bottom: 5px;
                    }
                    
                    p {
                        font-size: 14px;
                        color: ${colors.blue};
                        font-weight: 500;
                        margin-bottom: 0;
                    }
                }
                
                @media(max-width: 767px) {
                    margin-bottom: 50px;
                }
            }
            
            .principal-message {
                .section-title {
                    h4 {
                        color: ${colors.black1};
                        font-weight: 600;
                        text-transform: uppercase;
                        margin-bottom: 30px;
                        position: relative;
                        padding-bottom: 15px;
                        
                        &:before {
                            position: absolute;
                            content: "";
                            background: ${colors.green};
                            width: 50px;
                            height: 2px;
                            bottom: 0;
                            left: 0;
                        }
                        
                        span {
                            color: ${colors.green};
                        }
                        
                        @media(max-width: 575px) {
                            font-size: 20px;
                        }
                    }
                }
                
                p {
                    font-size: 16px;
                    color: ${colors.text2};
                    line-height: 30px;
                    margin-bottom: 20px;
                    
                    &.principal-signature {
                        font-family: 'Allura', cursive;
                        font-size: 32px;
                        color: ${colors.black1};
                        margin-top: 40px;
                    }
                }
            }
            
            @media(max-width: 767px) {
                padding: 40px 0;
            }
        }
    }
`; 