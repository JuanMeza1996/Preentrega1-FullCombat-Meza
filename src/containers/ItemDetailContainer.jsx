import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/productService";
import ItemDetail from "../components/ItemDetail";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getProductById(itemId)
      .then((data) => setItem(data || null))
      .finally(() => setLoading(false));
  }, [itemId]);

  if (loading) {
    return (
      <main className="item-list-container">
        <p>Cargando detalle...</p>
      </main>
    );
  }

  if (!item) {
    return (
      <main className="item-list-container">
        <h1>Producto no encontrado</h1>
        <p>El itemId no existe.</p>
      </main>
    );
  }

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
