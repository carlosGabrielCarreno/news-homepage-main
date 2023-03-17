import { ContainerApp } from "./App-styled";
import { Main, Navbar } from "./Components";
import { ProviderData } from "./Components/Context/ProviderData";

function App() {
  return (
    <ProviderData>
      <ContainerApp className="app">
        <Navbar />
        <Main />
      </ContainerApp>
    </ProviderData>
  );
}

export default App;
