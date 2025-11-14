import { useState } from "react";
import CheckBox from "./CheckBox";
import "./CheckboxItem.css";

export default function CheckboxItem({ label = "All pages", checked, onToggle }) {
  return (
    <div className="checkbox-item">
      <span>{label}</span>
      <CheckBox checked={checked} onToggle={onToggle} />
    </div>
  );
}