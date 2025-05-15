import React from "react";
import ProductImg from "../components/ProductImg";
import ProductDetailCard from "../components/ProductDetailCard";

function Product() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row">
        <ProductImg />
        <ProductDetailCard />
      </div>

      <div className="flex flex-col lg:flex-row">
        <ProductDetailCard />
        <ProductImg />
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
//       <div className=" flex flex-col lg:flex-row ">
//         <ProductImg />
//         <ProductDetailCard />
//       </div>

//       <div className="flex flex-col lg:flex-row ">
//         <ProductDetailCard />
//         <ProductImg />
        
//       </div>

//       <div className="flex flex-col lg:flex-row ">
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
//       <div className="flex">
//         <ProductImg />
//         <ProductDetailCard />
//       </div>
//       <div className="flex">
//         <ProductDetailCard />
//         <ProductImg />
//       </div>
//       <div className="flex">
//         <ProductImg />
//         <ProductDetailCard />
//       </div>
//     </div>
//   );
// }

// export default Product;
