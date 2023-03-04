import Form from "./components/Form";
import ContratoCartaoContextProvider from "./components/Form/Context/ContratoCartaoContext";
import ContratoRccContextProvider from "./components/Form/Context/ContratoRccContext";
import ContratoEmprestimoContextProvider from "./components/Form/Context/ContratosEmprestimoContext";

function App() {
  return (
    <ContratoRccContextProvider>
      <ContratoCartaoContextProvider>
        <ContratoEmprestimoContextProvider>
          <Form />
        </ContratoEmprestimoContextProvider>
      </ContratoCartaoContextProvider>
    </ContratoRccContextProvider>
  );
}

export default App;
