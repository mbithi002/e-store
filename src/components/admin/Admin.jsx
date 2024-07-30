import React, { useState } from 'react'
import AdminsTable from './AdminsTable'
import UsersComponent from './UsersComponent'

const Admin = () => {
    const [content, setContent] = useState('admins')
    return (
        <div className='w-full min-h-scree mt-[4rem] min-h-screen bg-gray-800 text-white'>
            <p className="font-bold text-2xl text-center">Admin dashboard</p>
            <div className="container w-full-h-full">
                <div className="grid sm:grid-cols-12 gap-4">
                    <div className="col-span-3 w-full h-full p-2">
                        <div className="flex w-full h-full flex-col text-black">
                            <button onClick={() => setContent('admins')} className="text-start w-full py-2 px-3 bg-gray-100 hover:bg-gray-200 transition-all duration-200 rounded-lg mb-3">
                                <i className="fa-solid fa-lock"></i> Admins
                            </button>
                            <button onClick={() => setContent('users')} className="text-start w-full py-2 px-3 bg-gray-100 hover:bg-gray-200 transition-all duration-200 rounded-lg mb-3">
                                <i className="fa-solid fa-circle-user"></i> Users
                            </button>
                            <button onClick={() => setContent('product')} className="text-start w-full py-2 px-3 bg-gray-100 hover:bg-gray-200 transition-all duration-200 rounded-lg mb-3">
                                <i className="fa-solid fa-list-check"></i> Product Management
                            </button>
                            <button onClick={() => setContent('orders')} className="text-start w-full py-2 px-3 bg-gray-100 hover:bg-gray-200 transition-all duration-200 rounded-lg mb-3">
                                <i className="fa-solid fa-truck"></i> Orders Management
                            </button>
                            <button onClick={() => setContent('inventory')} className="text-start w-full py-2 px-3 bg-gray-100 hover:bg-gray-200 transition-all duration-200 rounded-lg mb-3">
                                <i class="fa-solid fa-warehouse"></i> Inventory Management
                            </button>
                            <button onClick={() => setContent('reviews')} className="text-start w-full py-2 px-3 bg-gray-100 hover:bg-gray-200 transition-all duration-200 rounded-lg mb-3">
                                <i class="fa-solid fa-face-smile"></i> Ratings and reviews
                            </button>
                        </div>
                    </div>
                    <div className="col-span-9 w-full h-full p-3">
                        {content === 'users' && (<UsersComponent />)}
                        {content === 'admins' && (<AdminsTable />)}
                        {content === 'product' && (<>Product</>)}
                        {content === 'orders' && (<>orders</>)}
                        {content === 'inventory' && (<>inventory</>)}
                        {content === 'reviews' && (<>Reviews</>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin