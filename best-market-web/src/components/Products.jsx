import { useState, useEffect } from "react";

const ProductList = () => {
  const [items, setItems] = useState([]);

  const getProducts = async () => {
    const url = await fetch("https://dummyjson.com/products");
    const data = await url.json();
    console.log(data.products);
    setItems(data.products);
  };

  useEffect(() => {
    getProducts();
  }, []); // Al colocar un array vacio se ejecutará una única vez cuando se utilice el componente

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
