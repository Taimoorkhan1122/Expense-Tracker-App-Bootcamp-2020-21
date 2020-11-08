import { GlobalProvider } from "./Context/GlobalContext";
import { Header } from "./components/Header";
import { Container } from "./components/Container";

function App() {
  return (
    <GlobalProvider>
      <div className="main">
        <Header />
        <Container />
      </div>
    </GlobalProvider>
  );
}

export default App;
