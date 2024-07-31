import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 5rem;
  margin-top: 5rem;
`;

export const Container = styled.div`
  background-color: #FFF;
`;

export const Image = styled.img`
  width: 550px;
  height: 400px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const TextContainer = styled.div`
  .textBaner {
    color: #3F2409;
    line-height: 1;
    font-weight: 650;
    font-size: 45px;
  }

  .text {
    color: #000;
    font-size: 20px;
    font-weight: 300;
  }

  .btn {
    margin-top: 5px;
    font-weight: 500;
    background-color: #AC883F;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Column = styled.div`
  flex: 1;
  padding: 15px;
`;
