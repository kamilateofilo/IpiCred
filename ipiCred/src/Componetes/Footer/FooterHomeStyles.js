import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  background-color: #AC883F; 
  color: #fff; 
  padding: 20px;
  text-align: center;
  position: relative; 
  margin-top: 50px;
`;

export const Column = styled.div`
  flex: 1;
  padding: 10px;
  box-sizing: border-box;
  min-width: 200px;
  line-height: 2;

  .text {
    font-size: 14px;
  }

  .footer {
    width: 159px;
    height: 62px;
  }
`;

export const Logo = styled.div`
  font-family: 'LT Saeada', sans-serif;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 10px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;

  img {
    margin: 0 5px;
    width: 24px;
    height: 24px;
  }
`;

export const Separator = styled.div`
  height: 1px;
  background-color: #fff;
  margin: 10px 0;
  width: 100%;
`;

export const TextContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  position: relative;
  font-size: 10px;
  
  p {
    margin: 0;
  }

  .privacy-policy {
    text-align: right;
    flex: none;
  }

  .rights {
    text-align: left;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    
    .privacy-policy, .rights {
      text-align: center;
      margin-bottom: 10px;
    }
  }
`;
