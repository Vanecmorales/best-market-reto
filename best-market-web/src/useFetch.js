// import { useState, useEffect } from "react";
// export const useFetch = (url)=>{
//     const [products, setProducts] = useState();
//     useEffect(() => {
//       fetch(url)
//         .then((response) => response.json())
//         .then((products) => setProducts(products));
//     }, []);
//     // Al colocar un array vacio se ejecutará una única vez cuando se utilice el componente
//     return {products};
// }