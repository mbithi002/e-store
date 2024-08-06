import React, { useState } from 'react';
import useAllProducts from '../../hooks/useAllProducts';
import { WifiLoaderComponent } from '../components';
import CreateProduct from './modals/CreateProduct';
const ProductsTable = () => {
    const { products, fetching, error } = useAllProducts()
    const [createModal, setCreateModal] = useState(false)
    if (fetching) return (
        <div className="">Loading</div>
    )

    if (error) return (
        <div className="">{error}</div>
    )
    if (fetching) return (
        <div className="w-full h-screen flex items-center justify-center content-center">
            <div className="-mt-[5rem]">
                <WifiLoaderComponent message='fetching...' />
            </div>
        </div>
    )
    return (
        <>
            <CreateProduct isOpen={createModal} onClose={() => setCreateModal(!createModal)} />
            <div className="flex flex-col w-full h-full slide-left">
                <div className="flex flex-row justify-between mb-2 w-full">
                    <p className="">All Products</p>
                    <button onClick={() => setCreateModal(!createModal)} className="bg-green-400 py-1 px-5 rounded-sm self-end">+ Add</button>
                </div>
                <table className="table-auto w-full">
                    <thead className='border border-white'>
                        <tr>
                            <th className='bg-gray-700'>Name</th>
                            <th className='bg-gray-700'>Image</th>
                            <th className='bg-gray-700'>Price</th>
                            <th className='bg-gray-700'>Category</th>
                            <th className='bg-gray-700'>Quantity</th>
                            <th className='bg-gray-700'>Rating</th>
                            <th className='bg-gray-700'>Status</th>
                            <th className='bg-gray-700'>Featured</th>
                            <th className='bg-gray-700'>New</th>
                            {/* <th className='bg-gray-700'>Action</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products && products.map((product) => (
                                <tr key={product.$id} className='text-black'>
                                    <td className='hover:bg-gray-500 cursor-pointer pl-2 border-x-black border text-white transition-all duration-200'>{product.productName}</td>
                                    <td className='pl-2 border-x-black cursor-pointer border text-white transition-all duration-200'>
                                        <img src={product.productImage} alt="" className="size-[4rem] self-center hover:brightness-[70%] transition-all duration-150" />
                                    </td>
                                    <td className='pl-2 hover:bg-gray-500 cursor-pointer text-start border-x-black border text-white transition-all duration-150'>Ksh: {product.productPrice}</td>
                                    <td className='pl-2 hover:bg-gray-500 cursor-pointer text-start border-x-black border text-white transition-all duration-150'>{product.categoryId}</td>
                                    <td className='pl-2 hover:bg-gray-500 cursor-pointer text-start border-x-black border text-white transition-all duration-150'>{product.productQuantity}</td>
                                    <td className='pl-2 hover:bg-gray-500 cursor-pointer text-start border-x-black border text-white transition-all duration-150'>{product.productRating}</td>
                                    <td className='pl-2 hover:bg-gray-500 cursor-pointer text-start border-x-black border text-white transition-all duration-150'>{product.productStatus ? 'active' : 'in-active'}</td>
                                    <td className='pl-2 hover:bg-gray-500 cursor-pointer text-start border-x-black border text-white transition-all duration-150'>{product.featured ? 'Yes' : 'No'}</td>
                                    <td className='pl-2 hover:bg-gray-500 cursor-pointer text-start border-x-black border text-white transition-all duration-150'>{product.new ? 'Yes' : 'No'}</td>
                                    <td className='flex items-center p-1 text-center w-full h-full'>
                                        <i className="fa-solid fa-pen-to-square text-white text-xl self-center cursor-pointer hover:text-green-500 transition-all duration-300"></i>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ProductsTable