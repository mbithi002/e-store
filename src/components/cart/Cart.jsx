import { lineSpinner } from 'ldrs';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart } from '../../features/user/cart/cartThunks';
import { fetchAllproducts } from '../../features/user/shop/productThunks';
import CartItem from './CartItem';

lineSpinner.register();

const Cart = () => {
  const dispatch = useDispatch();
  const { status, userData } = useSelector((state) => state.auth);
  const { cart, fetching, error } = useSelector((state) => state.cart);
  const { products } = useSelector((state) => state.products);
  const [productsInCart, setProductsInCart] = useState([]);

  useEffect(() => {
    if (!cart) dispatch(fetchCart());
    if (!products) dispatch(fetchAllproducts());
  }, [dispatch, cart, products]);

  useEffect(() => {
    if (cart && products) {
      const productCount = cart.reduce((acc, productId) => {
        acc[productId] = (acc[productId] || 0) + 1;
        return acc;
      }, {});

      const filteredProducts = products.filter(product => productCount[product.$id]);

      const productsWithCount = filteredProducts.map(product => ({
        ...product,
        count: productCount[product.$id],
      }));

      setProductsInCart(productsWithCount);
    }
  }, [cart, products]);

  if (fetching) {
    return (
      <div className="min-w-[100vw] min-h-screen bg-white flex items-center justify-center -mt-[4rem]">
        <l-line-spinner
          className="mx-auto"
          size="40"
          stroke="3"
          speed="1"
          color="black"
        ></l-line-spinner>
      </div>
    );
  }
  if (error) {
    return <div className="">{error}</div>;
  }
  if (!userData) {
    return (
      <div className="w-[100vw] h-full mt-[6rem]">
        <p className="text-center text-2xl font-bold text-black my-auto">
          Sign in to your account or sign up to use cart functionality
        </p>
      </div>
    );
  }

  return (
    <div className="sm:mt-[4.5rem] mt-[4rem] w-[inherit] px-3">
      <div className="flex flex-row justify-between items-center px-3">
        <div className="text-center text-gray-700 text-2xl font-bold my-2 pt-2">
          Your Cart
          <div className="relative inline-block p-1 rounded-lg">
            <i className="fa-solid fa-cart-shopping text-3xl text-black"></i>
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
              {cart.length}
            </span>
          </div>
        </div>
        <div className="">
          <button className="bg-red-500 text-white py-1 px-3 rounded-md ">
            Clear cart <i className="fa-solid fa-shopping-cart"></i>
          </button>
        </div>
      </div>
      <div className="grid sm:grid-cols-3">
        {productsInCart.length < 1 ? (
          <div className="w-[100vw] h-full">
            <p className="text-center text-2xl font-bold text-black my-auto">Your cart is empty</p>
          </div>
        ) : (
          productsInCart.map((product) => (
            <CartItem
              key={product.$id}
              id={product.$id}
              image={product.productImage}
              description={product.productDescription}
              name={product.productName}
              price={product.productPrice}
              count={product.count}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
