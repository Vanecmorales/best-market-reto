import { useState, useEffect } from "react";
import AddToCarButton from "./AddToCarButton";

const ProductList = () => {
  const [items, setItems] = useState([]);

  const getProducts = async () => {
    const url = await fetch("https://dummyjson.com/products");
    const data = await url.json();
    // console.log(data.products);
    setItems(data.products);
  };

  useEffect(() => {
    getProducts();
  }, []); // Al colocar un array vacio se ejecutará una única vez cuando se utilice el componente

  return (
    <>
      {items.map((item) => (
        <div className="singleProductContainer" key={item.id}>
          <h2 className="itemTitle">{item.title}</h2>
          <img src={item.images[0]} className="itemImage" alt="" />
          <p className="itemDescription">{item.description}</p>
          <p className="itemPrice">${item.price}</p>
          <AddToCarButton />
        </div>
      ))}
    </>
  );
};

export default ProductList;
