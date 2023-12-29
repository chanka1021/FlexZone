import React from 'react'

function SoldProducts() {

    const soldProducts = [
        {
            PorductName: "John Doe",
            ProductImage: "https://placekitten.com/50/50", // Replace with actual image URL
            quantity: 3,
            total : 300,
            buyer: "cristiano ronaldo"
        },
        {
            PorductName: "John Doe",
            ProductImage: "https://placekitten.com/50/50", // Replace with actual image URL
            quantity: 1,
            total : 20,
            buyer: "cristiano ronaldo"
        },
             ]

  return (
    <div className='GymProductsContainer'>
    <span>
        <h1>Produits Vendu</h1>
    </span>

    <table className="products-table">
        <thead>
            <tr>
                <th>Image</th>
                <th>Nom</th>
                <th>quantity</th>
                <th>total</th>
                <th>buyer</th>
            </tr>
        </thead>
        <tbody>
            {soldProducts.map((sp, index) => (
                <tr key={index} className="product-row">
                    <td><img src={sp.ProductImage} alt={`${sp.PorductName}'s picture`} className="product-image" /></td>
                    <td>{sp.PorductName}</td>
                    <td>{sp.quantity}</td>
                    <td>{sp.total}</td>
                    <td>{sp.buyer}</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>
  )
}

export default SoldProducts