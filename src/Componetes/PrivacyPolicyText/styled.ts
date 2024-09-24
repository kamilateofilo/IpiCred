import styled from "styled-components";

export const PrivacyPolicyContainer = styled.div`
  background-color: #AC883F; 
  padding: 20px;
  height: auto;
  min-height: 324px;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const PrivacyPolicyTitle = styled.h1`
  color: #fff; 
  text-align: left;
  margin-top: 12%;
  
  @media (max-width: 768px) {
    font-size: 24px;
    margin-top: 8em;
  }
`;

export const PrivacyPolicyContent = styled.div`
   margin: 30px;
   font-size: 16px;
   font-weight: 400;
   color: #000000;

   @media (max-width: 768px) {
     margin: 15px; 
     font-size: 14px;
   }
`;

export const ParagraphLGPD = styled.div`
    border: 1px solid #7F7667;
    border-radius: 12px;
    font-weight: 500;
    margin-top: 3em;

    > p {
        padding: 20px;

        @media (max-width: 768px) {
            padding: 15px;
        }
    }
`;

export const ContentTitle = styled.h3`
    margin-top: 40px;
    color: #3F2409;
    font-size: 36px;
    font-weight: 500;

    @media (max-width: 768px) {
        font-size: 23px; 
        margin-top: 20px;
    }
`;

export const ContentParagraph = styled.p`
     letter-spacing: 0.5px;

     @media (max-width: 768px) {
         font-size: 14px;
     }
`;

export const ContentList = styled.ul`
    letter-spacing: 0.5px;

    @media (max-width: 768px) {
        font-size: 14px;
    }
`;
