import React from 'react'
import  './productList.css';
import ProductCard from '../ProductCard/ProductCard';
import NotFound from '../SheardComponents/NotFound';
export default function ProductList({products}) {

  return (
    <div className="section-products ">
        {
          
            products.map((product,i)=>{

                return(
        <ProductCard key={product.id || index} product={product} />
                )
            })
        }
    </div>
  )
}
