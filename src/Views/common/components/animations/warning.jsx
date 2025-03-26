import Lottie from "lottie-react";
import warningMark from '../../animations/warning.json'

const warningAnimation = () => {
return(
    <div style={{ width: '150px', height: '150px' }}>
        <Lottie animationData={warningMark} loop={'false'}/>
    </div>
)
}

export default warningAnimation;