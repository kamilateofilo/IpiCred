import styled from 'styled-components';

export const Title = styled.p`
  text-align: center;
  color: #000;
  margin-top: 90px;
  font-weight: 500;
  font-size: 28px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
`;

export const Image = styled.img`
  max-width: 190px;
  margin: 10px;

  @media (max-width: 768px) {
    max-width: 80px;
  }
`;
