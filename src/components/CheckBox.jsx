import { useState } from "react";
import "./CheckBox.css";
import CheckIcon from "./icons/CheckIcon";

export default function CheckBox({ checked, onToggle }) {
  const [isHovered, setIsHovered] = useState(false);

  const getIconColor = () => {
    if (checked) {
      return isHovered ? "#E3E3E3" : "#FFFFFF";
    }
    return "#878787";
  };

  return (
    <div
      className={`checkbox ${checked ? "checked" : ""}`}
      onClick={onToggle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {checked && <CheckIcon color={getIconColor()} id="check-icon" />}
    </div>
  );
}
