import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllproducts } from '../features/user/shop/productThunks';

const useProduct = (productId) => {
    const dispatch = useDispatch();
    const { products, fetching, error } = useSelector((state) => state.products);

    useEffect(() => {
        if (!products || products.length === 0) {
            dispatch(fetchAllproducts());
        }
    }, [dispatch, products]);

    const product = products?.find((prod) => prod.$id === productId);

    return { fetching, error, product };
};

export default useProduct;
