import React, { useState } from "react";
import ShopStyles from "./shop.module.css";
import {  useParams } from "react-router-dom";

// Components
import { Navbar } from "../../common/components/Navbar";
import Filter from "./components/filter/filter";
import ProductCard from "../../common/components/ProductCard";
import { SearchBar } from "../../common/components/searchBar";
import Footer from "../../common/components/Footer/footer";

// Services
import { CartDropdown_ProductsType } from "../../features/services/Cart/CartDropdownProducts";
import { getProducts } from "../../features/database/queries/get/product/getAllProducts";
import { getFilterProducts } from "../../features/database/queries/get/product/getFilterProducts";

interface ShopProps {
  isLogged: boolean;
  onLogout: () => void;
  cart: CartDropdown_ProductsType[];
  setCart: React.Dispatch<React.SetStateAction<CartDropdown_ProductsType[]>>;
}

interface FilterState {
  category: string;
  priceRange: number[];
  rating: number;
}

const Shop = ({ isLogged, onLogout, cart, setCart }: ShopProps) => {
  const { category } = useParams();

  const [isFiltering, setIsFiltering] = useState<boolean>(false);

  const [filters, setFilters] = useState<FilterState>({
    category: "all",
    priceRange: [0, 120000],
    rating: 0,
  });

  React.useEffect(() => {
    if (category) {
      setFilters(prev => ({
        ...prev,
        category: category
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
