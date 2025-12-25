import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  return (
    <article className="product-card">
      <h3 className="product-title">{item.title}</h3>
      <p className="product-price">${item.price.toLocaleString("es-AR")}</p>
      <Link className="product-link" to={`/item/${item.id}`}>
        Ver detalle
      </Link>
    </article>
  );
};

export default ItemCard;
