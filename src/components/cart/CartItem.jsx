import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItemFromCart } from '../../features/user/cart/cartThunks';
import CustomCheckbox from '../common/CustomCheckbox';

const CartItem = ({ id = '', image = '', name = '', quantity = 1, description = '', price = 0 }) => {
    const { userData } = useSelector((state) => state.auth)
    const [checked, setChecked] = useState(false);
    const dispatch = useDispatch()

    const handleRemoveFromCart = (productId) => {
        dispatch(deleteItemFromCart({ userId: userData.$id, productId }))
    }

    const handleCheckboxChange = (event) => {
        setChecked(event.target.checked);
    };
    return (
        <div key={id} className="flex flex-col p-2 bg-gray-200 m-2 rounded-md shadow-lg">
            <div className="flex flex-row h-[9rem] py-2 relative">
                <div className="absolute top-2 left-0 flex flex-row size-5 items-center justify-center">
                    <CustomCheckbox checked={checked} onChange={(e) => handleCheckboxChange(e)} />
                </div>
                <img src={image} alt={name} className="h-[inherit] w-[7rem] object-cover" />
                <div className="flex flex-col items-start px-2">
                    <p className="font-semibold text-xl">{name}</p>
                    <p className="text-sm">{description}</p>
                    <p className="text-sm p-1 mt-1 border border-black rounded-md">Ksh: <span className="font-bold">{price}</span></p>
                    <div className="flex w-full flex-row justify-between my-2">
                        <div onClick={() => handleRemoveFromCart(id)} className="cursor-pointer flex items-center">
                            <i class="fa-solid fa-trash"></i>
                        </div>
                        <div className="flex flex-row items-center justify-around self-end">
                            <button className="">
                                <i class="fa-solid fa-plus mx-2"></i>
                            </button>
                            <span className="underline">{quantity}</span>
                            <button className="">
                                <i class="fa-solid fa-minus mx-2"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem