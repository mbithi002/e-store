import { Dialog } from '@headlessui/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import userConfig from '../../../appwrite/userConfig';
import { fetchAddresses } from '../../../features/user/addresses/addressThunks';
import { CustomCheckBoxComponent, InputComponent, SelectComponent, WifiLoaderComponent } from '../../components';

const CreateAddress = ({ isOpen, onClose }) => {
    const { userData } = useSelector((state) => state.auth);
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const { register, handleSubmit, setValue, watch } = useForm({
        defaultValues: {
            userId: userData.$id,
            name: userData.name,
            phone: Number(userData.phone) || '',
            county: '',
            town: '',
            location: '',
            defaultAddress: false,
        }
    });

    const create = async (data) => {
        setError('')
        setLoading(true)
        try {
            const res = await userConfig.createAddress({
                userId: userData.$id,
                defaultAddress: data.defaultAddress,
                name: data.name,
                phone: Number(data.phone),
                county: data.county,
                town: data.town,
                location: data.location
            });
            if (res) {
                setLoading(false);
                dispatch(fetchAddresses(userData.$id))
                onClose()
            } else {
                setLoading(false);
                setError('Failed to create address! Please try again later.');
            }
        } catch (error) {
            setLoading(false);
            setError(error.message);
            console.log(error);
        }
    };

    // Watch the 'defaultAddress' field to get its current value
    const defValue = watch('defaultAddress');

    return (
        <Dialog open={isOpen} onClose={onClose} className="relative z-40 h-[95dvh]">
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            <div className="fixed inset-0 flex items-center justify-center p-4 sm:h-[90dvh] h-[100dvh]">
                <Dialog.Panel className="bg-white rounded-lg shadow-lg max-w-4xl w-full mx-auto my-auto sm:h-[90dvh] h-[90dvh]">
                    {
                        loading ? (
                            <div className='w-full h-full flex flex-col items-center'>
                                <div className="my-auto">
                                    <WifiLoaderComponent message='Creating Address' />
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className="w-full p-2 text-center font-semibold text-green-500 text-xl">
                                    Fill out the Fields below and Submit
                                </div>
                                <form onSubmit={handleSubmit(create)} className="relative w-full flex flex-col items-start justify-between p-4">
                                    {error && (
                                        <p className="text-red-400 text-md">{error}</p>
                                    )}
                                    <InputComponent
                                        label="Address Name:"
                                        Placeholder="Enter name..."
                                        className="mb-4 focus:bg-blue-200 focus:text-white w-full bg-gray-100 shadow-md"
                                        {...register("name", { required: true })}
                                    />
                                    <InputComponent
                                        type='cell'
                                        label="Cell Phone:"
                                        Placeholder="Enter phone..."
                                        className="mb-4 focus:bg-blue-200 focus:text-white w-full bg-gray-100 shadow-md"
                                        {...register("phone", { required: true })}
                                    />
                                    <p className="self-center text-center my-2">Address Location</p>
                                    <div className="grid sm:grid-cols-3 items-center content-center w-full mx-auto">
                                        <SelectComponent
                                            label="County"
                                            options={["Nairobi", "Machakos"]}
                                            className="bg-green-500 text-black focus:bg-green-300 focus:text-white"
                                            {...register("county", { required: true })}
                                            onChange={(e) => setValue('county', e.target.value)}
                                        />
                                        <SelectComponent
                                            label="Town"
                                            options={["Tala", "Embakasi"]}
                                            className="bg-green-500 text-black focus:bg-green-300 focus:text-white"
                                            {...register("town", { required: true })}
                                            onChange={(e) => setValue('town', e.target.value)}
                                        />
                                        <SelectComponent
                                            label="Pick up Station"
                                            options={["Tala", "station2"]}
                                            className="bg-green-500 text-black focus:bg-green-300 focus:text-white"
                                            {...register("location", { required: true })}
                                            onChange={(e) => setValue('station', e.target.value)}
                                        />
                                    </div>
                                    <div className="flex flex-row w-full self-start items-center my-2">
                                        <CustomCheckBoxComponent
                                            type="checkbox"
                                            className="mt-2 mx-2"
                                            {...register("defaultAddress")}
                                            checked={defValue}
                                            onChange={() => setValue('defaultAddress', !defValue)}
                                        />
                                        <p className="ml-2">Set as default address</p>
                                    </div>
                                    <button className="bg-blue-500 text-white text-xl text-center font-semibold w-full p-1 rounded-md sm:mt-10">Submit</button>
                                </form>
                                <button
                                    onClick={onClose}
                                    className="absolute top-2 right-2 p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                                >
                                    <span className="sr-only">Close</span>
                                    <svg
                                        className="w-6 h-6 text-gray-800"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </>
                        )
                    }
                </Dialog.Panel >
            </div >
        </Dialog >
    );
};

export default CreateAddress;
