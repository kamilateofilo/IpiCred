import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';



export const Container = styled.div`
    max-width: 100%;
    width: 100%;
    max-width: 600px;
    margin: 7.8rem;
    border-radius: 0.5rem;
    background-color: #ffffff;

    @media (max-width: 768px) {
      margin-left: 0.5rem;
      padding: 1rem;
    }

    @media (max-width: 480px) {
       margin-left: 0.5rem; 
       padding: 1rem;
    }
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;

    >h1, h3 {
        color: #4D4D4D;
    }

    >h1 {
        font-size: 32px;
        font-weight: 700;
        white-space: nowrap;
    }

    >h3 {
        margin-top: 15px;
        font-size: 24px;
        font-weight: 600;
    }

    > p {
      color: #79747E;
      font-weight: 400;
      font-size: 16px;
      text-align: justify-all;
      margin-bottom: 2rem;
      white-space: nowrap;
    }

    @media (max-width: 768px) {
        >h1 {
            font-size: 24px;
        }

        >h3 {
            margin-top: 10px;
            font-size: 16px;
        }

        > p {
            font-size: 14px;
            margin-top: 10px;
        }
    }

    @media (max-width: 480px) {
        >h1 {
            font-size: 20px;
        }

        >h3 {
            margin-top: 8px;
        }

        > p {
            font-size: 12px;
        }
    }
`;


export const StyledLink = styled(Link)`
  text-decoration: none;
  outline: none;

  &:focus {
    outline: none;
  }
`;


export const StyledButton = styled.button`
  width: 100%;
  max-width: 250px;
  padding: 15px;
  border-radius: 40px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  background-color: #AC883F;
  color: #ffffff;
  border: none;
  margin-top: 2rem;
  cursor: pointer;

  @media (max-width: 600px) {
    max-width: 100%;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #E4E4E4;
  }
`;


const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 318px;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 0.375rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  overflow: hidden;

  @media (max-width: 768px) {
      height: auto;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
      grid-template-columns: repeat(minmax(250px, 1fr));
  }

  @media (max-width: 480px) {
      grid-template-columns: 1fr;
  }
`;

export const CardBody = styled.div`
  flex: 1;
  padding: 1.5em;

  @media (max-width: 768px) {
      padding: 1em;
  }

  @media (max-width: 480px) {
      padding: 0.5em;
  }
`;

export const CardTitle = styled.h5`
  margin-bottom: 0.5rem;
  font-weight: 600;
  font-size: 20px;

  @media (max-width: 768px) {
      font-size: 18px;
  }

  @media (max-width: 480px) {
      font-size: 16px;
  }
`;

export const CardLabel = styled.label`
  display: flex;
  font-weight: 500;
  font-size: 14px;

  >p{
    margin-left: 8px;
    font-weight: 400;
    font-size: 14px;
  }

  @media (max-width: 768px) {
      gap: 3em;
  }

  @media (max-width: 480px) {
      flex-direction: column;
      gap: 1em;
  }
`;

export const ContainerLabel = styled.div`
   display: flex;
   font-size: 14px;
   margin-bottom: 10px;

   @media (max-width: 768px) {
       gap: 5rem;
   }

   @media (max-width: 480px) {
       flex-direction: column;
       gap: 2rem;
   }
`;


export const LabelFirstColumn = styled.div`
    flex-direction: column;
    font-size: 16px;

    @media (max-width: 768px) {
        font-size: 14px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
    }
`;

export const LabelSecondColumnCard1 = styled.div`
     font-size: 16px;

     @media (max-width: 768px) {
         font-size: 14px;
     }

     @media (max-width: 480px) {
         font-size: 12px;
     }
`;

export const LabelSecondColumn = styled.div`
     font-size: 16px;
     margin-left: 1rem;

     @media (max-width: 768px) {
         font-size: 14px;
     }

     @media (max-width: 480px) {
         font-size: 12px;
     }
`;


export const LabelDependents = styled.label`
     flex-direction: column;
     margin-right: 5px;

     >p{
        margin-bottom: 5px;
     }

     @media (max-width: 768px) {
         font-size: 14px;
     }

     @media (max-width: 480px) {
         font-size: 12px;
     }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 768px) {
      flex-direction: column;
  }

  @media (max-width: 480px) {
      gap: 10px;
  }
`;

export const CardContainer2 = styled.div`
   display: flex;
   flex-direction: column;
   gap: 1em;
`;

export const ConteinerLabel = styled.div`
   display: flex;
   gap: 3em;
`;

export const Tag = styled.div`
   background-color: #418C49;
   color: #fff;
   text-align: center;
   font-size: 14px;
   font-weight: 400;
   margin-left: 6px;
   padding: 6px, 8px, 6px, 8px;
   top: 6px;
   gap: 10px;
   width: 65px;
   height: 25px;
   border-radius: 20px;
`;


export const EditIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  cursor: pointer;
  color: #5F646D;
  border: 1px solid #ddd;
  border-radius: 0.375rem;
  font-size: 1.25rem;
  padding: 8px;

  @media (max-width: 768px) {
      font-size: 1rem;
      padding: 6px;
  }

  @media (max-width: 480px) {
      font-size: 0.875rem;
      padding: 4px;
  }
`;

export const CardCustom1 = styled(Card)`
  width: 519px;
  height: 454px;

  @media (max-width: 768px) {
      width: 100%;
  }
`;

export const CardCustom2 = styled(Card)`
  width: 519px;
  height: 190px;

  @media (max-width: 768px) {
      width: 100%;
  }
`;

export const CardCustom3 = styled(Card)`
  width: 600px;
  height: 405px;

`;

export const CardCustom4 = styled(Card)`
   width: 600px;
   height: 230px;
`;
