import styled from 'styled-components';

export const FloatingButtonContainer = styled.a`
  position: fixed;
  bottom: 50px;
  right: 70px; 
  background-color: #25D366; 
  color: #fff; 
  border-radius: 50px; 
  padding: 10px 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  text-decoration: none; 
  z-index: 1000; 

  @media (max-width: 768px) {
    bottom: 15px;
    right: 15px;
    padding: 8px 12px;
  }
`;

export const WhatsAppLogo = styled.img`
  width: 30px; 
  height: 30px; 
  margin-right: 10px; 
`;

export const ButtonText = styled.span`
  font-size: 14px; 
  font-weight: bold;
  display: inline-block;
`;
