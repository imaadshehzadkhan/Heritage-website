import styled from "styled-components";

export const Styles = styled.div`
  .modal-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    backdrop-filter: blur(5px);
  }

  .modal-close-btn {
    position: absolute;
    top: 15px;
    right: 15px;
    background: transparent;
    border: none;
    color: #000;
    font-size: 28px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 100;
    font-weight: bold;
    
    &:hover {
      transform: scale(1.1);
    }
  }

  .modal-content {
    background: #fff;
    width: 900px;
    max-width: 90%;
    display: flex;
    flex-direction: row;
    position: relative;
    min-height: 300px;
    
    @media (max-width: 768px) {
      flex-direction: column;
      width: 95%;
      min-height: auto;
    }
  }

  /* LEFT SIDE WITH IMAGE */
  .modal-left {
    flex: 1;
    position: relative;
    background-color: #000;
    overflow: hidden;
    
    @media (max-width: 768px) {
      height: 320px;
    }
    
    .modal-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    
    .modal-left-content {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: rgba(0, 0, 0, 0.4);
      color: white;
      text-align: center;
      padding: 25px;
      
      h2 {
        font-size: 23px;
        font-weight: 600;
        margin-bottom: 6px;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
      }
      
      h3 {
        font-size: 38px;
        font-weight: 700;
        margin-bottom: 18px;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
      }
      
      p {
        font-size: 16px;
        line-height: 1.5;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
        max-width: 90%;
      }
    }
  }

  /* RIGHT SIDE WITH TEXT */
  .modal-right {
    flex: 1;
    padding: 45px 35px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    
    @media (max-width: 768px) {
      padding: 30px 25px;
    }
    
    h2 {
      font-size: 26px;
      color: #333;
      font-weight: 700;
      margin-bottom: 25px;
    }
    
    p {
      font-size: 16px;
      line-height: 1.6;
      color: #555;
      margin-bottom: 30px;
      max-width: 90%;
    }
    
    .apply-now-btn {
      background-color: #00a651;
      color: #fff;
      padding: 14px 35px;
      font-size: 16px;
      font-weight: 500;
      text-decoration: none;
      border-radius: 4px;
      transition: all 0.3s ease;
      
      &:hover {
        background-color: #008d44;
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      }
    }
  }
`; 