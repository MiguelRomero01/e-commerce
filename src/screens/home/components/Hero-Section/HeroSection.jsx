import React, {useEffect, useState} from "react";
import HeroStyles from "./HeroSection.module.css";
import SocialMedia from "../../../../common/components/others/socialMedia";

export default function HeroSection () {
  const [displayText, setDisplayText] = useState({
    line1: '',
    line2: '',
    line3: '',
    line4: ''
  });

  useEffect(() => {
    const texts = ["LET'S", "EXPLORE", "UNIQUE", "CLOTHES"];
    const delays = [0, 500, 1200, 1900]; // Delays for each line

    texts.forEach((text, index) => {
      let currentText = '';
      const lineKey = `line${index + 1}`;
      
      [...text].forEach((letter, letterIndex) => {
        setTimeout(() => {
          currentText += letter;
          setDisplayText(prev => ({
            ...prev,
            [lineKey]: currentText
          }));
        }, delays[index] + (letterIndex * 100)); // 100ms between each letter
      });
    });
  }, []);

     return(
          <div className={HeroStyles.heroSection}>
            <div className={HeroStyles['heroSectionContent-left']}>
              <h1 className={HeroStyles['main-title']}>
                <span>{displayText.line1}</span> <br />
                <span>{displayText.line2}</span> <br />
                <span className={HeroStyles['unique-word']}>{displayText.line3}</span> <br />
                <span>{displayText.line4}</span>
              </h1>
              <p className={HeroStyles.text}>Live for influential and innovative fashion!</p>
              <button className={HeroStyles['main-button']}>Get Started</button>
            </div>

            <div style={{marginBottom:'65vh'}}>
              <SocialMedia/>
            </div>

          </div>   
     );
}
