import React from 'react';
import { useSelector } from 'react-redux';

const OrderedItems = () => {
    const { orderedItems, fetching, error } = useSelector((state) => state.orderedItems)
    const { users, fetching: fetchingUsers, error: usersError } = useSelector((state) => state.getUsers)
    const { adminOrders, fetching: fetchingOrders, error: errorsOrders } = useSelector((state) => state.adminOrders)


    if (fetching || fetchingUsers) return (
        <div className="">Loading...</div>
    )
    if (error || usersError) return (
        <div className="">{error}</div>
    )
    return (
        <div>

            <table className="table-auto w-full h-full">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Customer</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orderedItems && orderedItems.map((x, i) => {
                            const order = adminOrders.find((order) => order.$id === x.orderId)
                            const user = users?.find((user) => user.$id === order.userId);
                            console.log("user>>", user);

                            return (
                                <tr key={x.$id}>
                                    <td className='text-center p-1'>{i + 1}</td>
                                    <td className='text-start p-1'>{JSON.parse(x.item).productName}</td>
                                    <td className='text-center p-1'>{user.name?.toUpperCase()}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default OrderedItems