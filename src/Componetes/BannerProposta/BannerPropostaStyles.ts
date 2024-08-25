import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Card = styled.div`
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 90px;
  overflow: hidden;
  height: 550px;
`;

export const CardHeader = styled.div`
  padding: 10px 15px;
  font-size: 18px;
  font-weight: bold;
`;

export const CardBody = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Image = styled.img`
  max-width: 500px;
  height: 300px;
  margin-bottom: 15px;
`;

export const CardText = styled.p`
  font-size: 24px;
  font-weight: 400;
  color: #6c757d;
  margin-bottom: 20px;
`;


export const StyledLink = styled(Link)`
  text-decoration: none;
  outline: none;
  padding: 10px 20px;

  
  &:focus {
    outline: none;
  }
`;

export const StyledButton = styled.a`
  background-color: #AC883F;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  &:hover {
    background-color: #AC883F;
  }
`;
