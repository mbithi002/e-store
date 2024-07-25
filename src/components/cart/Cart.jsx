// ParentComponent.jsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initializeCart } from '../../features/user/cart/cartUtils';
import { fetchAllproducts } from '../../features/user/shop/productThunks';
import CartCardComponent from './CartCardComponent';

const Cart = () => {
  const dispatch = useDispatch();
  const { products, fetching, error } = useSelector((state) => state.products)

  useEffect(() => {
    initializeCart()
    if (!products) dispatch(fetchAllproducts())
  }, [products]);




  if (fetching) return (
    <p className="mt-[5rem]">loading</p>
  )

  if (error) return (
    <p className="mt-[5rem]">loading</p>
  )

  return (
    <div className='sm:min-h-[70dvh] py-10 min-h-[80dvh]'>
      {
        products && (
          <CartCardComponent products={products} />
        )
      }
    </div>
  );
};

export default Cart;
