import NavigationContext from "../context/navigation.jsx";
import { useContext } from "react";

const Link = ({ to, children }) => {
  const { navigate } = useContext(NavigationContext);

  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();

    navigate(to);
  };
  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;

// This new implementation improves the user experience by preserving expected browser behavior
// when clicking links with modifiers while still providing correct behavior for regular clicks.
