import React from "react";
import ProductImg from "../components/ProductImg";
import ProductDetailCard from "../components/ProductDetailCard";

function Product() {
  return (
    <div id="product-section">
      <div className="flex flex-col lg:flex-row">
        <ProductImg />
        <ProductDetailCard />
      </div>

      <div className="flex flex-col lg:flex-row lg:flex-row-reverse">
        <ProductImg />
        <ProductDetailCard />
      </div>

      <div className="flex flex-col lg:flex-row">
        <ProductImg />
        <ProductDetailCard />
      </div>
    </div>
  );
}

export default Product;

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
