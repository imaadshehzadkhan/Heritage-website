import styled from "styled-components";
import { colors } from "../../../components/common/element/elements.js";

export const Styles = styled.div`
    .facilities-page {
        .facilities-area {
            padding: 70px 0;
            
            .sec-title {
                h4 {
                    color: ${colors.black1};
                    font-weight: 600;
                    text-transform: uppercase;
                    margin-bottom: 15px;
                    display: inline-block;
                    position: relative;
                    
                    .heading-icon {
                        display: inline-block;
                        width: 40px;
                        height: 40px;
                        line-height: 40px;
                        text-align: center;
                        background: linear-gradient(90deg, ${colors.green} 0%, ${colors.blue} 100%);
                        color: #ffffff;
                        border-radius: 50%;
                        margin-right: 10px;
                        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
                        
                        i {
                            font-size: 20px;
                        }
                    }
                    
                    @media(max-width: 575px) {
                        font-size: 20px;
                    }
                }
                
                .heading-line {
                    width: 80px;
                    height: 3px;
                    background: linear-gradient(90deg, ${colors.green} 0%, ${colors.blue} 100%);
                    margin: 15px auto 0;
                    border-radius: 5px;
                }
                
                p {
                    font-size: 16px;
                    color: ${colors.text3};
                    font-weight: 400;
                    margin-bottom: 40px;
                }
            }
            
            .facility-box {
                margin-bottom: 50px;
                padding-bottom: 50px;
                border-bottom: 1px solid rgba(0, 0, 0, 0.07);
                
                &:last-child {
                    margin-bottom: 0;
                    padding-bottom: 0;
                    border-bottom: none;
                }
                
                .facility-content {
                    h5 {
                        color: ${colors.black2};
                        font-weight: 600;
                        padding-bottom: 15px;
                        margin-bottom: 20px;
                        position: relative;
                        
                        &:before {
                            position: absolute;
                            content: "";
                            background: ${colors.green};
                            width: 50px;
                            height: 2px;
                            bottom: 0;
                            left: 0;
                        }
                        
                        @media(max-width: 575px) {
                            font-size: 17px;
                        }
                    }
                    
                    p {
                        font-size: 15px;
                        color: ${colors.text2};
                        line-height: 30px;
                        margin-bottom: 25px;
                    }
                    
                    ul {
                        margin-bottom: 25px;
                        
                        li {
                            font-size: 14px;
                            color: ${colors.text3};
                            margin-bottom: 15px;
                            line-height: 25px;
                            
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
                
                .facility-image {
                    position: relative;
                    
                    img {
                        border-radius: 5px;
                        box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
                        width: 100%;
                        height: auto;
                        transition: all 0.3s ease;
                        
                        &:hover {
                            transform: scale(1.02);
                            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
                        }
                    }
                }
                
                @media(max-width: 767px) {
                    .facility-content {
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
            
            .narrative-poem-container {
                margin-bottom: 60px;
                border: 3px solid #0D3380;
                border-radius: 8px;
                box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
                overflow: hidden;
                background: #fff;
                max-width: 800px;
                margin-left: auto;
                margin-right: auto;
                
                .poem-header {
                    background: #0D3380;
                    padding: 12px 20px;
                    text-align: center;
                    
                    h5 {
                        color: #ffffff;
                        font-weight: 600;
                        margin: 0;
                        font-size: 22px;
                    }
                }
                
                .poem-content {
                    padding: 25px 35px;
                    position: relative;
                    background: #f9f9f9;
                    
                    .school-song-image {
                        float: right;
                        width: 160px;
                        margin: 0 0 20px 25px;
                        border: 1px solid #ddd;
                        padding: 4px;
                        background: #fff;
                        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                        
                        img {
                            border-radius: 0;
                            width: 100%;
                            height: auto;
                        }
                        
                        @media(max-width: 767px) {
                            width: 120px;
                            margin: 0 0 15px 15px;
                        }
                        
                        @media(max-width: 575px) {
                            width: 100px;
                        }
                    }
                    
                    .poem-text {
                        font-size: 16px;
                        line-height: 1.8;
                        margin-bottom: 25px;
                        font-family: 'Georgia', serif;
                        color: #333;
                        letter-spacing: 0.7px;
                        text-align: center;
                        padding: 0 10px;
                        
                        &:last-of-type {
                            margin-bottom: 15px;
                        }
                    }
                    
                    .school-crest {
                        width: 60px;
                        margin: 20px auto 0;
                        text-align: center;
                        opacity: 0.7;
                        
                        img {
                            width: 100%;
                            height: auto;
                        }
                    }
                }
                
                @media(max-width: 575px) {
                    .poem-content {
                        padding: 20px;
                        
                        .poem-text {
                            font-size: 15px;
                            line-height: 1.6;
                            letter-spacing: 0.5px;
                        }
                    }
                }
            }
            
            .faq-rules-container {
                max-width: 900px;
                margin: 0 auto 60px;
                padding: 10px 20px;
                position: relative;
                z-index: 1;
                
                .rules-title {
                    text-align: center;
                    font-size: 20px;
                    margin-bottom: 25px;
                    
                    h3 {
                        font-size: 25px;
                        font-weight: 700;
                        color: #233d63;
                        margin-bottom: 0;
                        display: inline-block;
                        position: relative;
                        padding-bottom: 10px;
                    }
                    
                    h3:after {
                        content: "";
                        position: absolute;
                        bottom: 0;
                        left: 50%;
                        transform: translateX(-50%);
                        width: 70px;
                        height: 3px;
                        background: #55c57a;
                        border-radius: 10px;
                    }
                }
                
                .rules-intro {
                    margin-bottom: 50px;
                    
                    .quote-container {
                        max-width: 80%;
                        margin: 0 auto;
                        position: relative;
                        padding: 15px 0;
                    }
                    
                    .rules-quote {
                        font-size: 17px;
                        line-height: 1.7;
                        color: ${colors.text2};
                        font-style: italic;
                        margin: 0 auto;
                        padding: 0;
                    }
                    
                    .quote-mark {
                        font-size: 30px;
                        color: ${colors.green};
                        font-family: Georgia, serif;
                        position: absolute;
                        line-height: 1;
                    }
                    
                    .quote-left {
                        left: -15px;
                        top: 0;
                    }
                    
                    .quote-right {
                        right: -15px;
                        bottom: 0;
                    }
                }
                
                .faq-columns {
                    display: flex;
                    justify-content: space-between;
                    gap: 40px;
                    
                    .column-left, .column-right {
                        width: 46%;
                    }
                    
                    .faq-item {
                        display: flex;
                        align-items: flex-start;
                        margin-bottom: 35px;
                        animation: fadeIn 0.5s ease-out forwards;
                        position: relative;
                        opacity: 0;
                    }
                    
                    .faq-item:nth-child(1) { animation-delay: 0.1s; }
                    .faq-item:nth-child(2) { animation-delay: 0.2s; }
                    .faq-item:nth-child(3) { animation-delay: 0.3s; }
                    .faq-item:nth-child(4) { animation-delay: 0.4s; }
                    .faq-item:nth-child(5) { animation-delay: 0.5s; }
                    .faq-item:nth-child(6) { animation-delay: 0.6s; }
                    .faq-item:nth-child(7) { animation-delay: 0.7s; }
                    .faq-item:nth-child(8) { animation-delay: 0.8s; }
                    .faq-item:nth-child(9) { animation-delay: 0.9s; }
                    .faq-item:nth-child(10) { animation-delay: 1s; }
                    
                    .faq-item:after {
                        content: "";
                        position: absolute;
                        bottom: -17px;
                        left: 0;
                        right: 0;
                        height: 1px;
                        background: rgba(35, 61, 99, 0.1);
                    }
                    
                    .faq-item:last-child {
                        margin-bottom: 0;
                    }
                    
                    .faq-item:last-child:after {
                        display: none;
                    }
                    
                    .hex-icon {
                        flex-shrink: 0;
                        width: 60px;
                        height: 60px;
                        margin-right: 20px;
                        background: #55c57a;
                        clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        transition: all 0.3s ease;
                    }
                    
                    .hex-icon i {
                        font-size: 24px;
                        color: #fff;
                        transition: all 0.3s ease;
                    }
                    
                    .faq-content {
                        padding-top: 5px;
                        flex: 1;
                    }
                    
                    .faq-content h5 {
                        font-size: 20px;
                        font-weight: 600;
                        color: #233d63;
                        margin-bottom: 10px;
                        letter-spacing: 0.3px;
                    }
                    
                    .faq-content p {
                        font-size: 16px;
                        line-height: 1.6;
                        color: ${colors.text3};
                        margin-bottom: 0;
                        padding-right: 10px;
                    }
                    
                    .faq-item:hover .hex-icon {
                        transform: rotate(360deg);
                        background: #233d63;
                    }
                }
                
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @media(max-width: 991px) {
                    .faq-columns {
                        flex-direction: column;
                        gap: 0;
                        
                        .column-left, .column-right {
                            width: 100%;
                        }
                    }
                }
                
                @media(max-width: 767px) {
                    padding: 0 15px;
                    
                    .rules-title h3 {
                        font-size: 24px;
                    }
                    
                    .rules-intro .quote-container {
                        max-width: 100%;
                    }
                    
                    .rules-intro .rules-quote {
                        font-size: 16px;
                    }
                    
                    .faq-columns .faq-item {
                        margin-bottom: 25px;
                    }
                    
                    .faq-columns .faq-item:after {
                        bottom: -12px;
                    }
                    
                    .faq-columns .hex-icon {
                        width: 50px;
                        height: 50px;
                        margin-right: 15px;
                    }
                    
                    .faq-columns .hex-icon i {
                        font-size: 20px;
                    }
                    
                    .faq-columns .faq-content h5 {
                        font-size: 18px;
                    }
                    
                    .faq-columns .faq-content p {
                        font-size: 15px;
                        padding-right: 0;
                    }
                }
            }
            
            .hexagon-rules-container {
                padding: 30px 20px;
                margin-bottom: 60px;
                position: relative;
                background: #f8f9fa;
                border-radius: 15px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
                overflow: hidden;
                
                &:before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230d3380' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
                    opacity: 1;
                    z-index: 0;
                }
                
                &:after {
                    content: "";
                    position: absolute;
                    bottom: -50px;
                    right: -50px;
                    width: 200px;
                    height: 200px;
                    background: linear-gradient(135deg, rgba(16, 176, 74, 0.1) 0%, rgba(13, 51, 128, 0.1) 100%);
                    border-radius: 50%;
                    z-index: 0;
                }
                
                .rules-intro {
                    text-align: center;
                    position: relative;
                    margin-bottom: 40px;
                    padding: 0 15%;
                    
                    .hex-icon-wrapper {
                        margin: 0 auto 20px;
                        position: relative;
                        width: 90px;
                        height: 90px;
                        
                        &:before {
                            content: '';
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background: rgba(13, 51, 128, 0.1);
                            transform: rotate(45deg);
                            border-radius: 15px;
                            z-index: 0;
                            animation: pulse 2s infinite;
                        }
                        
                        .hex-icon {
                            position: relative;
                            width: 90px;
                            height: 90px;
                            background: linear-gradient(135deg, ${colors.blue} 0%, #082c70 100%);
                            clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            box-shadow: 0 10px 20px rgba(13, 51, 128, 0.2);
                            
                            i {
                                font-size: 36px;
                                color: #fff;
                                animation: iconFloat 3s ease-in-out infinite;
                            }
                        }
                    }
                    
                    h5 {
                        color: ${colors.black1};
                        font-size: 28px;
                        font-weight: 700;
                        margin-bottom: 15px;
                        letter-spacing: 0.5px;
                        position: relative;
                        display: inline-block;
                        
                        &:after {
                            content: "";
                            position: absolute;
                            bottom: -5px;
                            left: 50%;
                            transform: translateX(-50%);
                            width: 50px;
                            height: 3px;
                            background: linear-gradient(90deg, ${colors.green} 0%, ${colors.blue} 100%);
                            border-radius: 5px;
                        }
                    }
                    
                    .rules-quote {
                        font-size: 16px;
                        line-height: 1.8;
                        color: ${colors.text2};
                        font-style: italic;
                        margin-bottom: 0;
                        position: relative;
                        padding: 0 20px;
                        
                        &:before {
                            content: """;
                            position: absolute;
                            left: 0;
                            top: -10px;
                            font-size: 30px;
                            color: ${colors.blue};
                            font-family: Georgia, serif;
                        }
                        
                        &:after {
                            content: """;
                            position: absolute;
                            right: 0;
                            bottom: -30px;
                            font-size: 30px;
                            color: ${colors.blue};
                            font-family: Georgia, serif;
                        }
                    }
                    
                    @media(max-width: 991px) {
                        padding: 0 5%;
                    }
                }
                
                .rules-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                    gap: 25px;
                    position: relative;
                    z-index: 1;
                    
                    .rule-item {
                        display: flex;
                        align-items: flex-start;
                        background: rgba(255, 255, 255, 0.8);
                        padding: 20px;
                        border-radius: 10px;
                        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
                        transition: all 0.3s ease;
                        position: relative;
                        overflow: hidden;
                        animation: fadeInUp 0.5s ease-out forwards;
                        opacity: 0;
                        
                        @for $i from 1 through 10 {
                            &:nth-child(#{$i}) {
                                animation-delay: #{$i * 0.1}s;
                            }
                        }
                        
                        &:before {
                            content: "";
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 5px;
                            height: 100%;
                            background: linear-gradient(to bottom, ${colors.green}, ${colors.blue});
                            opacity: 0;
                            transition: all 0.3s ease;
                        }
                        
                        &:hover {
                            transform: translateY(-5px);
                            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
                            
                            &:before {
                                opacity: 1;
                            }
                            
                            .hex-bullet {
                                transform: scale(1.1) rotate(30deg);
                                
                                i {
                                    transform: rotate(-30deg);
                                }
                            }
                        }
                        
                        .hex-bullet {
                            flex-shrink: 0;
                            width: 50px;
                            height: 50px;
                            margin-right: 15px;
                            margin-top: 5px;
                            background: linear-gradient(135deg, ${colors.green} 0%, #0a9045 100%);
                            clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            box-shadow: 0 5px 15px rgba(16, 176, 74, 0.2);
                            transition: all 0.4s ease;
                            
                            i {
                                font-size: 22px;
                                color: #fff;
                                transition: all 0.4s ease;
                            }
                        }
                        
                        .rule-content {
                            flex: 1;
                            
                            h6 {
                                font-size: 18px;
                                font-weight: 600;
                                color: ${colors.black2};
                                margin-bottom: 8px;
                                letter-spacing: 0.3px;
                            }
                            
                            p {
                                font-size: 15px;
                                line-height: 1.6;
                                color: ${colors.text3};
                                margin-bottom: 0;
                            }
                        }
                    }
                    
                    @media(max-width: 767px) {
                        grid-template-columns: 1fr;
                        gap: 20px;
                        
                        .rule-item {
                            padding: 15px;
                            
                            .hex-bullet {
                                width: 40px;
                                height: 40px;
                                margin-right: 12px;
                                
                                i {
                                    font-size: 18px;
                                }
                            }
                            
                            .rule-content {
                                h6 {
                                    font-size: 16px;
                                }
                                
                                p {
                                    font-size: 14px;
                                }
                            }
                        }
                    }
                }
                
                @keyframes pulse {
                    0% {
                        transform: rotate(45deg) scale(1);
                    }
                    50% {
                        transform: rotate(45deg) scale(1.1);
                    }
                    100% {
                        transform: rotate(45deg) scale(1);
                    }
                }
                
                @keyframes iconFloat {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-5px);
                    }
                }
                
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @media(max-width: 991px) {
                    padding: 25px 15px;
                }
            }
            
            .testimonial-area {
                .testimonial-box {
                    position: relative;
                    margin-bottom: 30px;
                    padding: 30px;
                    border-radius: 5px;
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
                    background: #fff;
                    transition: all 0.3s ease;
                    
                    &:hover {
                        transform: translateY(-5px);
                        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
                    }
                    
                    &:before {
                        position: absolute;
                        content: "";
                        background: ${colors.blue};
                        width: 5px;
                        height: 70%;
                        left: 0;
                        top: 15%;
                        border-radius: 0 5px 5px 0;
                    }
                    
                    .testimonial-content {
                        position: relative;
                        
                        p {
                            font-size: 14px;
                            color: ${colors.text2};
                            line-height: 28px;
                            margin-bottom: 20px;
                            font-style: italic;
                        }
                        
                        .testimonial-name {
                            h6 {
                                color: ${colors.black2};
                                font-weight: 600;
                                margin-bottom: 5px;
                            }
                            
                            p {
                                font-size: 13px;
                                color: ${colors.text3};
                                font-weight: 500;
                                margin-bottom: 0;
                                font-style: normal;
                            }
                        }
                    }
                }
            }
            
            @media(max-width: 767px) {
                padding: 40px 0;
            }
        }
    }
`; 