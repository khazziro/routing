import Dropdown from "./components/Dropdown.jsx";
import { useState } from "react";

function App() {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  const options = [
    {
      label: "Red",
      value: "red",
    },
    {
      label: "Blue",
      value: "blue",
    },
    {
      label: "Green",
      value: "green",
    },
  ];
  return (
    <div>
      <Dropdown
        selection={selection}
        onSelect={handleSelect}
        options={options}
      />
    </div>
  );
}

export default App;
