import { lineSpinner } from 'ldrs';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart } from '../../features/user/cart/cartThunks';
import { fetchAllproducts } from '../../features/user/shop/productThunks';
import CartItem from './CartItem';

lineSpinner.register()

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
      const filteredProducts = products.filter(product => cart.includes(product.$id));
      setProductsInCart(filteredProducts);
    }
  }, [cart, products]);

  if (!userData) {
    return (
      <div className="w-[100vw] h-full mt-[6rem]">
        <p className="text-center text-2xl font-bold text-black my-auto">
          Sign in to your account or sign up to use cart functionality
        </p>
      </div>
    );
  }

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

  return (
    <div className="sm:mt-[4rem]">
      <div className="text-center text-gray-700 text-2xl font-bold my-2 pt-2">
        Your Cart <i className="fa-solid fa-cart-shopping"></i>
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
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
