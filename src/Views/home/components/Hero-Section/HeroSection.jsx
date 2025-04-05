import React, { useEffect, useState } from "react";
import HeroStyles from "./HeroSection.module.css";
import SocialMedia from "../../../common/components/others/socialMedia";

//aos animation
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

export default function HeroSection({ animationOcurred }) {
  const [displayText, setDisplayText] = useState({
    line1: "",
    line2: "",
    line3: "",
    line4: "",
  });

  useEffect(() => {
    const texts = ["LET'S", "EXPLORE", "UNIQUE", "CLOTHES"];
    const delays = [0, 350, 900, 1400]; // Delays for each line

    texts.forEach((text, index) => {
      let currentText = "";
      const lineKey = `line${index + 1}`;

      [...text].forEach((letter, letterIndex) => {
        setTimeout(() => {
          currentText += letter;
          setDisplayText((prev) => ({
            ...prev,
            [lineKey]: currentText,
          }));
        }, delays[index] + letterIndex * 80); // 100ms between each letter
      });
    });
  }, []);

  return (
    <div className={HeroStyles.heroSection}>
      <div className={HeroStyles["heroSectionContent-left"]}>
        <h1 className={HeroStyles["main-title"]}>
          <span>{displayText.line1}</span> <br />
          <span>{displayText.line2}</span> <br />
          <span className={HeroStyles["unique-word"]}>
            {displayText.line3}
          </span>{" "}
          <br />
          <span>{displayText.line4}</span>
        </h1>
        <p
          className={HeroStyles.text}
          data-aos="fade-right"
          data-aos-delay={animationOcurred ? "0" : "1800"}
          data-aos-duration="500"
        >
          Live for influential and innovative fashion!
        </p>
        {/* <Link to="/shop">
          <button
            className={HeroStyles["main-button"]}
            data-aos="fade-right"
            data-aos-delay={animationOcurred ? "0" : "1800"}
            data-aos-duration="500"
          >
            Get Started
          </button>
        </Link> */}
      </div>

      <div
        style={{ marginBottom: "65vh", marginRight: "-4vmin" }}
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-delay={animationOcurred ? "0" : "1800"}
      >
        <SocialMedia />
      </div>
    </div>
  );
}
