import styled from 'styled-components';
import { StyledProps } from 'styled-components';

interface StyledProps {
    color?: string;
    progress?: number;
  }
  

export const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const ProgressBarWrapper = styled.div`
  width: 100%;
  background-color: #e5e7eb;
  border-radius: 0.25rem;
  height: 0.625rem;
`;

export const ProgressBarFill = styled.div<StyledProps>`
  width: ${({ progress }) => progress}%;
  background-color: #AC883F;
  height: 0.625rem;
  border-radius: 0.25rem;
`;
