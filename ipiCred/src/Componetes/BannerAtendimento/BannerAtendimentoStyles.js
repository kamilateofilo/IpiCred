// BannerAtendimentoStyles.js
import styled from 'styled-components';

export const Title = styled.p`
  margin-top: 100px;
  font-weight: 700;
  font-size: 25px;
  color: #3F2409;
  text-align: center;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px;
`;

export const CustomCard = styled.div`
  width: 270px;
  height: auto;
  border-radius: 15px;
  margin: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const CardImage = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 13px;
`;

export const TitleCard = styled.h6`
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  margin-bottom: 10px;
  line-height: 1.5;
`;

export const TextCard = styled.p`
  font-size: 15px;
  text-align: left;
`;
