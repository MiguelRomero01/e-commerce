import React from "react";
import FilterStyles from "./filter.module.css";
import { Rating } from "@mui/material";
import RangeSlider from "./components/RangeSlider";
import ComboBox from "./components/ComboBox";
import { useNavigate } from "react-router-dom";

interface FilterState {
  category: string;
  priceRange: number[];
  rating: number;
}

interface FilterProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  isFiltering: boolean;
  setIsFiltering: React.Dispatch<React.SetStateAction<boolean>>;
}

const Filter: React.FC<FilterProps> = ({
  filters,
  setFilters,
  setIsFiltering,
}) => {
  const navigate = useNavigate();

  const handleSearch = (Isfiltered: boolean) => {
    if (Isfiltered) {
      setIsFiltering(true);
      navigate(`/shop/${filters.category}`);
    } else {
      setIsFiltering(false);
      setFilters({
        category: "all",
        priceRange: [0, 100000],
        rating: 0,
      });
      navigate('/shop/all');
    }
  };

  const handleCategoryChange = (newCategory: string) => {
    setFilters({ ...filters, category: newCategory });
    navigate(`/shop/${newCategory}`);
  };

  return (
    <div className={FilterStyles["filter-container"]}>
      <h3>Filtros</h3>

      {/* Categorías */}
      <div className={FilterStyles["filter-section"]}>
        <h4>Categorías</h4>
        <ComboBox
          value={filters.category}
          setValue={handleCategoryChange}
        />
      </div>

      {/* Rango de Precio */}
      <div className={FilterStyles["filter-section"]}>
        <h4>Rango de Precio</h4>
        <RangeSlider
          value={filters.priceRange}
          setValue={(newValue) =>
            setFilters({ ...filters, priceRange: newValue })
          }
        />
      </div>

      {/* Valoración */}
      <div className={FilterStyles["filter-section"]}>
        <h4>Valoración</h4>
        <div className={FilterStyles["rating-filter"]}>
          <Rating
            name="customized-5"
            max={5}
            precision={0.5}
            value={filters.rating}
            onChange={(_, newValue) =>
              setFilters({ ...filters, rating: newValue || 0 })
            }
          />
        </div>
      </div>

      {/* Botón de búsqueda */}
      <button onClick={() => handleSearch(true)}>Search</button>

      <button onClick={() => handleSearch(false)}>Reset</button>
    </div>
  );
};

export default Filter;
