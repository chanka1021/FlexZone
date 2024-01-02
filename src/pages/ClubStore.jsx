import React, { useEffect, useState } from 'react'
import GlobaleTitle from "../components/GlobaleTitle";
import ProductCard from '../components/ProductCard';
import { useParams } from 'react-router-dom';
import axios from 'axios';


function ClubStore() {
    const { id } = useParams();

    const [GymProducts,setProducts] = useState([]);

    useEffect(()=>{
        const FetchData = () => {
            axios.get('/product').then((response) => {
                setProducts(response.data.data)
                });
          };
            FetchData(); 
    },[])

    const filtred = GymProducts.filter(i => i.gym_id==id)

    console.log(filtred,"filtred")
    return (
        <>
            <GlobaleTitle t1="Nos Produits" t2={"Club " + filtred[0]?.gym_name} center={true} />
            <div className='ProductsContainer'>

                {filtred.map((product =>{
                    return <ProductCard 
                    Id={product.id} 
                    name={product.name}
                    price={product.price + " Mad"}
                    img={
                      "http://localhost:8000/images/productImgs/" + product.images[0]
                    }/>
                }))}
            </div>
        </>
    )
}

export default ClubStore