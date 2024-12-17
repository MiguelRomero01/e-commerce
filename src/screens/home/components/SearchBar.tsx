import React, { useState } from "react";

interface Item {
  id: number;
  name: string;
}

const SearchableList: React.FC = () => {
  const items: Item[] = [
    { id: 1, name: "Manzana" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Naranja" },
    { id: 4, name: "Uva" },
    { id: 5, name: "Piña" },
    { id: 6, name: "Mango" },
    { id: 7, name: "Fresa" },
    { id: 8, name: "Melón" },
    { id: 9, name: "Sandía" },
    { id: 10, name: "Cereza" },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  // Manejar cambios en la barra de búsqueda
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Filtra la lista basada en el término de búsqueda y limita a 5 resultados
  const filteredItems = items
    .filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(0, 5); // Limita los resultados a 5 elementos

  return (
    <div style={{ margin: "20px" }}>
      <h1>Buscar Frutas</h1>
      <input
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          width: "200px",
        }}
      />
      {/* Renderiza la lista solo si hay texto en la búsqueda */}
      {searchTerm && (
        <ul style={{ marginTop: "20px" }}>
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => <li key={item.id}>{item.name}</li>)
          ) : (
            <li>No se encontraron resultados</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchableList;
