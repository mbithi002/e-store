import React from 'react'
import { useSelector } from 'react-redux'

const CategoriesSlide = () => {
    const { categories, fetching, error } = useSelector((state) => state.categories)

    if (fetching) return (
        <div className="">Loading...</div>
    )
    if (error) return (
        <div className="">{error}</div>
    )
    return (
        <header className="bg-gray-100 text-gray-800 p-2 flex flex-col">
            <nav className="flex flex-row w-full mb-2 px-2 shadow-md">
                <ul className="flex flex-row overflow-x-scroll category-ul">
                    {categories.map((item, index) => (
                        <li key={index} className="mr-2 my-1">
                            <button
                                onClick={() => handleCategoryClick(item.category)}
                                className="py-1 px-3 bg-[#ff69b4] text-white rounded-md"
                            >
                                <span className="text-md block truncate">{item.category}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>

    )
}

export default CategoriesSlide