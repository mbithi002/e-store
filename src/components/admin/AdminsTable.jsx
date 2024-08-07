import React, { useEffect, useState } from 'react'
import useUsers from '../../hooks/useUsers'

const AdminsTable = () => {
    const { allUsers, fetching, error } = useUsers()
    const [admins, setAdmins] = useState([])

    useEffect(() => {
        if (allUsers) {
            const arr = allUsers.filter((user) => user.isAdmin)
            setAdmins(arr)
        }
    }, [allUsers])

    if (fetching) return (
        <div className="w-full h-screen flex items-center justify-center content-center">
            <div className="-mt-[5rem]">
                <WifiLoaderComponent message='fetching...' />
            </div>
        </div>
    )
    if (error) return (
        <div className="">{error}</div>
    )
    return (
        <>
            <div className="flex flex-col w-full h-full slide-left">
                <div className="flex flex-row justify-between mb-2 w-full">
                    <p className="">All Admins <span className="text-green-400 font-bold text-xl">{admins && admins.length}</span></p>
                    {/* <button onClick={() => setCreateUserModal(!createUserModal)} className="bg-green-400 py-1 px-5 rounded-sm self-end">+ Add</button> */}
                </div>
                <table className="table-auto w-full">
                    <thead className='border border-white'>
                        <tr>
                            <th className='bg-gray-700'>#</th>
                            <th className='bg-gray-700'>Admin name</th>
                            <th className='bg-gray-700'>Admin e-mail</th>
                            <th className='bg-gray-700'>Admin phone</th>
                            <th className='bg-gray-700'>
                                <i className="fa-solid fa-pen-to-square"></i>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            admins && admins.map((user, index) => (
                                <tr key={user.$id} className='text-black'>
                                    <td className='pl-2 border-x-black border-white border text-white transition-all duration-200'>{index + 1}</td>
                                    <td className='pl-2 border-x-black border bg-gray-200 hover:bg-gray-600 hover:text-white transition-all duration-200'>{user.name}</td>
                                    <td className='pl-2 border-x-black border bg-gray-200 hover:bg-gray-600 hover:text-white transition-all duration-200'>{user.email}</td>
                                    <td className='pl-2 border-x-black border bg-gray-200 hover:bg-gray-600 hover:text-white transition-all duration-200'>{user.phone}</td>
                                    <td className='flex items-center p-1 text-center w-full h-full'>
                                        <i className="fa-solid fa-pen-to-square text-white text-xl self-center cursor-pointer hover:text-green-500 transition-all duration-300 mx-auto"></i>
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

export default AdminsTable