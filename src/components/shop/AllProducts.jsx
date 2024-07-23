import { lineSpinner } from 'ldrs'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllproducts } from '../../features/user/shop/productThunks'
import ProductCard from './ProductCard'

lineSpinner.register()

const AllProducts = () => {
    const dispatch = useDispatch()
    const { products, fetching, error } = useSelector((state) => state.products)
    if (!products) dispatch(fetchAllproducts())

    if (fetching) return (
        <div className="min-w-[100vw] min-h-screen bg-white flex items-center justify-center -mt-[4rem]">
            <l-line-spinner
                className='mx-auto'
                size="40"
                stroke="3"
                speed="1"
                color="black"
            ></l-line-spinner>
        </div>
    )
    if (error) return (
        <div className="">
            {error}
        </div>
    )
    return (
        <>
            {
                products.map((product) => (
                    <div className="" key={product.productId}>
                        <ProductCard
                            id={product.$id}
                            productName={product.productName}
                            price={product.productPrice}
                            image={product.productImage}
                            description={product.productDescription}
                            rating={product.productRating}
                            stock={product.status}
                        />
                    </div>
                ))
            }
        </>
    )
}

export default AllProducts