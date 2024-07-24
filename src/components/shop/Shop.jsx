import React from 'react';
import AllProducts from './AllProducts';

const Shop = () => {
    const categories = ['moisturizers', 'cleansers', 'treatments', 'skincare', 'fragrance', 'face', 'eyes', 'lips', 'chicks', 'tools', 'moisturizers', 'cleansers', 'treatments', 'skincare', 'fragrance', 'face', 'eyes', 'lips', 'chicks', 'tools']

    const handleCategoryClick = (item) => {
        console.log('Selected category:', item);
        // Handle category selection here
    };

    return (
        <>
            <div className="sm:mt-[4rem]">
                <div className="container min-w-[100vw]">
                    <header className="bg-gray-200 text-gray-800 p-2 flex flex-col">
                        <nav className="flex flex-row w-fulll">
                            <ul className="flex flex-row overflow-x-scroll category-ul">
                                {categories.map((item, index) => (
                                    <li key={index} className="mr-2 my-1">
                                        <button
                                            onClick={() => handleCategoryClick(item)}
                                            className="py-1 px-3 bg-gray-400 text-white rounded-md"
                                        >
                                            {item}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </header>
                    <div className="w-full min-h-screen">
                        <p className="text-center text-2xl font-semibold my-1">Skin Care</p>
                        <div className="grid md:grid-cols-3 lg:grid-cols-5 sm:grid-cols-2 items-center sm:px-4">
                            <AllProducts />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Shop;
