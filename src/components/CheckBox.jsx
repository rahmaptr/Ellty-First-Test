import { useState } from "react";
import "./CheckBox.css";
import CheckIcon from "./icons/CheckIcon";

export default function CheckBox() {
  const [isChecked, setIsChecked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

   const getIconColor = () => {
    if (isChecked) {
      return isHovered ? "#E3E3E3" : "#FFFFFF";
    }
    return "#878787";
  };

  return (
    <div
      className={`checkbox ${isChecked ? "checked" : ""}`}
      onClick={() => setIsChecked(!isChecked)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isChecked && <CheckIcon color={getIconColor()} id="check-icon" />}
    </div>
  );
}
