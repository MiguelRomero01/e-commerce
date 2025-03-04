import React from 'react';
import Lottie from 'lottie-react';
import loadingAnimation from '../../animations/loading.json';

const LoadingAnimation = () => {
  return (
    <div style={{ width: '150px', height: '150px' }}>
      <Lottie animationData={loadingAnimation} loop={true} />
    </div>
  );
};

export default LoadingAnimation;
