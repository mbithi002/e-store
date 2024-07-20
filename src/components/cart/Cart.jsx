import React from 'react';
import { cartContent } from './cartContent';
const Cart = () => {
  const calculateTotal = () => {
    let total = 0;
    cartContent.forEach((item) => {
      total += Number(item.total)
    })
    return total.toFixed(2)
  }
  const cartTotal = calculateTotal()
  return (
    <>
      <div className="sm:mt-[4rem]">
        <div className="text-center text-gray-700 text-2xl font-bold my-2 pt-2">Your Cart <i class="fa-solid fa-cart-shopping"></i></div>
        <div className="container w-full h-full">
          <div className="grid grid-cols-12">
            <div className="col-span-12 sm:col-span-8">
              <table className="w-full">
                <tr className=''>
                  <th className='w-[24rem] bg-gray-100 py-2 px-2 text-start'>Product</th>
                  <th className='bg-gray-100 py-2 px-2 text-center'>Price</th>
                  <th className='bg-gray-100 py-2 px-2 text-center'>Quantity</th>
                  <th className='bg-gray-100 py-2 px-2 text-center'>Total</th>
                </tr>
                {
                  cartContent.map((item) => (
                    <tr className="w-full mx-3 shadow-lg rounded-md">
                      <td key={item.productId} className="relative hover:bg-gray-100 transition-all duration-100 cursor-pointer overflow-hidden w-[24rem] p-2 h-[8rem] flex flex-row items-start mb-1 py-2">
                        <img src={item.image} alt="image" className="max-h[inherit] w-[6rem] object-cover mr-2 hover:brightness-50 transition-all duration-200" />
                        <div className="flex flex-col pt-3 w-full h-full">
                          <p className="text-md mb-3 font-semibold">{item.name}</p>
                          <p className="text-sm">{item.description}</p>
                        </div>
                        <div className="absolute bottom-1 right-1 text-red-500 p-2">
                          <i class="text-md fa-solid fa-trash"></i>
                        </div>
                      </td>
                      <td className="hover:bg-gray-100 transition-all duration-200 cursor-pointer w-auto text-center font-semibold text-md">{item.price}</td>
                      <td className="hover:bg-gray-100 transition-all duration-200 cursor-pointer w-auto text-center font-semibold text-sm">
                        <i class="fa-solid fa-chevron-up mx-2"></i>
                        {item.quantity}
                        <i class="fa-solid fa-chevron-down mx-2"></i>
                      </td>
                      <td className="hover:bg-gray-100 transition-all duration-200 cursor-pointer w-auto text-center font-semibold text-md">{item.total}</td>
                    </tr>
                  ))
                }
              </table>
            </div>
            <div className="sm:block w-full col-span-4 bg-gray-100 px-2 pt-8">
              <div className="bg-white p-4 rounded-md shadow-md">
                <div className="flex flex-col justify-between">
                  <h2 className="text-2xl font-semibold mb-5 underline">Cart Summary</h2>
                  <p className="text-xl my-10 flex flex-row items-between"><span className="font-semibold block">Subtotal</span><span className="mx-2 text-sm font-semibolds p-2 border border-gray-400 rounded-md block">KSH: {cartTotal}</span></p>
                  <p className="mb-10">
                    <span className="text-xl font-semibold">Shipping</span>
                    <span className="text-md mx-2">Free</span>
                  </p>
                  <button className="w-full p-2 bg-green-500 active:bg-green-300 active:text-gray-500 transition-all duration-100 text-white text-xl font-semibold mt-10">Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart