import React from "react";
import membershipStyles from "./membership.module.css";
import { formatNumber } from "../../../features/services/formatPrice";

//AOS animation
import AOS from "aos";
import "aos/dist/aos.css";

interface membershipProps {
  title: string;
  price: number;
  includesText: string;
  listOfIncludes: string[];
  icon: React.ReactNode;
}

const Membership: React.FC<membershipProps> = ({
  title,
  price,
  includesText,
  listOfIncludes,
  icon,
}) => {
  AOS.init();

  return (
    <article
      className={membershipStyles["membership-container"]}
      data-aos="fade-down"
    >
      <section id={membershipStyles["upper-section"]}>
        <div className={membershipStyles["icon-container"]}>{icon}</div>
        <h3>{title}</h3>
        <h4>
          ${formatNumber(price)}
          <span>/month</span>
        </h4>
        <hr />
      </section>

      <section id={membershipStyles["lower-section"]}>
        <span>{includesText}</span>
        <ul id={membershipStyles["includes-List"]}>
          {listOfIncludes.map((includeInfo, index) => (
            <li key={index}>{includeInfo}</li>
          ))}
        </ul>
      </section>

      <button id={membershipStyles["buy-member-button"]}>Buy membership</button>
    </article>
  );
};

export default Membership;
