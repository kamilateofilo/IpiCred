import "bootstrap/dist/css/bootstrap.min.css"; 
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ProgressWrapper, ProgressBarStyled } from "./styled";

const ProgressBar = () => {
    const location = useLocation();
    const [progress, setProgress] = useState(50); 

    useEffect(() => {
        
        console.log('Current pathname:', location.pathname);

        const pathnames = ['/', '/cooperativeForm']; 
        const totalRoutes = pathnames.length;
        const currentRouteIndex = pathnames.indexOf(location.pathname);

        if (currentRouteIndex !== -1) {
          const newProgress = currentRouteIndex === totalRoutes - 1 
            ? 100 
            : ((currentRouteIndex + 1) / totalRoutes) * 100;

          console.log('New progress:', newProgress); 
          setProgress(newProgress);
        }
      }, [location]);

    return (
        <ProgressWrapper>
            <ProgressBarStyled progress={progress} />
        </ProgressWrapper>
    );
}

export default ProgressBar;
