import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { ErrorSvg } from '../../assets/google/google';
import { fetchAllproducts } from '../../features/user/shop/productThunks';
import { ProductCardComponent } from '../components';

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
        <div className="mt-[4rem] sm:min-h-[70dvh] min-h-[90dvh]">
            {fetching && <div>Loading...</div>}
            {error && !fetching ? (
                <div className="w-full h-screen p-10 flex flex-col items-center justify-even">
                    <p className="text-center font-semibold text-md">😢Oops</p>
                    <p className="text-center font-semibold text-md">something Went wrong!</p>
                    <div className="sm:my-10 my-5">
                        <ErrorSvg />
                    </div>
                    <button className="w-full p-2 text-white bg-black text-lg font-bold shadow-lg">
                        <Link to={'/'}>
                            <i className="fa-solid fa-house mx-2"></i> Go back
                        </Link>
                    </button>
                </div>
            ) : ('')}
            {results.length < 1 && (
                <p className="text-2xl text-black font-bold text-center">
                    Oops nothing found
                </p>
            )}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:grid-cols-2 items-center sm:px-4">
                {results.map(product => (
                    <ProductCardComponent
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
