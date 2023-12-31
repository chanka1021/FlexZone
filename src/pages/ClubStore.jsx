import React from 'react'
import GlobaleTitle from "../components/GlobaleTitle";
import ProductCard from '../components/ProductCard';

function ClubStore() {
    return (
        <>
            <GlobaleTitle t1="Nos Produits" t2="Club xxxxx" center={true} />
            <div className='ProductsContainer'>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>

            </div>
        </>
    )
}

export default ClubStore