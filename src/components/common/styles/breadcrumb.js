import styled from "styled-components";
import { colors } from "../element/elements.js";

export const Styles = styled.div`
    .breadcrumb-area {
        background-size    : cover;
        background-position: center center;
        background-repeat  : no-repeat;
        padding            : 50px 0;
        position           : relative;
        overflow           : hidden;
        height             : 250px;

        &:before {
            position  : absolute;
            content   : '';
            background: rgba(8, 25, 59, 0.85);
            opacity   : 0.9;
            width     : 100%;
            height    : 100%;
            top       : 0;
            left      : 0;
        }

        .breadcrumb-box {
            background: rgb(4, 26, 67);
            display   : inline-block;
            padding   : 25px 40px;
            border-radius : 0;
            position  : relative;
            z-index   : 1;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
            min-width : 250px;

            h2.breadcrumb-title {
                color         : #ffffff !important;
                font-weight   : 700;
                font-size     : 32px;
                text-transform: uppercase;
                margin-bottom : 6px;
                letter-spacing: 1px;

                @media(max-width: 767px) {
                    font-size : 24px;
                }
            }

            nav {
                ol.breadcrumb {
                    display         : inline-flex;
                    padding         : 0;
                    margin-bottom   : 0;
                    background-color: transparent;
                    border-radius   : 0;
                    justify-content : center;

                    li.breadcrumb-item {
                        a {
                            color      : #ffffff;
                            font-weight: 400;
                            font-size  : 14px;

                            &:hover {
                                color: ${colors.green};
                            }
                        }
                    }

                    li.breadcrumb-item.active {
                        color      : ${colors.green};
                        font-weight: 400;
                        font-size  : 14px;

                        &::before {
                            color: rgba(255, 255, 255, 0.7);
                        }
                    }
                }
            }
        }

        @media(max-width: 767px) {
            padding: 40px 0;
            height: 200px;
        }
    }
`;