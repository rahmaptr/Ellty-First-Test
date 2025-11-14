import "./App.css";
import Button from "./components/Button";
import CheckboxItem from "./components/CheckboxItem";
import Divider from "./components/Divider";
import { useState } from "react";

function App() {
  const [pageChecks, setPageChecks] = useState(Array.from({ length: 4 }, () => false));

  const isAllSelected = pageChecks.every(Boolean);

  const toggleAll = () => {
    const next = isAllSelected ? pageChecks.map(() => false) : pageChecks.map(() => true);
    setPageChecks(next);
  };

  const togglePage = (index) => {
    setPageChecks(prev => {
      const copy = [...prev];
      copy[index] = !copy[index];
      return copy;
    });
  };

  return (
    <div className="backdrop">
      <div className="container">
        <CheckboxItem
          label="All pages"
          checked={isAllSelected}
          onToggle={toggleAll}
        />
        <Divider />
        {pageChecks.map((checked, index) => (
          <CheckboxItem
            key={index}
            label={`Page ${index + 1}`}
            checked={checked}
            onToggle={() => togglePage(index)}
          />
        ))}
        <Divider />
        <div className="button-container">
          <Button text="Done" />
        </div>
      </div>
    </div>
  );
}

export default App;
