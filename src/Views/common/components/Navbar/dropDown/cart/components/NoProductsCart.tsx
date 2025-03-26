import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const WarningProducts = () => {
  const navigate = useNavigate();

  useEffect(() => {
    Swal.fire({
      title: "No products found",
      text: "You must add at least a products",
      icon: "success",
      showCancelButton: true,
      confirmButtonText: "Back to shop",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/shop"); // Usa useNavigate correctamente dentro del hook
      }
    });
  }, [navigate]);

  return null; // No renderiza nada
};

export default WarningProducts;
