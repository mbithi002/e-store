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
        <div className="">Loading</div>
    )
    if (error) return (
        <div className="">{error}</div>
    )
    return (
        <>
            <div className="flex flex-col w-full h-full">
                <div className="flex flex-row justify-between mb-2 w-full">
                    <p className="">All Admins</p>
                    <button onClick={() => setCreateUserModal(!createUserModal)} className="bg-green-400 py-1 px-5 rounded-sm self-end">+ Add</button>
                </div>
                <table className="table-auto w-full">
                    <thead className='border border-white'>
                        <tr>
                            <th className='bg-gray-700'>Admin name</th>
                            <th className='bg-gray-700'>Admin e-mail</th>
                            <th className='bg-gray-700'>Admin phone</th>
                            <th className='bg-gray-700'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            admins && admins.map((user) => (
                                <tr key={user.$id} className='text-black'>
                                    <td className='pl-2 border-x-black border bg-gray-200 hover:bg-gray-600 hover:text-white transition-all duration-200'>{user.name}</td>
                                    <td className='pl-2 border-x-black border bg-gray-200 hover:bg-gray-600 hover:text-white transition-all duration-200'>{user.email}</td>
                                    <td className='pl-2 border-x-black border bg-gray-200 hover:bg-gray-600 hover:text-white transition-all duration-200'>{user.phone}</td>
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

export default AdminsTable