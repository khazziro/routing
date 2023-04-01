import Link from "./components/Link.jsx";
import Route from "./components/Route.jsx";
import AccordionPage from "./pages/AccordionPage.jsx";
import DropdownPage from "./pages/DropdownPage.jsx";

function App() {
  return (
    <div>
      <Link to="/accordion">Go to Accordion</Link>
      <Link to="/dropdown">Go to Dropdown</Link>
      <div>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/dropdown">
          <DropdownPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
