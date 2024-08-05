import styled from 'styled-components';

export const BannerWrapper = styled.div`
  margin-top: 20px; /* Espaço entre o header e o banner */
  display: flex;
  justify-content: center;
  background-color: #fff;
  margin-top: 120px;
`;

export const BannerContainer = styled.div`
  background-color: #DFCDA9;
  border-radius: 10px;
  padding: 20px;
  width: 95%;
  height: 300px;
  max-width: 1500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

export const TextSection = styled.div`
  .display-4 {
    font-weight: 700;
    color: #383838;
  }

  .lead {
    font-size: 16px;
    font-weight: 400;
    color: #383838;
  }
`;

export const ImageSection = styled.div`
  @media (max-width: 768px) {
    height: 100px;
    margin-bottom: 130px;
    
  }
`;

export const Btn = styled.button`
  background-color: #AC883F;
  color: #fff;
  font-weight: bold;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
    
  }
`;