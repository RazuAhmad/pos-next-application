import React from 'react'
import ProductSearchBar from './product-searchbar'
import ProductCategoryArea from './product-category-area'

function AllProductsArea() {
  return (
    <div className='border-r-2 border-gray-400 flex-[1.8] '>
      <ProductSearchBar/>
      <ProductCategoryArea/>

    </div>
  )
}

export default AllProductsArea