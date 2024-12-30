import React from "react";
import HeroStyles from "./HeroSection.module.css";
import SocialMedia from "../../../../common/components/others/socialMedia";

export default function HeroSection () {
     return(
          <div className={HeroStyles.heroSection}>
            <div className={HeroStyles['heroSectionContent-left']}>
              <h1 className={HeroStyles['main-title']}>
                <span>LET'S</span> <br />
                <span>EXPLORE</span> <br />
                <span>UNIQUE</span> <br />
                <span>CLOTHES</span>
              </h1>
              <p className={HeroStyles.text}>Live for influential and innovative fashion!</p>
              <button className={HeroStyles['main-button']}>Get Started</button>
            </div>

            <div style={{marginBottom:'40em'}}>
              <SocialMedia/>
            </div>

          </div>   
     );
}
