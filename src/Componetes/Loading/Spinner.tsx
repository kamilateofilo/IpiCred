import React from 'react';
import { SpinnerOverlay, SpinnerCircle } from './SpinnerStyles';

const Loading: React.FC = () => {
  return (
    <SpinnerOverlay>
      <SpinnerCircle />
    </SpinnerOverlay>
  );
};

export default Loading;
