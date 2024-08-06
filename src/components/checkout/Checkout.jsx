import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import useAddresses from '../../hooks/useAddresses'
import useAllProducts from '../../hooks/useAllProducts'

const Checkout = () => {
    const { userData } = useSelector((state) => state.auth)
    const { products: allProducts, fetching: productsFetching, error: productsError } = useAllProducts()
    const { products: productIds, fetching, error } = useSelector((state) => state.checkout)
    const { defaultAddress, fetching: defAdfetching, error: defAddeError } = useAddresses({ userData })
    const [products, setProducts] = useState([])

    useEffect(() => {
        // const getAddress = async () => {
        //     const add = await userConfig.getDefaultAddress(userData.$id)
        //     if (!add) {
        //         setDefAdd(add)
        //     } else {

        //     }
        //     console.log(defAdd);
        // }
        // getAddress()
        const prods = allProducts.filter((product) => productIds.includes(product.$id))
        setProducts(prods)
    }, [allProducts])

    if (productsFetching) return (
        <div className="">loading</div>
    )
    if (productsError) return (
        <div className="">Error</div>
    )

    return (
        <div className="container mt-[5rem]">
            <div className="p-6 mx-auto bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-6">Checkout</h1>

                <div className="grid sm:grid-cols-3 gap-5">
                    <div className="w-full shadow-lg p-3">
                        <h2 className="text-xl font-semibold">Shipping Information</h2>
                        <button className="text-blue-500 underline">Edit</button>
                        <div className="flex flex-col text-black">
                            <p className="">Name: {defaultAddress.name}</p>
                            <p className="">Phone: {defaultAddress.phone}</p>
                            <p className="">County: {defaultAddress.county}</p>
                            <p className="">Town: {defaultAddress.town}</p>
                            <p className="">Location: {defaultAddress.location}</p>
                        </div>
                    </div>

                    <div className="w-full shadow-lg p-3">
                        <h2 className="text-xl font-semibold">Payment Method</h2>
                        <p>(Trusted Payment, 100% Money Back Guarantee)</p>
                        <p>Cards, M-PESA, Bank Transfer or Mobile Money</p>
                    </div>

                    <div className="w-full shadow-lg p-3">
                        <h2 className="text-xl font-semibold">Summary</h2>
                        <p>Discount</p>
                        <p>6 Coins To Be Redeemed</p>
                        <p>Product Voucher Used</p>
                        <p>Select</p>
                        <p>Free Shipping Event - KSh 0</p>
                        <p>7DAYS Money Back Guarantee</p>
                        {/* <p>Product Amount: KSh {product.productPrice}</p> */}
                        <p>Shipping Fee: + KSh </p>
                        <p>Shipping Discount: - KSh 0</p>
                        {/* <p className="font-bold">Payment Amount: KSh {product.productPrice}</p> */}
                    </div>
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold">Product List</h2>
                    <div className='flex flex-row flex-wrap'>
                        {
                            products.map((product) => (
                                <div key={product.$id} className="">
                                    <div className="flex flex-col h-[17rem] w-[12rem] p-2 shadow-lg">
                                        <div className="h-[80%]">
                                            <img src={product.productImage} alt="" className='object-cover h-full w-full' />
                                        </div>
                                        <div className="h-[20%] flex flex-row justify-between items-center">
                                            <p className="text-lg font-semibold text-black">{product.productName}</p>
                                            <p className="text-lg text-black">Ksh: {product.productPrice}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <button className="bg-blue-500 text-white p-2 rounded">Place Order</button>
            </div>
        </div>
    )
}

export default Checkout