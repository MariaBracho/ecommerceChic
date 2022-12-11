import ThemeContainer from "./containers/ThemeContainer";
import Navigation from "./navigation";
import { componentType } from "./utils/types/GeneralTypes";

function App(): componentType {
  return (
    <ThemeContainer>
      <Navigation />
    </ThemeContainer>
  );
}

export default App;
