import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "./index.css";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a Full Combat - Tactical Airsoft Store" />
    </>
  );
}

export default App;
