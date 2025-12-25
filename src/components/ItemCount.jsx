import { useState } from "react";

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const dec = () => setCount((c) => Math.max(1, c - 1));
  const inc = () => setCount((c) => Math.min(stock || 1, c + 1));

  return (
    <div className="itemcount">
      <div className="itemcount-controls">
        <button onClick={dec} disabled={count <= 1}>
          -
        </button>
        <span>{count}</span>
        <button onClick={inc} disabled={stock === 0 || count >= stock}>
          +
        </button>
      </div>

      <button
        className="itemcount-add"
        onClick={() => onAdd?.(count)}
        disabled={stock === 0}
      >
        Agregar
      </button>

      {stock === 0 && <p className="itemcount-nostock">Sin stock</p>}
    </div>
  );
};

export default ItemCount;
