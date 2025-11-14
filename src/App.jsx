import "./App.css";
import Button from "./components/Button";
import CheckboxItem from "./components/CheckboxItem";

function App() {
  return (
    <div className="backdrop">
      <Button text="Done" />
      <div className="container">
        <CheckboxItem />
      </div>
    </div>
  );
}

export default App;
