import React from "react";
import DemoProductImg from "../components/DemoProductImg";
import DemoProductDetailCard from "../components/DemoProductDetailCard";
import { products } from "../constants";

function DemoProduct() {
  return (
    <div id="product-section">
      {products.map((item, index) => (
        <div
          key={index}
          className="flex flex-row w-full flex-wrap max-w-[1200px] mx-auto mb-10"
        >
          <DemoProductImg />
          <DemoProductDetailCard
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

export default DemoProduct;



// import React from "react";
// import DemoProductImg from "../components/DemoProductImg";
// import DemoProductDetailCard from "../components/DemoProductDetailCard";
// import { products } from "../constants"; 

// function DemoProduct() {
//   return (
//     <div id="product-section">
//       {products.map((item, index) => (
//         <div className="flex flex-row"
//         >
//           <DemoProductImg />
//           <DemoProductDetailCard
//             title={item.title}
//             content={item.content}
//             price={item.price}
//             oldPrice={item.oldPrice}
//             weight={item.weight}
//           />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default DemoProduct;
