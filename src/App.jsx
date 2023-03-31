import Dropdown from "./components/Dropdown.jsx";

function App() {
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
      <Dropdown options={options} />
    </div>
  );
}

export default App;
