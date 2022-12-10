import ThemeContainer from "./containers/ThemeContainer";
import Navigation from "./navigation";
import { componentType } from "@shared/types/GeneralTypes";

function App(): componentType {
  return (
    <ThemeContainer>
      <Navigation />
    </ThemeContainer>
  );
}

export default App;
