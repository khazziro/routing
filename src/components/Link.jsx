import NavigationContext from "../context/navigation.jsx";
import { useContext } from "react";

const Link = ({ to, children }) => {
  const { navigate } = useContext(NavigationContext);

  const handleClick = (event) => {
    event.preventDefault();

    navigate(to);
  };
  return <a onClick={handleClick}>{children}</a>;
};

export default Link;

// This component is a reusable link that can be used throughout the application to navigate to a different path.
// It uses the useContext hook to access the navigate function from the NavigationContext.
// When a user clicks on the link, the handleClick function is called, which calls the navigate function with the provided to value.
// This updates the browser's history and navigates to the new path.
// This component abstracts away the navigation logic and provides a simple and reusable link, making it easier to manage and update links throughout the application.
