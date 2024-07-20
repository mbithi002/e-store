import React, { useState } from 'react';
import ProductModal from '../modals/ProductModal';
import { featuredProducts } from './featuredProducts';

const FeaturedProducts = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalProduct, setModalProduct] = useState({})
    const handleModal = (id) => {
        const prod = featuredProducts.find((product) => product.id === id)
        setModalProduct(prod)
        setIsModalOpen(true)
    }

    return (
        <>
            <ProductModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} product={modalProduct} />
            <div className="grid sm:grid-cols-4 gap-4 px-10 rounded-md">
                {featuredProducts.map((product) => (
                    <div key={product.id} className="sm:h-[40dvh] h-[23rem] my-5 sm:w-[10rem] w-[16rem] mx-auto shadow-lg flex flex-col">
                        <div className="h-[30dvh] w-full flex items-center justify-center relative">
                            {product.new && (
                                <div className="absolute top-2 left-2 h-8 w-8 flex items-center justify-center rounded-full bg-black text-white text-xs">
                                    New
                                </div>
                            )}
                            <img
                                src={product.image}
                                alt={product.productName}
                                className="w-full h-full object-cover"
                            />
                            <div onClick={() => handleModal(product.id)} className="absolute -bottom-3 -right-3 flex items-center p-1 rounded-full bg-gray-800 text-white hover:text-black hover:bg-gray-200 hover:scale-110 transition-transform duration-300 cursor-pointer">
                                <i className="fa-solid fa-eye text-md"></i>
                            </div>
                        </div>
                        <div className="h-[10dvh] w-full text-gray-700 text-center py-1">
                            <p className="text-md font-semibold">{product.productName}</p>
                            <p className="text-sm">{product.description.length > 20 ? `${product.description.slice(0, 20)}...` : product.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default FeaturedProducts;
