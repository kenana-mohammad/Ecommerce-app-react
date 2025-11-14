import React from 'react'
import "./ProductCard.css"
export default function ProductCard({product}) {
  return (
       <div className=" card card-product card-header border p-3 rounded shadow">
        <div className="img-card">
      <img src={product.image} alt={product.name} className="w-full" />

        </div>
      <h2 className="font-bold">{product.name}</h2>
      <p>{product.category}</p>
      <p className="text-blue-600 font-semibold">${product.price}</p>
    </div>
  )
}
