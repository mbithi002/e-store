import React from 'react'

function ProductCard({ image = 'image', name = 'product', description = '', price = 0, rating = 0, stock = 'in stock' }) {
  return (
    <div className="container h-[23rem] w-[14rem] bg-white text-gray-700 m-5 mx-auto rounded-md">
      <div className="h-[15rem] w-full relative">
        <img src={image} alt={image} className="object-cover w-full h-[inherit]" />
        <p className="text-sm absolute bottom-1 right-1 text-white bg-black p-1">{stock}</p>
        <p className="text-sm absolute top-1 left-1 text-white bg-black p-1 leading-3">Ksh: <span className="font-bold">{price}</span></p>
      </div>
      <div className="h-[8rem] text-gray-700 px-2 flex flex-col justify-between">
        <div className="flex flex-row items-center justify-between my-1">
          <p className="text-md font-bold underline">{name}</p>
          <div className="rating bg-yellow-300 min-w-[5rem] px-2 rounded-md text-center">{rating} star</div>
        </div>
        <p className="text-sm font-semibold text-gray-500 -mt-5 h-[3.5rem] pt-2">{description}</p>
        <button className="bg-gray-300 p-1 w-full mb-2 active:bg-gray-100 transition-all duration-200">Add to cart</button>
      </div>
    </div>
  )
}

export default ProductCard