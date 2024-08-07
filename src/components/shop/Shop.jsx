import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useCategorizedProds from '../../hooks/useCategorizedProds';
import AllProducts from './AllProducts';
import CategorizedProds from './CategorizedProds';

const Shop = () => {
    const { categories, fetching, error } = useSelector((state) => state.categories)
    const [category, setCategory] = useState('Product Listing')
    const { relatedCategories, fetching: fetchingRelated, error: errorRelated } = useCategorizedProds(category);

    useEffect(() => {
        console.log(relatedCategories);
    }, [relatedCategories]);

    if (fetching) return (
        <div className="">Loading...</div>
    )
    if (error) return (
        <div className="">{error}</div>
    )
    const handleCategoryClick = (item) => {
        console.log('Selected category:', item);
        // Handle category selection here
    };

    return (
        <>
            <div className="sm:mt-[4rem] mt-[4rem]">
                <div className="container min-w-[100vw]">
                    <header className="bg-gray-100 text-gray-800 p-2 flex flex-col">
                        {
                            fetching ? (<div className="text-center">Loading...</div>) : error ? (<div className="text-center">{error}</div>) : (
                                <nav className="flex flex-row w-full mb-2 px-2 shadow-md">
                                    <ul className="flex flex-row overflow-x-scroll category-ul">
                                        {
                                            categories.map((item, index) => (
                                                <li key={index} className="mr-2 my-1">
                                                    <button
                                                        onClick={() => setCategory(item.category)}
                                                        className="py-1 px-3 bg-[#ff69b4] text-white rounded-md"
                                                    >
                                                        <span className="text-md block truncate">{item.category}</span>
                                                    </button>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </nav>
                            )
                        }
                    </header>
                    <div className="w-full min-h-screen">
                        <p className="text-center text-2xl font-semibold my-1">
                            {category}
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:grid-cols-2 items-center sm:px-4">
                            {category === 'Product Listing' ? (<AllProducts />) : (<CategorizedProds CategorizedProds={relatedCategories} />)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Shop;
