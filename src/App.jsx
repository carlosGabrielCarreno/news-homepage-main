import { ContainerApp } from "./App-styled";
import { Main, Navbar } from "./Components";
import { Provider } from "./Components/Context/Provider";

function App() {
  return (
    <Provider>
      <ContainerApp className="app">
        <Navbar />
        <Main />
      </ContainerApp>
    </Provider>
  );
}

export default App;
