import { Dialog } from '@headlessui/react';
import React from 'react';

const ProductModal = ({ isOpen, onClose, product }) => {
    // Destructure with default values to handle cases where product might be empty
    const {
        productName = 'Product Name',
        image = '',
        price = 0,
        stockStatus = 'Unknown',
        description = '',
    } = product || {};

    return (
        <Dialog open={isOpen} onClose={onClose} className="relative z-40 h-[90dvh]">
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            {
                product && (
                    <div className="fixed inset-0 flex items-center justify-center p-4 sm:h-[90dvh] h-[100dvh]">
                        <Dialog.Panel className="bg-white rounded-lg shadow-lg max-w-4xl w-full mx-auto my-auto sm:h-[90dvh]">
                            <div className="flex flex-col lg:flex-row h-full">
                                <div className="lg:w-1/2 w-full flex justify-center items-center bg-gray-100 p-2">
                                    <img
                                        src={product.productImage}
                                        alt={product.productName}
                                        className="w-full h-full object-cover hover:object-contain transition-all duration-200 p-4"
                                    />
                                </div>
                                <div className="lg:w-1/2 w-full sm:p-6 p-3 relative">
                                    <h2 className="text-2xl font-semibold mb-2">{product.productName}</h2>
                                    <p className="text-lg font-medium text-gray-800 mb-4">Ksh: {product.productPrice}</p>
                                    <p className="text-sm text-gray-500 mb-4">{product.stock}</p>
                                    <p className="text-sm text-gray-700 mb-6">{product.productDescription}</p>
                                    <div className="flex flex-row gap-4 absolute bottom-2">
                                        <button
                                            onClick={() => console.log('Add to Cart clicked')}
                                            className="px-4 py-2 bg-gray-200 text-black rounded hover:bg-white"
                                        >
                                            <i class="fa-solid fa-cart-shopping mr-2 text-lg"></i>Add to Cart
                                        </button>
                                        <button className="flex items-center justify-center gap-2 px-2 py-1 bg-[#181717] text-white border-none rounded-md outline outline-3 outline-[#181717] outline-offset-[-3px] cursor-pointer transition-colors duration-400 active:bg-transparent active:text-[#181717]">
                                            <svg viewBox="0 0 16 16" className="bi bi-cart-check h-6 w-6 transition-colors duration-400 active:fill-[#181717]" xmlns="http://www.w3.org/2000/svg" fill="#fff">
                                                <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"></path>
                                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                                            </svg>
                                            <p className="text-md transition-colors duration-400 active:text-[#181717]">Buy Now</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
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
                        </Dialog.Panel>
                    </div>
                )
            }
        </Dialog>
    );
};

export default ProductModal;
