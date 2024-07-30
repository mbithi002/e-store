// CartCardComponent.jsx

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addToCart, clearCart, getCart, getCartItemsWithCounts, getCartSubtotal, initializeCart, removeFromCart } from '../../features/user/cart/cartUtils';
// import { CustomCheckBoxComponent } from '../components';

const CartCardComponent = ({ products }) => {
    const navigate = useNavigate()
    const [cart, setCart] = useState([])
    const [cartItems, setCartItems] = useState([]);
    const [subTotals, setSubTotals] = useState(0)

    useEffect(() => {
        initializeCart();
        const cartArr = getCart()
        setCart(cartArr)
        const items = getCartItemsWithCounts(products);
        setCartItems(items)
        const total = getCartSubtotal(products)
        setSubTotals(total)
    }, [products]);

    const handleAddToCart = (productId) => {
        addToCart(productId);
        setCartItems(getCartItemsWithCounts(products));
        const total = getCartSubtotal(products)
        setSubTotals(total)
    };

    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId);
        const items = getCartItemsWithCounts(products)
        setCartItems(items)
        const total = getCartSubtotal(products)
        setSubTotals(total)
    };

    const handleClearCart = () => {
        clearCart()
        const items = getCartItemsWithCounts(products);
        setCartItems(items)
        const total = getCartSubtotal(products)
        setSubTotals(total)
    }

    const goToProductPage = (productId) => {
        navigate(`/:${productId}`)
    }

    if (cartItems.length === 0) return (
        <p className="mt-[5rem]">Cart is empty</p>
    );

    return (
        <div className="container mt-[5rem] relative w-full min-h-[80dvh]">
            <div className="flex flex-row items-center self-center px-5 relative w-fit">
                <p className="text-2xl font-semibold">Your Cart</p>
                <div className="fa-solid fa-shopping-cart mx-2"></div>
            </div>
            <div className='grid sm:grid-cols-3 px-5 gap-4'>
                {cartItems.map((product) => (
                    <div key={product.$id} className="flex flex-col py-3 px-2 bg-white shadow-lg mx-auto rounded-lg border border-gray-200 w-full">
                        <div className="flex flex-row h-[9rem] py-2 relative">
                            {/* <div className="absolute top-2 right-0 flex flex-row size-5 items-center justify-center">
                                <CustomCheckBoxComponent />
                            </div> */}
                            <img onClick={() => goToProductPage(product.$id)} src={product.productImage} alt={product.productName} className="h-[inherit] w-[7rem] object-cover hover:brightness-[80%] hover:cursor-pointer transition-all duration-200" />
                            <div className="flex flex-col items-start px-2 justify-between">
                                <p className="font-semibold text-xl">{product.productName}</p>
                                <p className="text-sm">{product.productDescription}</p>
                                <div className="flex w-full flex-row justify-between items-center">
                                    <p className="text-sm p-1 mt-1 border border-black rounded-md">Ksh: <span className="font-bold">{product.productPrice}</span></p>
                                    <div className="text-sm flex flex-row justify-between items-center">
                                        <i onClick={() => handleAddToCart(product.$id)} className="cursor-pointer fa-solid fa-chevron-up text-xs mx-2"></i>
                                        <span className="inline"> {product.count}</span>
                                        <i onClick={() => handleRemoveFromCart()} className="cursor-pointer fa-solid fa-chevron-down text-xs mx-2"></i>
                                    </div>
                                    <div onClick={() => handleRemoveFromCart(product.$id)} className="cursor-pointer flex items-center hover:text-red-400 active:text-red-600 transition-all duration-200">
                                        <i className="fa-solid fa-trash"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex flex-row items-center justify-between p-5 absolute w-full bottom-0">
                <div className="flex flex-col">
                    <p className="text-lg mb-2">Cart Subtotals: KSH <span className="border border-[#ff69b4] p-1 rounded-md">{subTotals}</span></p>
                    <button className="bg-[#ff69b4] p-2 text-white">Proceed to checkout</button>
                </div>
                <button onClick={() => handleClearCart()} className="py-2 px-5 bg-red-400 text-white font-semibold text-lg rounded-md">
                    Clear cart
                </button>
            </div>
        </div>
    );
};

export default CartCardComponent;
