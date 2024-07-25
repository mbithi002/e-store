// CartCardComponent.jsx

import React, { useEffect, useState } from 'react';
import { addToCart, getCartItemsWithCounts, initializeCart, removeFromCart } from '../../features/user/cart/cartUtils';
import { CustomCheckBoxComponent } from '../components';

const CartCardComponent = ({ products }) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        initializeCart();
        const items = getCartItemsWithCounts(products);
        setCartItems(items)
    }, [products]);


    const handleAddToCart = (productId) => {
        addToCart(productId);
        setCartItems(getCartItemsWithCounts(products));
    };

    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId);
        const items = getCartItemsWithCounts(products)
        setCartItems(items)
    };

    if (cartItems.length === 0) return (
        <p className="mt-[5rem]">Cart is empty</p>
    );

    return (
        <div className='grid sm:grid-cols-3 mt-[5rem] px-5 gap-4'>
            {cartItems.map((product) => (
                <div key={product.$id} className="flex flex-col p-2 bg-gray-200 mx-auto rounded-md shadow-lg w-full">
                    <div className="flex flex-row h-[9rem] py-2 relative">
                        <div className="absolute top-2 left-0 flex flex-row size-5 items-center justify-center">
                            <CustomCheckBoxComponent />
                        </div>
                        <img src={product.productImage} alt={product.productName} className="h-[inherit] w-[7rem] object-cover" />
                        <div className="flex flex-col items-start px-2 justify-between">
                            <p className="font-semibold text-xl">{product.productName}</p>
                            <p className="text-sm">{product.productDescription}</p>
                            <p className="text-sm">Quantity: {product.count}</p>
                            <div className="flex w-full flex-row justify-between">
                                <p className="text-sm p-1 mt-1 border border-black rounded-md">Ksh: <span className="font-bold">{product.productPrice}</span></p>
                                <div onClick={() => handleRemoveFromCart(product.$id)} className="cursor-pointer flex items-center hover:text-red-400 active:text-red-600 transition-all duration-200">
                                    <i className="fa-solid fa-trash"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CartCardComponent;
