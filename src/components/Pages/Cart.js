import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import store from '../../utils/store'
import SearchContent from './SearchPage/SearchContent'
import FoodItem from './CartFoodItem'
import { clearCart } from '../../utils/cartSlice'
import { Link } from 'react-router-dom'
import EmptyCart from './EmptyCart/EmptyCart'

//import { UseSelector } from 'react-redux/es/hooks/useSelector'
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);


  const dispatch = useDispatch()
  const handleClearCart = () => {
    dispatch(clearCart());
  }

  //  const store=useSelector((store)=>store)
  return (cartItems.length === 0) ? <EmptyCart /> : (
    <>

      <div class="container mx-auto mt-10 p-4 bg-white ">
        <div class="flex flex-wrap shadow-xl my-10 basis-10 bg-gray-100">


          <div class="md:w-3/4 sm:[100%]  px-10 py-10 bg-gray-100">
            <div class="flex justify-between border-b pb-8">
              <h1 class="font-semibold text-2xl">Shopping Cart</h1>
              <h2 class="font-semibold text-2xl">{cartItems.length} Items</h2>
            </div>
            <div class="flex mt-10 mb-5">
              <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
              <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
              <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
              <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
            </div>
            {
              cartItems.map((item) => <FoodItem {...item?.card?.info} />)
            }
            <Link to="/" class="flex font-semibold text-indigo-600 text-sm mt-10">
              <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
              Continue Shopping
            </Link>
          </div>







          <div id="summary" class="md:w-1/4 sm:w-[100%] px-8 py-10 mt-2">
            <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
            <div class="flex justify-between mt-10 mb-5">
              <span class="font-semibold text-sm uppercase">Items {cartItems.length}</span>
              <span class="font-semibold text-sm"></span>
            </div>
            <div>
              <label class="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
              <select class="block p-2 text-gray-600 w-full text-sm">
                <option>Standard shipping - 20.00</option>
              </select>
            </div>
            <div class="border-t mt-8">
              <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span></span>
              </div>
              <button onClick={() => handleClearCart()} class="mb-4 bg-red-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Clear Cart</button>
              <button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
            </div>
          </div>



        </div>
      </div>
    </>
  )
}

export default Cart
