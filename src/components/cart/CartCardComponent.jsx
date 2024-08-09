import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
    addToCart,
    cleanCart,
    clearCart,
    getCart,
    getCartItemsWithCounts,
    getCartSubtotal,
    initializeCart,
    removeFromCart,
    removeOneFromCart
} from '../../features/user/cart/cartUtils';
import { checkoutCart } from '../../features/user/checkout/checkoutSlice';

const CartCardComponent = ({ products }) => {
    const { userData } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const [subTotals, setSubTotals] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        if (userData) {
            initializeCart(userData.$id);
            const cart = getCart(String(userData.$id))
            setCartItems(cart)
            cleanCart(userData.$id);
            const items = getCartItemsWithCounts(userData.$id, products);
            setCartItems(items);
            const total = getCartSubtotal(userData.$id, products);
            setSubTotals(total);
        }
    }, [products, userData]);


    const handleAddToCart = (productId) => {
        console.log(productId);
        addToCart(String(userData.$id), String(productId));
        setCartItems(getCartItemsWithCounts(String(userData.$id), products));
        const total = getCartSubtotal(String(userData.$id), products);
        setSubTotals(total);
        console.log((getCart(String(userData.$id))));

    };

    const handleRemoveFromCart = (productId) => {
        removeFromCart(userData.$id, productId);
        const items = getCartItemsWithCounts(String(userData.$id), products);
        setCartItems(items);
        const total = getCartSubtotal(userData.$id, products);
        setSubTotals(total);
    };

    const handleClearCart = () => {
        clearCart(userData.$id);
        setCartItems([]);
        setSubTotals(0);
    };

    const handleRemoveOne = (productId) => {
        removeOneFromCart(String(userData.$id), String(productId))
        const items = getCartItemsWithCounts(String(userData.$id), products);
        setCartItems(items);
        const total = getCartSubtotal(userData.$id, products);
        setSubTotals(total);
    }

    const goToProductPage = (productId) => {
        navigate(`/product/${productId}`);
    };

    const handleCheckout = () => {
        const items = getCart(userData.$id);
        dispatch(checkoutCart(items));
        console.log(items);

        navigate('/checkout');
    };

    if (!userData) return (
        <div className="text-center h-screen w-full">
            <p className="mt-[5rem]">Login or signup to use cart</p>
        </div>
    );

    if (cartItems.length === 0) return (
        <p className="mt-[5rem] text-center">Cart is empty</p>
    );

    return (
        <div className="container mt-[5rem] relative w-full min-h-[80dvh]">
            <div className="flex flex-row items-center self-center px-5 relative w-fit">
                <p className="text-2xl font-semibold">Your Cart</p>
                <div className="fa-solid fa-shopping-cart mx-2"></div>
            </div>
            <div className='grid sm:grid-cols-3 px-5 gap-4 my-5'>
                {cartItems.map((product) => (
                    <div key={product.$id} className="flex flex-col py-3 px-2 bg-white shadow-lg mx-auto rounded-lg border border-gray-200 w-full">
                        <div className="flex flex-row h-[9rem] py-2 relative">
                            <img
                                onClick={() => goToProductPage(product.$id)}
                                src={product.productImage}
                                alt={product.productName}
                                className="h-[inherit] w-[7rem] object-cover hover:brightness-[80%] hover:cursor-pointer transition-all duration-200"
                            />
                            <div className="flex flex-col items-start px-2 justify-between">
                                <p className="font-semibold text-xl">{product.productName}</p>
                                <p className="text-sm">{product.productDescription}</p>
                                <div className="flex w-full flex-row justify-between items-center">
                                    <p className="text-sm p-1 mt-1 border border-black rounded-md">
                                        Ksh: <span className="font-bold">{product.productPrice}</span>
                                    </p>
                                    <div className="text-sm flex flex-row justify-between items-center">
                                        <i
                                            onClick={() => handleAddToCart(product.$id)}
                                            className="cursor-pointer fa-solid fa-chevron-up text-xs mx-2">
                                        </i>
                                        <span className="inline">{product.count}</span>
                                        <i
                                            onClick={() => handleRemoveOne(product.$id)}
                                            className="cursor-pointer fa-solid fa-chevron-down text-xs mx-2">
                                        </i>
                                    </div>
                                    <div
                                        onClick={() => handleRemoveFromCart(product.$id)}
                                        className="cursor-pointer flex items-center hover:text-red-400 active:text-red-600 transition-all duration-200">
                                        <i className="fa-solid fa-trash"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex flex-row items-center justify-between p-5 w-full">
                <div className="flex flex-col">
                    <p className="text-lg mb-2">
                        Cart Subtotals: KSH <span className="border border-[#ff69b4] p-1 rounded-md">{subTotals}</span>
                    </p>
                    <button
                        onClick={() => handleCheckout()}
                        className="bg-[#ff69b4] p-2 text-white">
                        Proceed to checkout
                    </button>
                </div>
                <button
                    onClick={() => handleClearCart()}
                    className="py-2 px-5 bg-red-400 text-white font-semibold text-lg rounded-md">
                    Clear cart
                </button>
            </div>
        </div>
    );
};

export default CartCardComponent;
