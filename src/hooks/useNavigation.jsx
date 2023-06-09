import NavigationContext from "../context/navigation.jsx";
import { useContext } from "react";

const useNavigation = () => {
  return useContext(NavigationContext);
};

export default useNavigation;
