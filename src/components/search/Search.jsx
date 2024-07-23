import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchAllproducts } from '../../features/user/shop/productThunks';
import ProductCard from './ProductCard';

const Search = () => {
    const dispatch = useDispatch()
    const { products, fetching, error } = useSelector((state) => state.products);
    const [results, setResults] = useState([])
    const location = useLocation();

    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('query');
    useEffect(() => {
        if (!products) {
            dispatch(fetchAllproducts());
        } else {
            const filteredProducts = products.filter(product => {
                const byProductNameMatch = product.productName?.toLowerCase().includes(query) ?? false;
                const byTagsMatch = product.productTags?.some(tag => tag.toLowerCase().includes(query)) ?? false;
                const byDescriptionMatch = product.productDescription?.toLowerCase().includes(query) ?? false;
                const byIdMatch = product.$id.toLowerCase() === query.toLowerCase();

                return byProductNameMatch || byTagsMatch || byDescriptionMatch || byIdMatch;
            });
            setResults(filteredProducts);
        }
    }, [query, products, dispatch]);

    return (
        <div className="sm:mt-[4rem]">
            {fetching && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            {results.length < 1 && (
                <p className="text-2xl text-black font-bold text-center">
                    Oops nothing found
                </p>
            )}
            <div className="grid md:grid-cols-3 lg:grid-cols-5 sm:grid-cols-2 items-center sm:px-4 mt-2">
                {results.map(product => (
                    <ProductCard
                        key={product.$id}
                        id={product.$id}
                        productName={product.productName}
                        price={product.productPrice}
                        image={product.productImage}
                        description={product.productDescription}
                        rating={product.productRating}
                        stock={product.status}
                    />
                ))}
            </div>
        </div>
    );
};

export default Search;
