import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SuccessPayment = () => {
  const navigate = useNavigate();

  useEffect(() => {
    Swal.fire({
      title: "Successful Payment",
      icon: "success",
      showCancelButton: true,
      confirmButtonText: "Back to Home",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/");
      }
    });
  }, [navigate]);

  return null;
};

export default SuccessPayment;
