import React from "react";
import ProductImg from "../components/ProductImg";
import ProductDetailCard from "../components/ProductDetailCard";
import { products } from "../constants"; 

function Product() {
  return (
    <div id="product-section">
      {products.map((item, index) => (
        <div
          key={item.id}
          className={`flex flex-col ${
            index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
        >
          <ProductImg />
          <ProductDetailCard
            title={item.title}
            content={item.content}
            price={item.price}
            oldPrice={item.oldPrice}
            weight={item.weight}
          />
        </div>
      ))}
    </div>
  );
}

export default Product;

// import React from "react";
// import ProductImg from "../components/ProductImg";
// import ProductDetailCard from "../components/ProductDetailCard";

// function Product() {
//   return (
//     <div id="product-section">
//       <div className="flex flex-col lg:flex-row">
//         <ProductImg />
//         <ProductDetailCard />
//       </div>

//       <div className="flex flex-col lg:flex-row lg:flex-row-reverse">
//         <ProductImg />
//         <ProductDetailCard />
//       </div>

//       <div className="flex flex-col lg:flex-row">
//         <ProductImg />
//         <ProductDetailCard />
//       </div>
//     </div>
//   );
// }

// export default Product;

// import React from "react";
// import ProductImg from "../components/ProductImg";
// import ProductDetailCard from "../components/ProductDetailCard";

// function Product() {
//   return (
//     <div>
//       <div className="flex flex-col lg:flex-row">
//         <ProductImg />
//         <ProductDetailCard />
//       </div>

//       <div className="flex flex-col lg:flex-row lg:flex-row-reverse" >
        
//         <ProductImg />
//         <ProductDetailCard />
        
//       </div>

//       <div className="flex flex-col lg:flex-row">
//         <ProductImg />
//         <ProductDetailCard />
//       </div>
//     </div>
//   );
// }

// export default Product;
