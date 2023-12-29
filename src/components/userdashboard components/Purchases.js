import React from 'react'

function Purchases() {



    // 
    const soldProducts = [
        {
            //PorductName = product name or gym subscription period ex; 2 mois abo 
            PorductName: "John Doe",
            total: 300,
            from: 'club 1',
            type: "product"
        },
        {
            PorductName: "John Doe",
            total: 300,
            from: 'club 1',
            type: "subsription"
        },
    ]





    return (
        <div className='GymProductsContainer'>
            <span>
                <h1>votre achats</h1>
            </span>

            <table className="products-table">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>total</th>
                        <th>de</th>
                        <th>type</th>
                    </tr>
                </thead>
                <tbody>
                    {soldProducts.map((sp, index) => (
                        <tr key={index} className="product-row">
                            <td>{sp.PorductName}</td>
                            <td>{sp.total}</td>
                            <td>{sp.from}</td>
                            <td>{sp.type}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Purchases