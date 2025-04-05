import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SuccessRegister = () => {
  const navigate = useNavigate();

  useEffect(() => {
    Swal.fire({
      title: "Your account has been created",
      text: "Now you can use all our functions!",
      icon: "success",
      showCancelButton: true,
      confirmButtonText: "Go to login",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/login");
      }
    });
  }, [navigate]);

  return null; // No renderiza nada
};

export default SuccessRegister;
