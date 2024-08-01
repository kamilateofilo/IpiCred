import styled from 'styled-components';

export const ProgressWrapper = styled.div`
    width: 100%;
    background-color: #e0e0e0; 
    border-radius: 8px;
    overflow: hidden;
`;

export const ProgressBarStyled = styled.div`
    width: ${props => props.progress}%;
    background-color: #AC883F; 
    height: 8px; 
    transition: width 0.3s ease-in-out;
`;
