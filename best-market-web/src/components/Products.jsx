import { useState, useEffect } from "react";

const ProductList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getProducts();
  }, []); // Al colocar un array vacio se ejecutará una única vez cuando se utilice el componente

  const getProducts = async () => {
    const data = await fetch("https://dummyjson.com/products");
    const products = await data.json();
    console.log(products)
    setItems(products);
  };

  return (
    <div>
      <h2>Aquí van los productos</h2>
    </div>
  );
};

export default ProductList;

// import React from 'react';

// class ProductList extends React.Component {
//   state = {
//     products: []
//   };

//   componentDidMount() {
//     fetch('https://dummyjson.com/products')
//       .then(response => response.json())
//       .then(data => this.setState({ products: data }));
//   }

//   render() {
//     return (
//       <div>
//         <h1>Productos</h1>
//         {this.state.products.map(product => (
//           <div key={product.id}>
//             <h2>{product.name}</h2>
//             <p>{product.description}</p>
//             <p>Precio: {product.price}</p>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// export default ProductList;