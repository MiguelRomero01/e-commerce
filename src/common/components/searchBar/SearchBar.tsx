import React, { useEffect, useState, useRef } from "react";
import { getProducts } from "../../../features/database/queries/get/product/getAllProducts";
import styles from "./searchbar.module.css";
import { Search } from "@mui/icons-material";
import ProductSearch from "./components/product";

const SearchBar: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSearchTerm("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setIsOpen(true);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      
      setProducts(products);
    };
    fetchProducts();
  }, []);

  const filteredItems = products
    .filter((product) =>
      product.Title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(0, 4);

  return (
    <div className={styles.searchContainer} ref={searchContainerRef}>
      <input
        type="text"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={handleSearchChange}
        className={styles.searchInput}
        onFocus={() => setIsOpen(true)}
      />
      <Search className={styles.searchIcon} />

      {searchTerm && isOpen && (
        <ul className={styles.resultsList}>
          {filteredItems.length > 0 ? (
            filteredItems.map((product) => (
              <li key={product.id} className={styles.resultItem}>
                <ProductSearch product={product} />
              </li>
            ))
          ) : (
            <li className={styles.noResults}>
              No se encontraron resultados para "{searchTerm}"
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
