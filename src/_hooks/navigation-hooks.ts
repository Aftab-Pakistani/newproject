import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { MainAppStackTypes } from "@ts";

function useNavigationHooks<T extends MainAppStackTypes>() {
  const navigate = useNavigation<StackNavigationProp<T>>();
  return navigate;
}

export { useNavigationHooks };
