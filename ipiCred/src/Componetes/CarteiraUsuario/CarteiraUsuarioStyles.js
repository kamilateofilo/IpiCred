import styled from 'styled-components';

export const BannerWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  background-color: #fff;

  .display-4 {
    font-size: 24px;
    font-weight: 700;
    color: #232528CC;
  }
`;

export const BannerContainer = styled.div`
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  width: 95%;
  max-width: 1500px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

export const CardRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: space-between;
`;

export const CardWrapper = styled.div`
  border: 1px solid #ccc;
  background-color: #F9F9F9;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 200px;
  height: 80px;
  margin-bottom: 8px;
`;

export const CardContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;

  .card-title {
    font-weight: 500;
    font-size: 12px;
    margin-bottom: 8px;
    color: #232528CC;

  }

  .card-text {
    font-size: 18px;
    font-weight: 700;
    color: #383838;
  }
`;

export const ImageSection = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }
`;
