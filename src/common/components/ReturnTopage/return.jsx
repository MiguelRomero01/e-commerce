import { useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";

const Return = () => {
  const navigate = useNavigate();

  return (
    <span
      id="return-back"
      onClick={() => navigate(-1)}
      style={{
        cursor: "pointer",
        position: "absolute",
        top: "10vh",
        left: "10vh",
        fontSize: 20,
        color: "#6c6c6c",
        fontWeight: "600",
      }}
    >
      <ArrowBack sx={{verticalAlign: 'middle', fontSize: 20}}/> Return
    </span>
  );
};

export default Return;
