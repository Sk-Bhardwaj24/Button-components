import "./App.css";
import { Button } from "./components/Button";

function App() {
  return (
    <div className="App">
      <Button primary={"rgb(36,144,254)"} Border={"solid"} Text={"white"}>
        Primary Button
      </Button>
      <Button Border={"solid"}>Default Button</Button>

      <Button Border={"dashed"}>Dashed Button</Button>
      <Button>Text Button</Button>
      <Button Text={"rgb(36,144,254)"}>Link Button</Button>
    </div>
  );
}

export default App;
