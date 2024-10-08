import styled from 'styled-components';


export const SpinnerOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  z-index: 9999;
`;


export const SpinnerCircle = styled.div`
  border: 10px solid #f3f3f3;
  border-top: 10px solid  #C09C52;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation:  spin 4s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
