import React from 'react'

function SubsHistory() {

    const subs = [
        {
            name: "John Doe",
            image: "https://placekitten.com/50/50", // Replace with actual image URL
            plan: "premium",
            date :'08/01/2022',
            type: "nouvel abonnement"
        },
        {
            name: "John Doe",
            image: "https://placekitten.com/50/50", // Replace with actual image URL
            plan: "basic",
            date :'08/01/2022',
            type: "renommée"
        },
             ]

  return (
    <div className='GymProductsContainer'>
    <span>
        <h1>abonnements de club</h1>
    </span>

    <table className="products-table">
        <thead>
            <tr>
                <th>Image</th>
                <th>Nom</th>
                <th>Plan</th>
                <th>Date</th>
                <th>Type</th>
            </tr>
        </thead>
        <tbody>
            {subs.map((sub, index) => (
                <tr key={index} className="product-row">
                    <td><img src={sub.image} alt={`${sub.name}'s picture`} className="product-image" /></td>
                    <td>{sub.name}</td>
                    <td>{sub.plan}</td>
                    <td>{sub.date}</td>
                    <td>{sub.type}</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>
  )
}

export default SubsHistory