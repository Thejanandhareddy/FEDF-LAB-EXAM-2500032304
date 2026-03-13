import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddProduct() {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    quantity: '',
    category: ''
  })
  const navigate = useNavigate()

  const handleChange = e => {
    const { name, value } = e.target
    setProduct(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    const stored = JSON.parse(localStorage.getItem('products') || '[]')
    stored.push(product)
    localStorage.setItem('products', JSON.stringify(stored))
    navigate('/display')
  }

  return (
    <div className="add-product">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            name="name"
            value={product.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            name="description"
            value={product.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            name="price"
            type="number"
            step="0.01"
            value={product.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Quantity:</label>
          <input
            name="quantity"
            type="number"
            value={product.quantity}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            name="category"
            value={product.category}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save Product</button>
      </form>
    </div>
  )
}
