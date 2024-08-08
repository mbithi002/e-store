import React from 'react';
import { useSelector } from 'react-redux';
import useUsers from '../../hooks/useUsers';

const OrdersTable = () => {
    const { adminOrders, fetching, error } = useSelector((state) => state.adminOrders);
    const { allUsers, fetching: fetchingUsers, error: usersError } = useUsers()
    const { allAddresses, fetching: fetchingAddresses, error: addressesError } = useSelector((state) => state.allAddresses)

    if (fetching) return (
        <div className="">Loading...</div>
    );
    if (error) return (
        <div className="">{error}</div>
    );

    return (
        <div>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className='text-start bg-gray-600 p-1'>#</th>
                        <th className='text-start bg-gray-600 p-1'>Date</th>
                        <th className='text-start bg-gray-600 p-1'>Customer</th>
                        <th className='text-start bg-gray-600 p-1'>Phone</th>
                        <th className='text-start bg-gray-600 p-1'>Address</th>
                        <th className='text-start bg-gray-600 p-1'>Items</th>
                        <th className='text-start bg-gray-600 p-1'>Total</th>
                        <th className='text-start bg-gray-600 p-1'>Status</th>
                        <th className='text-start bg-gray-600 p-1'>
                            <div className="fa-solid fa-pen-to-square"></div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        adminOrders.map((order, index) => {
                            const items = order.items.map((x) => JSON.parse(x))
                            const user = allUsers.find((x) => x.$id === order.userId)
                            const address = allAddresses?.find((x) => String(x.$id) === String(order.address))
                            console.log(address);

                            return (
                                <tr key={order.$id}>
                                    <td className='text-start p-1 hover:bg-gray-600 transition-all duration-150 cursor-pointer'>{index + 1}</td>
                                    <td className='text-start p-1 hover:bg-gray-600 transition-all duration-150 cursor-pointer'>
                                        {new Date(order.$createdAt).toLocaleDateString('en-GB')} {new Date(order.$createdAt).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
                                    </td>
                                    <td className='text-start p-1 hover:bg-gray-600 transition-all duration-150 cursor-pointer'>{user?.name?.toUpperCase()}</td>
                                    <td className='text-start p-1 hover:bg-gray-600 transition-all duration-150 cursor-pointer'>{user?.phone}</td>
                                    <td className='text-start p-1 hover:bg-gray-600 transition-all duration-150 cursor-pointer'>
                                        {
                                            `${address?.county} County, ${address.town} Town, ${address.location}`
                                        }
                                    </td>
                                    <td className='text-start p-1 hover:bg-gray-600 transition-all duration-150 cursor-pointer'>
                                        {items?.length}
                                    </td>
                                    <td className='text-start p-1 hover:bg-gray-600 transition-all duration-150 cursor-pointer'>Ksh {order.totalAmount.toFixed(2)}</td>
                                    <td className='text-start p-1 hover:bg-gray-600 transition-all duration-150 cursor-pointer'>{order.status}</td>
                                    <td className='text-start p-1 hover:bg-gray-600 transition-all duration-150 cursor-pointer'>
                                        <div className="fa-solid fa-pen-to-square"></div>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default OrdersTable;
