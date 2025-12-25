import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";
import { getProducts } from "../services/productService";

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getProducts(categoryId)
      .then((data) => setItems(data))
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <main className="item-list-container">
      {greeting && !categoryId && <h1>{greeting}</h1>}

      {loading ? (
        <p>Cargando productos...</p>
      ) : items.length === 0 ? (
        <p>No hay productos para esta categoría.</p>
      ) : (
        <ItemList items={items} />
      )}
    </main>
  );
};

export default ItemListContainer;
