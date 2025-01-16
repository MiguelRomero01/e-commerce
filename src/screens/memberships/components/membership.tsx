import React from "react";
import membershipStyles from "./membership.module.css";

interface membershipProps {
  title: string;
  price: number;
  includesText: string;
  listOfIncludes: string[];
}

const Membership: React.FC<membershipProps> = ({
  title,
  price,
  includesText,
  listOfIncludes,
}) => {
  return (
    <article className={membershipStyles["membership-container"]}>
      <section id={membershipStyles["upper-section"]}>
        <h3>{title}</h3>
        <h4>${price}</h4>
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
    </article>
  );
};

export default Membership;
