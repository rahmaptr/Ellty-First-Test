import "./App.css";
import Button from "./components/Button";
import CheckboxItem from "./components/CheckboxItem";
import Divider from "./components/Divider";

function App() {
  return (
    <div className="backdrop">
      <div className="container">
        <CheckboxItem />
        <Divider />
        {Array.from({ length: 4 }).map((_, index) => (
          <CheckboxItem key={index} label={`Page ${index + 1}`} />
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
