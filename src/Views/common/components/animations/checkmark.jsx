import Lottie  from 'lottie-react';
import checkmarkAnimation from '../../animations/checkmark.json'; // Ajusta la ruta según la ubicación del archivo JSON

const SuccessAnimation = () => {
  return (
    <div style={{ width: '150px', height: '150px' }}>
      <Lottie animationData={checkmarkAnimation} loop={false} />
    </div>
  );
};

export default SuccessAnimation;
