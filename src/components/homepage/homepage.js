import React from 'react'
import CustomerShoppingCartDetailsArea from '../customer-shopping-cart-details-area/customer-shopping-cart-details-area'
import AllProductsArea from '../all-products-area/all-products-area'

function Homepage() {
  return (
    <div className='flex px-9'>
        {/* Customer order details area */}
        <CustomerShoppingCartDetailsArea/>

        {/*products area starts */}
        <AllProductsArea/>
    </div>
  )
}

export default Homepage