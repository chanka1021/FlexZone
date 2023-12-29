import React from 'react'
import '../styles/GymProducts.css'
import { useState } from 'react';
import ProductCA from '../ProductCA';


function GymProducts() {


    const products = [
        {
            name: "John Doe",
            image: "https://placekitten.com/50/50", // Replace with actual image URL
            price: "222",
            leftDuration: "30 days"
        }]


    const [searchNom, setSearchNom] = useState('');
    const [showProductForm, setShowProductForm] = useState(false);
    const handleAddProductClick = () => {
        setShowProductForm(true);
    };

    const handleProductFormClose = () => {
        setShowProductForm(false);
    };
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchNom.toLowerCase())
    );
    return (
        <div className='GymProductsContainer'>
            <span>
                <h1>Produits de Club</h1>
                <div>
                    rechereche :       <input
                        type="text"
                        placeholder="Rechercher par nom"
                        value={searchNom}
                        onChange={(e) => setSearchNom(e.target.value)}
                        className="search-input"
                    /> <div className='addProduct' onClick={handleAddProductClick}>Ajouter un produit</div>

                </div>

            </span>

            <table className="products-table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Nom</th>
                        <th>Prix</th>
                        <th>Editer</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts.map((produit, index) => (
                        <tr key={index} className="product-row">
                            <td><img src={produit.image} alt={`${produit.name}'s picture`} className="product-image" /></td>
                            <td>{produit.name}</td>
                            <td>{produit.price}</td>
                            <td> <p className='ProductEditBtn'>Editer</p></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {showProductForm && <ProductCA onClose={handleProductFormClose} />}
        </div>
    );
}

export default GymProducts