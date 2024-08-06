import React, { useState } from 'react'
import AdminsTable from './AdminsTable'
import ProductsTable from './ProductsTable'
import UsersComponent from './UsersComponent'

const Admin = () => {
    const [content, setContent] = useState('product')
    const [sideBar, setSideBar] = useState(true)
    return (
        <div className='w-full min-h-scree mt-[4rem] min-h-screen bg-gray-800 text-white'>
            <div className="flex flex-row items-center justify-between px-3">
                <i onClick={() => setSideBar(!sideBar)} className="fa-solid fa-bars text-xl cursor-pointer"></i>
                <p className="font-bold text-2xl text-center">Admin dashboard</p>
            </div>
            <div className="container w-full-h-full">
                <div className="grid sm:grid-cols-12 gap-4">
                    {
                        sideBar && (
                            <div className="col-span-3 w-full h-full px-2 pt-10 adminSideBar">
                                <div className="flex w-full h-full flex-col text-black">
                                    <button onClick={() => setContent('product')} className="text-start w-full py-2 px-3 bg-gray-100 hover:bg-gray-200 transition-all duration-200 rounded-lg mb-3">
                                        <i className="fa-solid fa-list-check"></i> Product Management
                                    </button>
                                    <button onClick={() => setContent('admins')} className="text-start w-full py-2 px-3 bg-gray-100 hover:bg-gray-200 transition-all duration-200 rounded-lg mb-3">
                                        <i className="fa-solid fa-lock"></i> Admins
                                    </button>
                                    <button onClick={() => setContent('users')} className="text-start w-full py-2 px-3 bg-gray-100 hover:bg-gray-200 transition-all duration-200 rounded-lg mb-3">
                                        <i className="fa-solid fa-circle-user"></i> Users
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
                        )
                    }
                    <div className={`${sideBar ? 'col-span-9' : 'col-span-12'} w-full h-full p-3 transition-all duration-200`}>
                        {content === 'users' && (<UsersComponent />)}
                        {content === 'admins' && (<AdminsTable />)}
                        {content === 'product' && (<ProductsTable />)}
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