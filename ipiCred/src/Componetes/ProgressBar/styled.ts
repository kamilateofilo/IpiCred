import styled from "styled-components";


interface ProgressBarStyledProps {
    progress: number;
  }
  
  const ProgressWrapper = styled.div`
    width: 100%;
    height: 8px;
    background-color: #f3f3f3;
    border-radius: 5px;
  `;
  

  const ProgressBarStyled = styled.div<ProgressBarStyledProps>`
    height: 8px;
    border-radius: 5px;
    width: ${props => props.progress}%;
    background-color: #AC883F;
    transition: width 0.3s ease;
  `;
  
  export { ProgressWrapper, ProgressBarStyled };