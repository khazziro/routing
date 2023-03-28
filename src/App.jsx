import './App.css';
import Button from "./button.jsx";

function App() {
  return (
    <div>
      <div>
        <Button success outline rounded>Click!</Button>
      </div>
      <div>
        <Button warning>Buy now!</Button>
      </div>
      <div>
        <Button secondary>See Deal!</Button>
      </div>
      <div>
        <Button danger outline>Hide Ads!</Button>
      </div>
      <div>
        <Button primary rounded>Test!</Button>
      </div>
    </div>

  );
}

export default App;
