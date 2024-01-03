import React, { useEffect, useState } from "react";
import "../components/styles/Product.css";
import img from "../assets/gym.jpg";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { Mylink } from "../exports";

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

  const Container = styled.div`
    padding: 0 150px;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    @media (max-width: 480px) {
      padding: 0 5px;
    }
  `;
  const Row = styled.div`
    display: flex;
    justify-content: space-between;
  `;
  const Img = styled.img`
    height: 50vh;
    width: 50vh;
    object-fit: cover;
    border-radius: 15px;
  `;
  const Infos = styled.div`
    width: 50%;
  `;
  const Name = styled.p`
    font-weight: bold;
    font-size: 48px;
  `;

  const Type = styled.p`
    color: #4d94f1;
  `;
  const From = styled.p`
    color: black;
    && a {
      color: #92f82c;
      font-weight: bold;
    }
  `;
  const Price = styled.p`
      color: #2d5a00;
      font-weight : bold;
      font-size: 28px;
  `;
  return (
    <Container>
      <Row>
        <Img src={img} alt={product.name} />
        <Infos>
          <Name>{product.name}</Name>
          <Type>{product.type}</Type>
          <From>
            de Club :{" "}
            <Mylink to={"/club/" + product.gym_id}>
              <a>{product.gym_name}</a>
            </Mylink>
          </From>
          <Price>{parseInt(product.price)} MAD</Price>
        </Infos>
      </Row>

      <div className="product-desc">{product.description}</div>
      <div className="BuyThis">Acheter maintenant</div>
    </Container>
  );
}

export default Product;
