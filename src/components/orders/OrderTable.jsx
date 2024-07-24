import React from 'react';

const OrderTable = ({ orderData }) => {
    return (
        <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-x-auto mt-[4rem]">
            {orderData.map((order, index) => {
                const [orderDate, products] = Object.entries(order)[0];
                const { details } = order;

                return (
                    <div key={index} className="mb-8 w-full shadow-xl border border-gray-200">
                        <h3 className="text-xl font-medium mb-4 ml-2">Date:{orderDate}</h3>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {products.map((product, i) => (
                                        <tr key={i} className="text-sm">
                                            <td className="px-4 py-2 whitespace-nowrap text-gray-900">{product.productName}</td>
                                            <td className="px-4 py-2 whitespace-nowrap">
                                                <img src={product.image} alt={product.productName} className="w-16 h-16 object-cover" />
                                            </td>
                                            <td className="px-4 py-2 whitespace-nowrap text-gray-500">Ksh {product.price.toFixed(2)}</td>
                                            <td className="px-4 py-2 whitespace-nowrap text-gray-500">{product.quantity}</td>
                                            <td className="px-4 py-2 whitespace-nowrap text-gray-500">Ksh {(product.price * product.quantity).toFixed(2)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between bg-gray-100 p-2 w-full">
                            <p className="text-lg font-semibold">Order Status:
                                <span className={`inline-block ${details.status === 'Shipped' ? 'bg-blue-500' : 'bg-teal-400'} text-white p-2 rounded-md text-sm`}>
                                    {details.status}
                                </span>
                            </p>
                            <p className="text-lg font-semibold mt-2 sm:mt-0">Total Amount: Ksh {details.total.toFixed(2)}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default OrderTable;
