import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useAddresses from '../../hooks/useAddresses';
import useAllProducts from '../../hooks/useAllProducts';

const Checkout = () => {
    const { userData } = useSelector((state) => state.auth);
    const { products: allProducts, fetching: productsFetching, error: productsError } = useAllProducts();
    const { products: productIds, fetching, error } = useSelector((state) => state.checkout);
    const { defaultAddress, fetching: defAdfetching, error: defAddeError } = useAddresses({ userData });
    const [products, setProducts] = useState([]);
    const [totals, setTotals] = useState(0);

    useEffect(() => {
        if (productIds?.length > 1) {
            const ids = JSON.parse(productIds);  // Ensure it's parsed to an array
            console.log(ids);

            const productCounts = ids.reduce((counts, id) => {
                counts[id] = (counts[id] || 0) + 1;
                return counts;
            }, {});

            const prods = allProducts
                .filter((product) => ids.includes(product.$id))
                .map((product) => ({
                    ...product,
                    count: productCounts[product.$id] || 0,
                }));

            setProducts(prods);

            // Calculate total
            const totalAmount = prods.reduce((total, product) => total + product.productPrice * product.count, 0);
            setTotals(totalAmount);
        } else if (productIds?.length === 1) {
            const prods = allProducts.filter((x) => productIds.includes(x.$id))
            setProducts(prods)
            setTotals(prods[0].productPrice)

        }

    }, [allProducts, productIds]);

    const handleCheckout = async () => {
        console.log(products);
    };

    if (productsFetching) return (
        <div className="">loading</div>
    );
    if (productsError) return (
        <div className="">Error</div>
    );

    return (
        <div className="container mt-[4rem]">
            <div className="p-6 mx-auto bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-6">Checkout</h1>

                <div className="grid sm:grid-cols-3 gap-5">
                    <div className="w-full shadow-lg p-3">
                        <h2 className="text-xl font-semibold">Shipping Information</h2>
                        {
                            !defaultAddress ? (
                                <div className="">Please create a default address in your <Link to={`/profile/${userData.name}`} className='text-green-400'>Profile</Link> page</div>
                            ) : (
                                <div className="flex flex-col text-black">
                                    <p className="">Name: {defaultAddress.name}</p>
                                    <p className="">Phone: {defaultAddress.phone}</p>
                                    <p className="">County: {defaultAddress.county}</p>
                                    <p className="">Town: {defaultAddress.town}</p>
                                    <p className="">Location: {defaultAddress.location}</p>
                                </div>
                            )
                        }
                    </div>

                    <div className="w-full shadow-lg p-3">
                        <h2 className="text-xl font-semibold">Payment Method</h2>
                        <p>(Trusted Payment, 100% Money Back Guarantee)</p>
                        <p>M-PESA Till: </p>
                        <p>TILL NAME: </p>
                    </div>

                    <div className="w-full shadow-lg p-3">
                        <h2 className="text-xl font-semibold">Summary</h2>
                        <p>Products : {products.length}</p>
                        <p>Total Ksh : {totals}</p>
                    </div>
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold">Product List</h2>
                    <div className='flex flex-row flex-wrap'>
                        {products.map((product) => (
                            <div key={product.$id} className="mx-2">
                                <div className="flex flex-col h-[17rem] w-[12rem] p-2 shadow-lg">
                                    <div className="h-[80%]">
                                        <img src={product.productImage} alt="" className='object-cover h-full w-full' />
                                    </div>
                                    <div className="h-[20%] flex flex-col justify-between items-start">
                                        <p className="text-sm font-semibold text-black">{product.productName}</p>
                                        <p className="text-xs text-black">Ksh: {product.productPrice} <span className="ml-3 text-sm">Quantity: {product.count ? product.count : 1}</span></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button onClick={handleCheckout} disabled={!defaultAddress} className="bg-blue-500 text-white p-2 rounded w-full">Place Order</button>
            </div>
        </div>
    );
};

export default Checkout;
