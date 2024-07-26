import { Dialog } from '@headlessui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import userConfig from '../../../appwrite/userConfig'
import { fetchAddresses } from '../../../features/user/addresses/addressThunks'
import useAddresses from '../../../hooks/useAddresses'
import { WifiLoaderComponent } from '../../components'

const ConfirmAddressDelete = ({ itemId, isOpen, onClose }) => {
    const dispatch = useDispatch()
    const { userData } = useSelector((state) => state.auth)
    const { addresses, fetching, error: fetchingError } = useAddresses(userData.$id)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const item = addresses.find((item) => item.$id === itemId)

    const handleDeleteAddress = async (itemId) => {
        setError('')
        setLoading(true)
        try {
            const res = await userConfig.deleteAddress(itemId);
            if (res) {
                setLoading(false);
                dispatch(fetchAddresses(userData.$id))
                onClose()
            } else {
                setLoading(false);
                setError('Failed to delete address! Please try again later.');
            }
        } catch (error) {
            setLoading(false);
            setError(error.message);
            console.log(error);
        }
    }

    return (
        <div>
            <Dialog open={isOpen} onClose={onClose} className="relative z-40 h-[95dvh]">
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                <div className="fixed inset-0 flex items-center justify-center p-4 sm:h-[90dvh] h-[100dvh]">
                    <Dialog.Panel className="bg-white rounded-lg shadow-lg max-w-4xl sm:w-[50vw] w-full mx-auto my-auto sm:h-[50dvh] h-[50dvh] p-5">
                        {
                            fetching || loading && (
                                <div className='w-full h-full flex flex-col items-center'>
                                    <div className="my-auto">
                                        <WifiLoaderComponent message='Deleting Address' />
                                    </div>
                                </div>
                            )
                        }
                        {
                            fetchingError || error && (
                                <div className='w-full h-full flex flex-col items-center'>
                                    <div className="my-auto">
                                        {error || fetchingError}
                                    </div>
                                </div>
                            )
                        }
                        {
                            !fetching && !fetchingError && item && !loading && !error && (
                                <div key={item.$id} className="relative address-card flex flex-col items-start p-4 justify-normal rounded-md shadow-lg w-full h-full">
                                    <p className="text-center font-semibold text-xl text-red-500 self-center mb-2">Delete Address</p>
                                    <div className="w-full flex flex-row justify-between">
                                        <p>
                                            <i className="fa-solid fa-user mx-2 text-lg text-black"></i>
                                            {item && item.name}
                                        </p>
                                        <p className='text-green-500 font-semibold'>
                                            Pickup Station
                                        </p>
                                    </div>
                                    <p className="my-2"><i className="fa-solid fa-phone mx-2"></i> {item.phone} </p>
                                    <p className="my-2 text-sm">
                                        <i className="fa-solid fa-location-dot mx-2 text-lg"></i>
                                        {`${item.county} County, ${item.town} Town, ${item.location}`}
                                    </p>
                                    <div className="flex flex-row items-center self-end">
                                        {
                                            !item.defaultAddress && (
                                                <button className="py-1 px-2 bg-green-500 rounded-sm text-white">Default Address</button>
                                            )
                                        }
                                    </div>
                                    <div className="flex flex-row justify-between items-center w-full">
                                        <button onClick={onClose} className="transition-all duration-200 py-2 w-2/3 m-2 bg-blue-500 active:bg-blue-500 hover:bg-blue-400 text-white text-md rounded-sm">
                                            Cancel
                                            <i className="mx-1 fa-solid fa-circle-xmark text-xs"></i>
                                        </button>
                                        <button onClick={() => handleDeleteAddress(item.$id)} className="py-2 w-2/3 m-2 bg-red-500 hover:bg-red-400 active:bg-red-500 transition-all duration-200 text-white text-md rounded-sm">
                                            Delete
                                            <i className="mx-1 fa-solid fa-trash text-xs"></i>
                                        </button>
                                    </div>
                                </div>
                            )
                        }
                    </Dialog.Panel >
                </div >
            </Dialog >
        </div>
    )
}

export default ConfirmAddressDelete