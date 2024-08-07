import "bootstrap/dist/css/bootstrap.min.css"; 
import { ProgressContainer, ProgressBarFill, ProgressBarWrapper} from "./styled";


interface ProgressBarProps {
  step: number;
}

  export const ProgressBar = ({ step }: ProgressBarProps) => {
    const progress = (step / 2) * 100;
    return (
      <ProgressContainer>
        <ProgressBarWrapper>
          <ProgressBarFill progress={progress} />
        </ProgressBarWrapper>
      </ProgressContainer>
    );
  };
  
export default ProgressBar;
