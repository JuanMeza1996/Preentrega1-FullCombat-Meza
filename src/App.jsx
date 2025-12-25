import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import "./index.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <ItemListContainer greeting="Bienvenido a Full Combat - Tactical Airsoft Store" />
          }
        />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route
          path="*"
          element={
            <main className="item-list-container">
              <h1>404</h1>
              <p>La página que buscás no existe.</p>
            </main>
          }
        />
      </Routes>
    </>
  );
}

export default App;
