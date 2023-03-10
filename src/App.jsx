import { ContainerApp } from "./App-styled";
import { Main, Navbar } from "./Components";

function App() {
  return (
    <ContainerApp className="app">
      <Navbar />
      <Main />
    </ContainerApp>
  );
}

export default App;
