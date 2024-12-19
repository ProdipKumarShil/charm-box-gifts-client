import React from 'react'
import ProductCard from '../components/ProductCard'

const ProductsPage: React.FC = () => {
  return (
    <div className='grid grid-cols-3'>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />

    </div>
  )
}

export default ProductsPage