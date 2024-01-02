import React, { useEffect, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import img from "../assets/banner3.jpg";
import "../components/styles/Store.css";
import ClubProducts from "../components/ClubProducts";
import axios from "axios";

function Store() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios.get("/product").then((response) => {
        setProducts(response.data.data);
        console.log(response.data);
      });
    };

    fetchData();
  }, []);

  // Organize products by gym
  const productsByGym = products.reduce((acc, product) => {
   
    const gymId = product.gym_id;
   // const Gym_name = product.gym_name;
    if (!acc[gymId]) {
      acc[gymId] = [];
    }
    acc[gymId].push(product);

    return acc;
  }, {});
  console.log(productsByGym)

  return (
    <>
      <SectionTitle title="E-botique" img={img} />
      <div className="StoreContainer">
        {Object.entries(productsByGym).map(([gymId, gymProducts]) => (
          <ClubProducts key={gymId} ClubId={gymId} gymProducts={gymProducts}  />
          
        ))}
      </div>
    </>
  );
}

export default Store;
