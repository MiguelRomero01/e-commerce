import React, { useState } from "react";
import userDropdown_styles from "./userDropdown.module.css";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";

interface UserDropdownProps {
  onLogout: () => void;
  theme: string;
}

const UserDropdown = ({ onLogout, theme }: UserDropdownProps) => {
  const [showDropdownUser, setShowDropdownUser] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <PersonIcon
        onClick={() => setShowDropdownUser(!showDropdownUser)}
        sx={{
          color: theme === "light" ? "white" : "black",
          fontSize: "2rem",
          marginRight: "4vmin",
          marginTop: "8px",
          transition: "all 0.3s ease",
          "&:hover": {
            scale: "1.1",
            cursor: "pointer",
          },
        }}
      />

      {showDropdownUser && (
        <div className={userDropdown_styles["dropdown-menu"]}>
          <ul>
            <li>Profile</li>
            <li>My Orders</li>
            <li onClick={onLogout}>Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
