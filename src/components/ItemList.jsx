import ItemCard from "./ItemCard";

const ItemList = ({ items }) => {
  return (
    <section className="products-grid">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </section>
  );
};

export default ItemList;
