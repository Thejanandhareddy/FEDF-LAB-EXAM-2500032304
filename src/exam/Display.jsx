import React, { useState } from 'react'

export default function Display() {
  const [products] = useState(() => JSON.parse(localStorage.getItem('products') || '[]'))

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Product List</h2>
      {products.length === 0 ? (
        <p className="text-center text-gray-500">No products added yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Description</th>
                <th className="px-4 py-2 text-left">Price</th>
                <th className="px-4 py-2 text-left">Quantity</th>
                <th className="px-4 py-2 text-left">Category</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, index) => (
                <tr
                  key={index}
                  className="odd:bg-gray-50 even:bg-white hover:bg-blue-50 transition-colors"
                >
                  <td className="px-4 py-2 border">{p.name}</td>
                  <td className="px-4 py-2 border">{p.description}</td>
                  <td className="px-4 py-2 border">{p.price}</td>
                  <td className="px-4 py-2 border">{p.quantity}</td>
                  <td className="px-4 py-2 border">{p.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}