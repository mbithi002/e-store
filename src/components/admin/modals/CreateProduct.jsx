import { Dialog } from '@headlessui/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import adminConfig from '../../../appwrite/adminConfig';
import { fetchAllproducts } from '../../../features/user/shop/productThunks';
import { CustomCheckBoxComponent, InputComponent, SelectComponent, WifiLoaderComponent } from '../../components';
import ProductCard from '../../shop/ProductCard';

const CreateProduct = ({ isOpen, onClose }) => {
    const { register, handleSubmit, watch, setValue } = useForm({
        defaultValues: {
            name: '',
            price: '',
            image: '',
            description: '',
            category: '',
            quantity: '',
            status: true,
            tags: [],
            reviews: [],
            rating: 5,
            featured: false,
            newProduct: false,
        }
    });
    const dispatch = useDispatch();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)

    const create = async (data) => {
        setError('')
        setLoading(true)
        console.log(data);

        try {
            const res = await adminConfig.createProduct(
                data.name,
                Number(data.price),
                data.image,
                data.description,
                data.category,
                Number(data.quantity),
                data.status === 'Active',
                Number(data.rating),
                data.reviews,
                data.tags,
                data.category,
                data.featured,
                data.newProduct
            );
            console.log(data.reviews);

            if (res) {
                dispatch(fetchAllproducts())
                setLoading(false)
                onClose()
            } else {
                setError('Failed to create')
                setLoading(false)
            }
        } catch (error) {
            setLoading(false)
            setError(error.message)
        }
    };

    const handleTagsChange = (e) => {
        const tagsArray = e.target.value.split(',').map(tag => tag.trim());
        setValue('tags', tagsArray);
    };

    // Watch all form fields
    const formValues = watch();

    return (
        <div>
            <Dialog open={isOpen} onClose={onClose} className="relative z-40 min-h-[95dvh]">
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <Dialog.Panel className="bg-white rounded-lg shadow-lg max-w-5xl w-full mx-auto my-auto min-h-[90dvh] max-h-full overflow-y-auto py-4">
                        <p className="text-center text-black text-xl font-semibold">
                            Create Product
                        </p>
                        {error && (
                            <p className="text-center text-red-500">{error}</p>
                        )}
                        {loading ? (
                            <div className='w-full h-full flex flex-col items-center'>
                                <div className="my-auto">
                                    <WifiLoaderComponent message='Creating product' />
                                </div>
                            </div>
                        )
                            :
                            (<form onSubmit={handleSubmit(create)} className="px-5 w-full flex flex-col">
                                <div className="grid sm:grid-cols-12 gap-2">
                                    <div className="sm:col-span-8 flex flex-col shadow-lg p-2 bg-gray-100">
                                        <InputComponent
                                            label='Name'
                                            placeholder='Enter product name'
                                            className='w-full text-black focus:bg-blue-300 transition-all duration-150'
                                            {...register('name', { required: true })}
                                        />
                                        <InputComponent
                                            type='number'
                                            label='Price'
                                            placeholder='Enter product price'
                                            className='w-full text-black focus:bg-blue-300 transition-all duration-150'
                                            {...register('price', { required: true })}
                                        />
                                        <InputComponent
                                            label='Image'
                                            placeholder='Paste URL'
                                            className='w-full text-black focus:bg-blue-300 transition-all duration-150'
                                            {...register('image', { required: true })}
                                        />
                                        <InputComponent
                                            label='Description'
                                            placeholder="Enter product's description"
                                            className='w-full text-black focus:bg-blue-300 transition-all duration-150'
                                            {...register('description', { required: true })}
                                        />
                                        <div className="grid grid-cols-3 mt-2 gap-2 shadow-lg p-2">
                                            <InputComponent
                                                type='number'
                                                label='Quantity/count'
                                                placeholder="quantity"
                                                className='w-full text-black focus:bg-blue-300 transition-all duration-150'
                                                {...register('quantity', { required: true })}
                                            />
                                            <SelectComponent
                                                label='Category'
                                                options={['skin care', 'Body lotion', 'serums']}
                                                {...register('category', { required: true })}
                                            />
                                            <SelectComponent
                                                label='Status'
                                                options={['Active', 'In-active']}
                                                {...register('status', { required: true })}
                                            />
                                        </div>
                                        <div className="grid grid-cols-3 gap-3 w-full shadow-lg py-3 px-3">
                                            <div className="flex flex-row items-center">
                                                <InputComponent
                                                    placeholder="face, skin, body, lotion, serum"
                                                    className='w-full text-black focus:bg-blue-300 transition-all duration-150'
                                                    onChange={handleTagsChange}
                                                />
                                            </div>
                                            <div className="flex flex-row items-center w-1/3">
                                                <CustomCheckBoxComponent
                                                    checked={formValues.featured}
                                                    {...register('featured')}
                                                    onChange={() => setValue("featured", !formValues.featured)}
                                                />
                                                <p className="ml-2">Featured</p>
                                            </div>
                                            <div className="flex flex-row items-center w-1/3">
                                                <CustomCheckBoxComponent
                                                    checked={formValues.newProduct}
                                                    {...register('newProduct')}
                                                    onChange={() => setValue('newProduct', !formValues.newProduct)}
                                                />
                                                <p className="ml-2">New</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm:col-span-4 flex flex-col items-center shadow-lg p-3 bg-gray-200">
                                        <p className="text-center font-semibold text-xl">
                                            Preview
                                        </p>
                                        <div readOnly={true} className="">
                                            <ProductCard
                                                productName={formValues.name}
                                                price={formValues.price}
                                                image={formValues.image}
                                                description={formValues.description}
                                                stock={formValues.status}
                                                inActive={true}
                                                isNew={formValues.newProduct}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="mt-4 transition-all duration-150 w-1/2 self-center bg-blue-500 text-white text-xl font-semibold p-1 rounded-md hover:bg-blue-400">Submit</button>
                            </form>)
                        }
                    </Dialog.Panel>
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
                </div>
            </Dialog>
        </div>
    );
};

export default CreateProduct;
