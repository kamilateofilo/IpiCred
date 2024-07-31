import "bootstrap/dist/css/bootstrap.min.css"; 
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ProgressWrapper, ProgressBarStyled } from "./styled";



const ProgressBar = () => {
    const location = useLocation();
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const pathnames = ['/', '/cooperativeForm'];
        const totalRoutes = pathnames.length;
        const currentRouteIndex = pathnames.indexOf(location.pathname);
        if (currentRouteIndex !== -1) {
          const newProgress = ((currentRouteIndex + 1) / totalRoutes) * 100;
          setProgress(newProgress);
        }
      }, [location]);

    return(
        <ProgressWrapper>
            <ProgressBarStyled progress={progress} />
        </ProgressWrapper>
    );
}

export default ProgressBar;