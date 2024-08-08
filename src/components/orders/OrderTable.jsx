import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const OrderTable = () => {
    const { orders, fetching, error } = useSelector((state) => state.orders)
    const [items, setItems] = useState([])

    useEffect(() => {
        if (orders.length > 0) {
            const parsedItems = orders.map(order =>
                order.items.map(item => JSON.parse(item))
            );
            setItems(parsedItems);
        }
    }, [orders]);

    if (fetching) return (
        <div className="mt-[5rem]">Loading...</div>
    )
    if (error) return (
        <div className="mt-[5rem]">{error}</div>
    )
    return (
        <>
            {
                orders?.length < 1 && (
                    <div className="text-center flex flex-col items-center w-full h-screen ">
                        <p className="my-auto">
                            No orders yet
                        </p>
                    </div>
                )
            }
            <div className="min-h-screen p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-x-auto mt-[4rem]">
                <p className="text-xl font-bold text-center">Your Orders</p>
                {orders?.length > 0 && orders.map((order, index) => {
                    const orderItems = items[index] || [];
                    return (
                        <div key={order.$id} className="mb-8 w-full shadow-xl border border-gray-200">
                            <h3 className="text-xl font-medium mb-4 ml-2">
                                Date: {new Date(order.$createdAt).toLocaleDateString('en-GB')} {new Date(order.$createdAt).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
                            </h3>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {orderItems.map((product, i) => (
                                            <tr key={product.$id} className="text-sm">
                                                <td className="px-4 py-2 whitespace-nowrap text-gray-900">{i + 1}</td>
                                                <td className="px-4 py-2 whitespace-nowrap text-gray-900">{product.productName}</td>
                                                <td className="px-4 py-2 whitespace-nowrap">
                                                    <img src={product.productImage} alt={product.productName} className="w-16 h-16 object-cover" />
                                                </td>
                                                <td className="px-4 py-2 whitespace-nowrap text-gray-500">Ksh {product.productPrice.toFixed(2)}</td>
                                                <td className="px-4 py-2 whitespace-nowrap text-gray-500">{product.count || 1}</td>
                                                <td className="px-4 py-2 whitespace-nowrap text-gray-500">Ksh {(product.productPrice * (product.count || 1)).toFixed(2)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between bg-gray-100 p-2 w-full">
                                <p className="text-lg font-semibold">Order Status:
                                    <span className={`inline-block ${order.status === 'Shipped' ? 'bg-blue-500' : 'bg-teal-400'} text-white p-2 rounded-md text-sm`}>
                                        {order.status}
                                    </span>
                                </p>
                                <p className="text-lg font-semibold mt-2 sm:mt-0">Total Amount: Ksh {order.totalAmount.toFixed(2)}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default OrderTable;
