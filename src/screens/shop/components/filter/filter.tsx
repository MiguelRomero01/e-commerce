import React, { useState, useEffect } from "react";
import FilterStyles from "./filter.module.css";
import { Rating } from "@mui/material";

interface FilterState {
  category: string;
  priceRange: string;
  rating: number;
}

interface FilterProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
}

const Filter: React.FC<FilterProps> = ({ filters, setFilters }) => {
  const [rating, setRating] = useState<number | null>(null);

  return (
    <div className={FilterStyles["filter-container"]}>
      <h3>Filtros</h3>

      <div className={FilterStyles["filter-section"]}>
        <h4>Categorías</h4>
        <select
          value={filters.category}
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
        >
          <option value="all">Todas</option>
          <option value="electronics">Electrónicos</option>
          <option value="clothing">Ropa</option>
          <option value="books">Libros</option>
        </select>
      </div>

      <div className={FilterStyles["filter-section"]}>
        <h4>Rango de Precio</h4>
        <select
          value={filters.priceRange}
          onChange={(e) =>
            setFilters({ ...filters, priceRange: e.target.value })
          }
        >
          <option value="all">Todos</option>
          <option value="0-50">$0 - $50</option>
          <option value="51-100">$51 - $100</option>
          <option value="101-200">$101 - $200</option>
          <option value="201+">$201+</option>
        </select>
      </div>

      <div className={FilterStyles["filter-section"]}>
        <h4>Valoración</h4>
        <div className={FilterStyles["rating-filter"]}>
          <Rating
            name="customized-5"
            max={5}
            precision={0.5}
            onChange={(event, newValue) => setRating(newValue)}
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
