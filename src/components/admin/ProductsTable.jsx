import React from 'react';
import useAllProducts from '../../hooks/useAllProducts';

const ProductsTable = () => {
    const { products, fetching, error } = useAllProducts()
    if (fetching) return (
        <div className="">Loading</div>
    )

    if (error) return (
        <div className="">{error}</div>
    )
    return (
        <>
            <div className="flex flex-col w-full h-full">
                <div className="flex flex-row justify-between mb-2 w-full">
                    <p className="">All Products</p>
                    <button onClick={() => setCreateUserModal(!createUserModal)} className="bg-green-400 py-1 px-5 rounded-sm self-end">+ Add</button>
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
                            <th className='bg-gray-700'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products && products.map((product) => (
                                <tr key={product.$id} className='text-black'>
                                    <td className='pl-2 border-x-black border text-white transition-all duration-200'>{product.productName}</td>
                                    <td className='relative pl-2 border-x-black border text-white transition-all duration-200'>
                                        <img src={product.productImage} alt="" className="size-[4rem]" />
                                    </td>
                                    <td className='pl-2 hover:bg-gray-500 cursor-pointer text-center border-x-black border text-white transition-all duration-150'>{product.productPrice}</td>
                                    <td className='pl-2 hover:bg-gray-500 cursor-pointer text-center border-x-black border text-white transition-all duration-150'>{product.categoryId}</td>
                                    <td className='pl-2 hover:bg-gray-500 cursor-pointer text-center border-x-black border text-white transition-all duration-150'>{product.productQuantity}</td>
                                    <td className='pl-2 hover:bg-gray-500 cursor-pointer text-center border-x-black border text-white transition-all duration-150'>{product.productRating}</td>
                                    <td className='pl-2 hover:bg-gray-500 cursor-pointer text-center border-x-black border text-white transition-all duration-150'>{product.productStatus ? 'active' : 'in-active'}</td>
                                    <td className='pl-2 hover:bg-gray-500 cursor-pointer text-center border-x-black border text-white transition-all duration-150'>{product.featured ? 'Yes' : 'No'}</td>
                                    <td className='pl-2 hover:bg-gray-500 cursor-pointer text-center border-x-black border text-white transition-all duration-150'>{product.new ? 'Yes' : 'No'}</td>
                                    <td className='flex items-center p-1'>
                                        <button className="bg-blue-500 w-full h-full text-white rounded-md">Edit</button>
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