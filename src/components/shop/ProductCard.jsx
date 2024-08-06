import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../features/user/cart/cartUtils';
import { checkoutProduct } from '../../features/user/checkout/checkoutSlice';
import ReadOnlyRating from './ReadOnlyRating';

function ProductCard({ id, image = 'image', productName = '', description = '', price = 0, rating = 0, stock = '', inActive = false, isNew = false }) {
  const productId = id;
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { status, userData } = useSelector((state) => state.auth);

  const goToProductPage = (productId) => {
    // navigate('/')
    navigate(`/product/${productId}`)
  }
  const handleAddToCart = (productId) => {
    addToCart(productId)
  }

  const handleCheckout = (productId) => {
    if (!status) navigate('/signup')
    dispatch(checkoutProduct(productId))
    navigate('/checkout')
  }


  return (
    <div className={` ${inActive && 'pointer-events-none'} card sm:w-[190px] w-[178px] sm:my-2 my-4 h-[340px] sm:h-[340px] m-2 bg-[#f5f5f5] relative overflow-visible mx-auto sm:shadow-md shadow-xl`}>
      <div className="card-img bg-gray-200 h-[60%] w-full rounded-md transition-all duration-300 ease-in-out relative">
        <img src={String(image)} alt={image} className="object-cover w-full h-full rounded-md hover:brightness-[70%] transition-all duration-300 ease-in-out cursor-pointer" />
        <p className="text-sm absolute -top-2 -left-2 p-1 bg-white rounded-sm">Ksh: <span className="font-bold">{price}</span></p>
        {isNew && (
          <div className="absolute top-2 right-2 h-8 w-8 flex items-center justify-center rounded-full bg-black text-white text-xs">
            New
          </div>
        )}
      </div>
      <div onClick={() => handleAddToCart(productId)} className="absolute bottom-[40%] left-1 card-button border border-[#252525] flex p-1 cursor-pointer rounded-full transition-all duration-300 ease-in-out bg-gray-100">
        <svg className="svg-icon w-5 h-5" viewBox="0 0 20 20">
          <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
          <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
          <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
        </svg>
      </div>
      <flex className="flex-col items-start cursor-pointer">
        <div className="card-info pt-[5%] px-2">
          <p className="font-semibold text-md leading-6 mb-1">{String(productName).length > 19 ? `${String(productName).slice(0, 19)}...` : String(productName)}</p>
          <p className="sm:text-sm text-xs">
            {
              description.length > 20 ? `${description.slice(0, 60)}...` : description
            }
          </p>
        </div>
        <div className="shadow-lg bg-white p-2 rounded-md card-footer w-full flex justify-between items-center pt-2.5 border-t border-[#ddd] gap-2 absolute bottom-0 mr-3 ">
          <button onClick={() => handleCheckout(id)} className="bg-black text-white text-sm py-1 px-2 rounded-md">Buy Now</button>
          <div className="flex flex-col items-start w-1/2">
            <ReadOnlyRating rating={rating} />
          </div>
        </div>
      </flex>
    </div>
  )
}

export default ProductCard
