import React, { useState } from 'react'

export default function Display() {
  const [products] = useState(() => JSON.parse(localStorage.getItem('products') || '[]'))

  return (
    <div className="display-products">
      <h2>Product List</h2>
      {products.length === 0 ? (
        <p>No products added yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, idx) => (
              <tr key={idx}>
                <td>{p.name}</td>
                <td>{p.description}</td>
                <td>{p.price}</td>
                <td>{p.quantity}</td>
                <td>{p.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
