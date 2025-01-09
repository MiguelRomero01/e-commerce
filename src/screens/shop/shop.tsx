import React, { useState } from "react";
import ShopStyles from "./shop.module.css";

// Components
import Navbar from "../home/components/Navbar";
import Filter from "./components/filter/filter";

// Services
import { CartDropdown_ProductsType } from "../../features/services/Cart/CartDropdownProducts";
import { getProducts } from "../../features/database/queries/get/product/getAllProducts";
import ProductCard from "../../common/components/ProductCard";
import SearchBar from "../../common/components/searchBar/SearchBar";

interface ShopProps {    
    isLogged: boolean;
    onLogout: () => void;
    cart: CartDropdown_ProductsType[];
    setCart: React.Dispatch<React.SetStateAction<CartDropdown_ProductsType[]>>;
}

interface FilterState {
    category: string;
    priceRange: string;
    rating: number;
}

const Shop = ({ isLogged, onLogout, cart, setCart }: ShopProps) => {
    const [filters, setFilters] = useState<FilterState>({
        category: 'all',
        priceRange: 'all',
        rating: 0
    });

    return (
        <div className={ShopStyles['shop-container']}>
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
                <div className={ShopStyles['shop-content']}>
                    <div className={ShopStyles['shop-content-left']}>
                        <Filter filters={filters} setFilters={setFilters} />
                    </div>

                    <section className={ShopStyles['shop-products']}>
                        <SearchBar />
                        <ProductCard setCart={setCart} cart={cart} getProduct_Function={getProducts()}/>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Shop;
