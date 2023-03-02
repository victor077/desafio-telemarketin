import Form from "./components/Form";
import ContratosContextProvider from "./components/Form/Context/ContratosContext";

function App() {
  return (
    <ContratosContextProvider>
      <Form />
    </ContratosContextProvider>
  );
}

export default App;
