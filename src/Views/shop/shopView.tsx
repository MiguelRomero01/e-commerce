import React, { useState } from "react";
import ShopStyles from "./shop.module.css";
import { useParams } from "react-router-dom";

// Components
import { Navbar } from "../common/components/Navbar";
import Filter from "./components/filter/filter";
import ProductCard from "../common/components/ProductCard";
import { SearchBar } from "../common/components/searchBar";
import { Footer } from "../common/components/Footer";

// Services
import { getProducts } from "../../controllers/database/queries/get/product/getAllProductsController";

//models
import { ShopProps } from "../../models/shop/shopModel";
import { getFilterProducts } from "../../controllers/database/queries/get/product/getFilterProductsController";
import { FilterState } from "../../models/shop/filterStateModel";

const Shop: React.FC<ShopProps> = ({
  isLogged,
  onLogout,
  cart,
  setCart,
  membership,
}) => {
  const { category } = useParams();

  const [isFiltering, setIsFiltering] = useState<boolean>(false);

  const [filters, setFilters] = useState<FilterState>({
    category: "all",
    priceRange: [0, 120000],
    rating: 0,
  });

  React.useEffect(() => {
    if (category) {
      setFilters((prev) => ({
        ...prev,
        category: category,
      }));
      setIsFiltering(true);
    }
  }, [category]);

  const getProductsData = () => {
    if (isFiltering) {
      return getFilterProducts(filters);
    }
    return getProducts();
  };

  return (
    <div className={ShopStyles["shop-container"]}>
      <header>
        <Navbar
          isLogged={isLogged}
          onLogout={onLogout}
          cart={cart}
          setCart={setCart}
          theme="dark"
          membership={membership}
        />
      </header>

      <main>
        <div className={ShopStyles["shop-content"]}>
          <div className={ShopStyles["shop-content-left"]}>
            <Filter
              filters={filters}
              setFilters={setFilters}
              isFiltering={isFiltering}
              setIsFiltering={setIsFiltering}
            />
          </div>

          <section className={ShopStyles["shop-products"]}>
            <SearchBar />
            <ProductCard
              setCart={setCart}
              cart={cart}
              getProduct_Function={getProductsData()}
            />
          </section>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Shop;
