import useNavigation from "../hooks/useNavigation.jsx";

const Route = ({ path, children }) => {
  const { currentPath } = useNavigation();
  if (path === currentPath) {
    return children;
  }

  return null;
};

export default Route;

// This component is a simple React component that renders its children only when the current path matches the specified path.
// It uses the useContext hook to access the currentPath variable from the NavigationContext.
// If the specified path matches the currentPath, the component returns its children. If not, it returns null.
