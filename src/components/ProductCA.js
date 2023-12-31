
import React, { useState } from 'react';
import '../components/styles/ProductCA.css'

const ProductCA = ({ onClose }) => {
    const [product, setProduct] = useState({
        image: '',
        name: '',
        info: '',
        price: '',
        description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
    };

    const handleImageUpload = (e) => {
        // image upload
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit
        console.log('Product submitted:', product);
    };

    return (
        <div className="product-form-container">
            <button className="close-btn" onClick={onClose}>
                x
            </button>
            <form onSubmit={handleSubmit}>
                <label>
                    Images de produit:
                    <input type="file" accept="image/*" onChange={handleImageUpload} />
                </label>

                <label>
                    Nom de produit:
                    <input type="text" name="name" value={product.name} onChange={handleChange} />
                </label>

                <label>
                    Infos:
                    <input type="text" name="info" value={product.info} onChange={handleChange} />
                </label>

                <label>
                    Prix:
                    <input type="text" name="price" value={product.price} onChange={handleChange} />
                </label>

                <label>
                    Description de produit:
                    <textarea
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                    ></textarea>
                </label>
                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
};

export default ProductCA;
