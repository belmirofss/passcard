import { useAppContext } from "./hooks/useAppContext";
import { LoggedPinStackNavigation } from "./navigation/LoggedPinStackNavigation";
import { WithPinStackNavigation } from "./navigation/WithPinStackNavigation";
import { WithoutPinStackNavigation } from "./navigation/WithoutPinStackNavigation";

export const Routes = () => {
  const { pin, logged } = useAppContext();

  if (pin && logged) {
    return <LoggedPinStackNavigation />;
  }

  if (pin && !logged) {
    return <WithPinStackNavigation />;
  }

  return <WithoutPinStackNavigation />;
};
