import React, { useEffect, useState } from "react";
import "../components/styles/Product.css";
import img from "../assets/gym.jpg";
import { useParams } from "react-router-dom";
import axios from "axios";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!id) {
      return;
    }
    try {
      axios.get(`/product/${id}`).then((response) => {
        if (response.status === 200) {
          setProduct(response.data.data);
        } else {
          alert("Something went wrong");
        }
        console.log(response);
      });
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  console.log(product);

  // Check if product is null before trying to access its properties
  if (!product) {
    return <div>Loading...</div>; // You can show a loading indicator or handle this case in another way
  }

  return (
    <div className="ProductContainer">
      <div className="img-infos">
        <img src={img} alt={product.name} />
        <div className="productInfos">
          <h2>{product.name}</h2>
          <p>{product.type}</p>
          <p>from: {product.gym_name}</p>
          <p>{parseInt(product.price)} MAD</p>
        </div>
      </div>

      <div className="product-desc">{product.description}</div>
      <div className="BuyThis">Acheter maintenant</div>
    </div>
  );
}

export default Product;
