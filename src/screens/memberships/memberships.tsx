import React from "react";
import membershipStyles from "./memberships.module.css";
import Membership from "./components/membership";

import { CartDropdown_ProductsType } from "../../features/services/Cart/CartDropdownProducts";
import Navbar from "../home/components/Navbar/Navbar";

interface membershipsProps {
  isLogged: boolean;
  onLogout: () => void;
  cart: CartDropdown_ProductsType[];
  setCart: React.Dispatch<React.SetStateAction<CartDropdown_ProductsType[]>>;
}

const membershipScreen: React.FC<membershipsProps> = ({
  isLogged,
  onLogout,
  cart,
  setCart,
}) => {
  return (
    <>
      <header>
        <Navbar
          isLogged={isLogged}
          onLogout={onLogout}
          cart={cart}
          setCart={setCart}
          theme="dark"
        />
      </header>

      <section id={membershipStyles["memberships-section-container"]}>
        <Membership
          title="Amateur"
          includesText="Include"
          price={3200}
          listOfIncludes={["asdas", "dasdas", "sfas"]}
        />

        <Membership
          title="Pro"
          includesText="Include Amateur, plus"
          price={3200}
          listOfIncludes={["asdas", "dasdas", "sfas"]}
        />
        
        <Membership
          title="Business"
          includesText="Include Pro, plus"
          price={3200}
          listOfIncludes={["asdas", "dasdas", "sfas"]}
        />
      </section>
    </>
  );
};

export default membershipScreen;
