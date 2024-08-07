import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { WifiLoaderComponent } from '../components';
import CreateCategory from './modals/CreateCategory';

const Categories = () => {
    const { categories, fetching: fetchingCategories, error: categoriesError } = useSelector((state) => state.categories)
    const [createModal, setCreateModal] = useState(false)

    if (fetchingCategories) return (
        <div className="">
            <div className="w-full h-full flex flex-col items-center mt-10">
                <WifiLoaderComponent message='loading...' />
            </div>
        </div>
    )
    if (categoriesError) return (
        <div className="">{error}</div>
    )
    return (
        <div>
            <CreateCategory onClose={() => setCreateModal(!createModal)} isOpen={createModal} />
            <div className="flex flex-col w-full h-full slide-left">
                <div className="flex flex-row items-center justify-between">
                    <p className="">Categories <span className="text-xl font-bold text-green-400">{categories && categories.length}</span> </p>
                    <div className="">
                        <button onClick={() => setCreateModal(!createModal)} className="bg-green-400 py-1 px-5 rounded-sm self-end">+ Add</button>
                    </div>
                </div>
                <div className="w-full h-full my-2">
                    <table className="table-auto w-full h-full">
                        <thead>
                            <tr>
                                <th className='bg-gray-500 border border-white'>#</th>
                                <th className='bg-gray-500 border border-white'>Name</th>
                                <th className='bg-gray-500 border border-white'>Description</th>
                                <th className='bg-gray-500 border border-white'>
                                    <i className="fa-solid fa-pen-to-square mx-3"></i>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories && (
                                categories.map((item, index) => (
                                    <tr key={item.$id}>
                                        <td className='text-start py-1 px-2 border border-l-gray-200 hover:bg-green-400 transition-all duration-150 cursor-pointer'>{index + 1}</td>
                                        <td className='text-start py-1 px-2 border border-l-gray-200 hover:bg-green-400 transition-all duration-150 cursor-pointer'>{item.category}</td>
                                        <td className='text-start py-1 px-2 border border-l-gray-200 hover:bg-green-400 transition-all duration-150 cursor-pointer'>{item.description}</td>
                                        <td className='text-start py-1 px-2 border border-l-gray-200 hover:bg-green-400 transition-all duration-150 cursor-pointer'>
                                            <i className="fa-solid fa-pen-to-square mx-3"></i>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Categories