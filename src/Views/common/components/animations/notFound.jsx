import Lottie from 'lottie-react';
import notFoundAnimation from '../../animations/notFound.json';

const NotFoundAnimation = () => {
  return (
    <div style={{ width: '30%', height: '30%' }}>
      <Lottie animationData={notFoundAnimation} loop={true} />
    </div>
  );
};

export default NotFoundAnimation;
