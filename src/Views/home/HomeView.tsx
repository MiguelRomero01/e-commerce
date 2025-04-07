import React from "react";
import HomeStyles from "./Home.module.css";

//AOS animation
import "aos/dist/aos.css";

//components
import { Navbar } from "../common/components/Navbar";
import HeroSection from "./components/Hero-Section";
import ProductCard from "../common/components/ProductCard";
import TitleWithUnderline from "../common/components/Titles/TitleUnderline";
import CategorieCard from "./components/Categories/categorie";
import UserReview from "./components/Reviews/userReview";
import { Footer } from "../common/components/Footer";

//services
import { getTopProducts } from "../../controllers/database/queries/get/product/getTopProductsController";

//models
import { HomeProps } from "../../models/home/HomePropsModel";

const HomeScreen: React.FC<HomeProps> = ({
  isLogged,
  onLogout,
  setCart,
  cart,
  membership,
  animationOcurred,
}) => {
  return (
    <div>
      <header
        data-aos="fade-down"
        data-aos-duration="500"
        data-aos-delay={animationOcurred ? "0" : "1800"}
      >
        <Navbar
          isLogged={isLogged}
          onLogout={onLogout}
          cart={cart}
          setCart={setCart}
          theme="light"
          membership={membership}
        />
      </header>

      <main>
        <HeroSection animationOcurred={animationOcurred} />
        <section className={HomeStyles["top-sellers-section"]}>
          <TitleWithUnderline title={"Best Sellers"} level={2} />
          <div className={HomeStyles["top-sellers-container"]}>
            <ProductCard
              setCart={setCart}
              cart={cart}
              getProduct_Function={getTopProducts()}
            />
          </div>
        </section>
        <section className={HomeStyles["categories-section"]}>
          <TitleWithUnderline title={"Find your Style"} level={2} />
          <br></br>
          <div className={HomeStyles["categories-container"]}>
            <CategorieCard
              image={"/Images/Home/categories/persona3.jpg"}
              information="We all need a change, so why not start right now?"
              navigation="/shop/plana"
              title="Discover your new style"
            />

            <CategorieCard
              image={"/Images/Home/categories/persona4.jpg"}
              information="Unleash your inner self and explore what the world has to offer you."
              navigation="/shop/malla"
              title="Do you wish to explore the world?"
            />

            <CategorieCard
              image={"/Images/Home/categories/persona1.jpeg"}
              information="For when you just want to be yourself and nothing more."
              navigation="/shop/casual"
              title="Improve your casual style"
            />

            <CategorieCard
              image={"/Images/Home/categories/persona2.jpeg"}
              information="Improve your style with the latest trends."
              navigation="/shop/moderna"
              title="Do you want to update your style?"
            />
          </div>
        </section>
        <section className={HomeStyles["reviews-section"]}>
          <TitleWithUnderline title={"What our customers say"} level={2} />
          <div className={HomeStyles["reviews-container"]}>
            <UserReview />
          </div>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomeScreen;
