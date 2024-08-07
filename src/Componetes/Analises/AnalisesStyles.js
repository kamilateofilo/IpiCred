// AnalisesStyled.js
import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; 
  padding: 1rem;
  margin-bottom: 50px;
  margin-top: -80px;
`;

export const CardContainer = styled.div`
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 0.375rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  margin: 1rem;
  width: 95%;
  max-width: 1500px;
`;

export const CardHeader = styled.div`
  background-color: #E4E4E4;
  color: #383838;
  padding: 0.75rem 1.25rem;
  font-size: 1.25rem;
  font-weight: 500;
  border-top-left-radius: 0.375rem;
  border-top-right-radius: 0.375rem;
`;

export const CardBody = styled.div`
  padding: 1.25rem;
`;

export const InnerCard = styled.div`
  background-color: #ffffff;
  border-radius: 0.375rem; 
  overflow: hidden; 
`;

export const Table = styled.table`
  width: 100%;
  margin-bottom: 1rem;
  border-collapse: separate;
  border-spacing: 0; 
  border: 1px solid #dee2e6;
  color: #1B1D21;
  border-radius: 0.375rem; 

  thead {
    background-color: #E4E4E4;
  }

  th, td {
    padding: 0.75rem;
    border-bottom: 1px solid #dee2e6; 
  }

  th {
    font-weight: 500;
    font-size: 15px;
    text-align: center; 
    @media (max-width: 768px) {
    font-size: 13px;
    padding: 0.25rem 0.5rem;
  }

  @media (max-width: 576px) {
    font-size: 11px;
    padding: 0.2rem 0.4rem;
  }
  }

  td {
    font-size: 13px;
    font-weight: 400;
    text-align: center; 

    @media (max-width: 768px) {
    font-size: 13px;
    padding: 0.25rem 0.5rem;
  }

  @media (max-width: 576px) {
    font-size: 11px;
    padding: 0.2rem 0.4rem;
  }
  }

  th:nth-child(1), td:nth-child(1) {
    width: 10%;
    text-align: center; 
  }

  th:nth-child(2), td:nth-child(2) {
    width: 20%;
    text-align: center; 
  }

  th:nth-child(3), td:nth-child(3) {
    width: 25%;
    text-align: center;
  }

  th:nth-child(4), td:nth-child(4) {
    width: 15%;
    text-align: center; 
  }

  th:nth-child(5), td:nth-child(5) {
    width: 20%;
    text-align: center; 
  }
`;

export const StatusButton = styled.div`
  display: inline-block;
  padding: 0.375rem 0.75rem;
  border-radius: 20px;
  color: #1B1D21;
  font-size: 16px;
  font-weight: 500;
  background-color: ${(props) => {
    switch (props.status) {
      case 'Concluído':
        return '#d4edda'; 
      case 'Em Progresso':
        return '#B0E5F9'; 
      case 'Pendente':
        return '#d1ecf1'; 
      default:
        return '#f8f9fa'; 
    }
  }};
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 13px;
    padding: 0.25rem 0.5rem;
  }

  @media (max-width: 576px) {
    font-size: 11px;
    padding: 0.2rem 0.4rem;
  }
`;
