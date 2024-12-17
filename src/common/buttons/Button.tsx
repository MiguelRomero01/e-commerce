import React from "react";
import button_styles from './ButtonStyles.module.css';

interface ButtonInfo {
     text: string;
     background_color: string;
     onClick: () => void;
}

const ButtonComponent: React.FC<ButtonInfo> = ({text, background_color, onClick}) => {
     return(
          <button 
               className={button_styles['Button-component']} 
               style={{backgroundColor: background_color}}
               onClick={onClick}
          >
               {text}
          </button>
     )
}

export default ButtonComponent;