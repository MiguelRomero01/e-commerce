import React, { useState} from "react";
import HomeStyles from "./Home.module.css";

//AOS animation
import "aos/dist/aos.css";

//components
import { Navbar } from "../../common/components/Navbar";
import HeroSection from "./components/Hero-Section";
import ProductCard from "../../common/components/ProductCard";
import TitleWithUnderline from "../../common/components/Titles/TitleUnderline";
import CategorieCard from "./components/Categories/categorie";
import UserReview from "./components/Reviews/userReview";
import { Footer } from "../../common/components/Footer";

//services
import { handleFileUpload } from "../../features/services/fileUpload";
import { CartDropdown_ProductsType } from "../../features/services/Cart/CartDropdownProducts";
import { getTopProducts } from "../../features/database/queries/get/product/getTopProducts";

interface HomeProps {
  isLogged: boolean;
  onLogout: () => void;
  cart: CartDropdown_ProductsType[];
  setCart: React.Dispatch<React.SetStateAction<CartDropdown_ProductsType[]>>;
  membership:string | null;
}

const handleFileChange = async (
  file: File,
  title: string,
  description: string,
  price: number
) => {
  if (file && title && description && price) {
    await handleFileUpload(file, title, description, price);
  } else {
    alert("Please fill all the fields!");
  }
};

const HomeScreen: React.FC<HomeProps> = ({
  isLogged,
  onLogout,
  setCart,
  cart,
  membership
}) => {
  // La seccion de añadir archivos para ser mandados a la db y demas se cambiará de aca a una cuenta de admin
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number>(0);

  return (
    <div>
      <header data-aos="fade-down" data-aos-duration="500" data-aos-delay="1800">
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
        <HeroSection /> 
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
        <div>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
          />
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="number"
            placeholder="Price"
            onChange={(e) => setPrice(parseFloat(e.target.value))}
          />
          <button
            onClick={() =>
              file && handleFileChange(file, title, description, price)
            }
          >
            Upload
          </button>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomeScreen;
