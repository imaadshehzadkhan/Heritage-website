import styled from "styled-components";
import { colors } from "../common/element/elements.js";

export const Styles = styled.div`
    .icon-box-area {
        padding: 0 0 80px;
        margin-top: -20px;  /* Reduced from -60px to move boxes down */
        position: relative;
        z-index: 99;

        .full-icon-box {
            position: relative;
            margin-bottom: 20px;

            .icon-box {
                position: relative;  /* Changed from absolute */
                background: #fff;
                padding: 30px 25px;  /* Adjusted padding */
                z-index: 9;
                box-shadow: 0 12px 25px rgba(0, 0, 0, 0.07);
                border-radius: 8px;  /* Slightly more rounded corners */
                height: 100%;  /* Ensure equal height */
                transition: all 0.3s ease;
                display: flex;
                flex-direction: column;

                &:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
                }

                .box-icon {
                    background: ${colors.bg1};
                    height: 80px;  /* Increased height */
                    width: 80px;   /* Increased width */
                    flex-shrink: 0;
                    text-align: center;
                    margin-right: 25px;
                    margin-bottom: 10px;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;  /* Make icons circular */
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

                    i {
                        font-size: 40px;  /* Increased font size */
                        color: #ffffff;
                        display: inline-block;
                        line-height: 1;
                        
                        @media(max-width: 991px) {
                            font-size: 32px;  /* Increased font size for tablets */
                        }
                    }

                    /* Remove before/after pseudo elements that create the triangle shapes */
                    &::before, &::after {
                        display: none;
                    }

                    @media(max-width: 991px) {
                        height: 65px;  /* Increased height for tablets */
                        width: 65px;   /* Increased width for tablets */
                        margin-right: 15px;
                    }
                }

                .box-icon.box1 {
                    background: ${colors.red};
                }

                .box-icon.box2 {
                    background: ${colors.purple};
                }

                .box-icon.box3 {
                    background: ${colors.blue};
                }

                .box-title {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;

                    h6 {
                        color: ${colors.black1};
                        text-transform: uppercase;
                        font-weight: 600;
                        margin-bottom: 10px;  /* Increased spacing */
                        font-size: 18px;  /* Slightly larger title */

                        @media(max-width: 991px) {
                            font-size: 16px;
                            letter-spacing: 0;
                        }

                        @media(max-width: 767px) {
                            font-size: 17px;
                            letter-spacing: 0.3px;
                        }
                    }

                    p {
                        font-size: 15px;  /* Increased text size */
                        line-height: 1.5;  /* Better line height */
                        color: ${colors.text3};
                        margin-bottom: 0;

                        @media(max-width: 991px) {
                            font-size: 14px;
                        }

                        @media(max-width: 767px) {
                            font-size: 14px;
                        }
                    }
                }

                @media(max-width: 991px) {
                    padding: 25px 20px;  /* Increased padding for tablets */
                }

                @media(max-width: 767px) {
                    padding: 25px 20px;
                    margin-bottom: 25px;
                }
            }
        }

        @media(max-width: 767px) {
            padding: 70px 0 30px;  /* Adjust padding for mobile */
            margin-top: 20px;  /* Positive margin for mobile to move down */
        }
    }
`;