import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllproducts } from "../features/user/shop/productThunks";

const useAllProducts = () => {
  const dispatch = useDispatch();

  const { products, fetching, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (!products) dispatch(fetchAllproducts());
  }, [dispatch, products]);

  return { products, fetching, error };
};

export default useAllProducts;
