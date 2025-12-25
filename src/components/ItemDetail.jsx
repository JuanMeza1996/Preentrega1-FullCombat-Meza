import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const handleAdd = (qty) => {
    // En próximas entregas esto irá al carrito.
    alert(`Agregaste ${qty} unidad(es) de ${item.title}`);
  };

  return (
    <main className="item-detail">
      <h1 className="item-detail-title">{item.title}</h1>
      <p className="item-detail-desc">{item.description}</p>
      <p className="item-detail-price">${item.price.toLocaleString("es-AR")}</p>

      <ItemCount stock={item.stock} initial={1} onAdd={handleAdd} />
    </main>
  );
};

export default ItemDetail;
