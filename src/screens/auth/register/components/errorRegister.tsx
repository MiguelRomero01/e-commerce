import Swal from "sweetalert2";

interface errorRegisterProps {
     text: string;
     icon: "error" | "warning" | "info" | "success";
}

const errorRegister: React.FC<errorRegisterProps> = ({ text, icon }) => {
     Swal.fire({
          title: "Error",
          text: text,
          icon: icon,
          showCancelButton: false,
          confirmButtonText: "ok",
     });
     
     return null;
};

export default errorRegister;
