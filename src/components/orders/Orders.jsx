import React from 'react'
import OrderTable from './OrderTable'
import { orders } from './orderItems'

const Orders = () => {
    return (
        <>
            <OrderTable orderData={orders} />
        </>
    )
}

export default Orders