import React from "react";
import ProductCard from "./ProductCard";
import { Mylink } from "../exports";

function ClubProducts(props) {
  const SlicedProducts = props.gymProducts.slice(0, 3);
  console.log(SlicedProducts,"sliced")
  return (
    <div className="ClubProducts">
      <div className="ClubTitle-btn">
        <a>Club {props.gymProducts[0].gym_name} produits</a>
        <Mylink to={"/Clubstore/"+props.ClubId}>
          <div className="seeAllProductsBTN">Voir Tout</div>
        </Mylink>
      </div>
      <div className="ProductsCardContainer">
        {SlicedProducts.map((product) => (
        
          <ProductCard
            Id={product.id}
            name={product.name}
            price={product.price + " Mad"}
            img={
              "http://localhost:8000/images/productImgs/" + product.images[0]
            }
          />
        ))}
      </div>
    </div>
  );
}

export default ClubProducts;
