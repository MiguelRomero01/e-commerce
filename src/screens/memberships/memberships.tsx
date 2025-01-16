import React from "react";
import membershipStyles from "./memberships.module.css";
import Membership from "./components/membership";

import { CartDropdown_ProductsType } from "../../features/services/Cart/CartDropdownProducts";
import { Navbar } from "../../common/components/Navbar";
import { Crown, Rocket, Zap } from "lucide-react";
import { Footer } from "../../common/components/Footer";

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

      <div className={membershipStyles["memberships-container"]}>
        <section className={membershipStyles["memberships-container-header"]}>
          <h2>Choose the perfect plan for you</h2>
          <p>
            We offer different levels of licenses to suit your needs. From
            entrepreneurs to large companies, we have the ideal solution for you.
          </p>
        </section>

        <section id={membershipStyles["memberships-section-container"]}>
          <Membership
            title="Amateur"
            includesText="Include"
            price={10000}
            listOfIncludes={["asdas", "dasdas", "sfas"]}
            icon={<Zap size={30} />}
          />

          <Membership
            title="Pro"
            includesText="Include Amateur, plus"
            price={20000}
            listOfIncludes={["asdas", "dasdas", "sfas", "sdasd", "fasd"]}
            icon={<Rocket size={30} />}
          />

          <Membership
            title="Business"
            includesText="Include Pro, plus"
            price={30000}
            listOfIncludes={["asdas", "dasdas", "sfas", "gas"]}
            icon={<Crown size={30} />}
          />
        </section>
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default membershipScreen;
