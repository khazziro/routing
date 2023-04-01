import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handler);

    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
};

export { NavigationProvider };
export default NavigationContext;

// This component is a React context provider that provides information about the current path and a function to navigate to a new path.
// It uses the useState hook to store the current path and the useEffect hook to listen for changes to the browser's history.
// The navigate function uses the pushState method to add a new entry to the browser's history and update the current path.
// This component can be used to provide navigation functionality throughout the application by using the NavigationContext in child components.
// In addition, it abstracts away the navigation functionality from the child components, making it easier to manage and update navigation in a central location.
