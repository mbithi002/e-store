import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAllproducts } from '../../features/user/shop/productThunks';
import useProduct from '../../hooks/useProduct';
import useRelatedProducts from '../../hooks/useRelatedProducts';
import { ProductCardComponent } from '../components';
import ReadOnlyRating from '../shop/ReadOnlyRating';

const Product = () => {
    const dispatch = useDispatch();
    const { slug } = useParams();

    const { product, fetching, error } = useProduct(slug);
    const { relatedProducts, fetchingRelatedProducts, relatedProductsError } = useRelatedProducts(product?.categoryId);

    useEffect(() => {
        if (!product) dispatch(fetchAllproducts());
    }, [product, dispatch]);

    if (fetching) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!product) return <div>Product not found</div>;

    return (
        <div className="w-[100vw] h-full">
            <div className="container">
                <div className="grid sm:grid-cols-12 grid-cols-1 gap-4 px-5 my-2">
                    <div className="sm:col-span-4 flex items-center shadow-lg">
                        <img src={product.productImage} alt={product.productName} className="hover:object-contain hover:brightness-[70%] transition-all duration-200 ease-in-out object-cover sm:h-[70dvh] h-[50dvh] mx-auto" />
                    </div>
                    <div className="sm:col-span-8 flex w-full h-full flex-col justify-between mx-auto p-3 shadow-lg">
                        <button className="text-center bg-black p-2 mb-5">
                            <p className="text-gray-100 text-xl font-bold">{product.productName}
                                <span className="text-sm ml-4">Ksh: </span>
                                <span className="bg-transparent p-1 mx-2 rounded-md text-lg font-semibold border border-white">
                                    {product.productPrice}
                                </span>
                            </p>
                        </button>
                        <div className="">
                            <p className="text-xl font-semibold text-teal-500 mb-3">Description</p>
                            <p className="text-lg text-black mb-3">{product.productDescription}</p>
                        </div>
                        <div className="flex flex-col items-start">
                            <p className="text-lg font-semibold underline text-teal-500">Usage</p>
                            <p className="text-sm leading-6 mb-5">
                                Cosmetic Product Landing Page UI Design
                                Cosmetic Product Landing Page UI Design designed by Code Astrology. Connect with them on Dribbble; the global community for designers and creative professionals.
                            </p>
                        </div>
                        <div className="flex flex-row items-center">
                            <p className="text-lg font-bold text-black">Ratings: </p>
                            <div className="self-center my-auto">
                                <ReadOnlyRating rating={product.rating} />
                            </div>
                        </div>
                        <div className="sm:my-1 my-3 w-full flex flex-row">
                            <button className="m-1 flex items-center w-1/2 justify-center gap-2 sm:px-2 py-1 bg-[#181717] text-white border-none  outline outline-3 outline-[#181717] outline-offset-[-3px] cursor-pointer transition-colors duration-400 active:bg-transparent active:text-[#181717]">
                                <svg viewBox="0 0 16 16" className="bi bi-cart-check h-6 w-6 transition-colors duration-400 active:fill-[#181717]" xmlns="http://www.w3.org/2000/svg" fill="#fff">
                                    <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"></path>
                                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                                </svg>
                                <p className="text-xl font-bold transition-colors duration-400 active:text-[#181717]">Buy Now</p>
                            </button>
                            <button className="w-1/2 bg-gray-500 text-white m-1 p-1 text-xl font-bold text-center">
                                Add to cart <i className="mx-2 text-lg fa-solid fa-shopping-cart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-2 bg-gray-200 w-full p-4 content-center">
                <p className="text-center text-lg font-semibold text-black">Customer reviews</p>
                <div className="grid sm:grid-cols-2 gap-4 sm:px-10 px-3 py-3">
                    <div className="flex flex-row shadow-[100rem] rounded-md p-2 h-fit bg-white">
                        <div className="h-[5rem] w-[5rem] rounded-[2.5rem] mx-2">
                            <img src="https://i.pinimg.com/474x/c5/ba/ab/c5baab2f60c965c957904782186a62d2.jpg" alt="" className="object-contain h-[inherit] w-[inherit]" />
                        </div>
                        <div className="w-full flex flex-col items-start justify-around">
                            <div className="flex flex-row w-full justify-between items-center shadow-md p-1 rounded-md">
                                <p className="text-black text-md font-semibold">
                                    <i className="mx-1 fa-solid fa-circle-user text-sm"></i>
                                    names
                                </p>
                                <p className="text-black text-sm">21/04/2023</p>
                            </div>
                            <p className="">Good product and on time delivery</p>
                            <div className="flex flex-row w-full">
                                <p className="text-sm">Rating: </p>
                                <ReadOnlyRating rating={4.5} />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row shadow-[100rem] rounded-md p-2 h-fit bg-white">
                        <div className="h-[5rem] w-[5rem] rounded-[2.5rem] mx-2">
                            <img src="https://i.pinimg.com/474x/c5/ba/ab/c5baab2f60c965c957904782186a62d2.jpg" alt="" className="object-contain h-[inherit] w-[inherit]" />
                        </div>
                        <div className="w-full flex flex-col items-start justify-around">
                            <div className="flex flex-row w-full justify-between items-center shadow-md p-1 rounded-md">
                                <p className="text-black text-md font-semibold">
                                    <i className="mx-1 fa-solid fa-circle-user text-sm"></i>
                                    names
                                </p>
                                <p className="text-black text-sm">21/04/2023</p>
                            </div>
                            <p className="">Good product and on time delivery</p>
                            <div className="flex flex-row w-full">
                                <p className="text-sm">Rating: </p>
                                <ReadOnlyRating rating={4.5} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container p-5">
                <p className="text-center font-semibold text-xl">Related Products</p>
                <div className="flex h-[] w-full overflow-x-scroll my-4">
                    {
                        relatedProducts.map((product) => (
                            <div key={product.$id} className="mx-3">
                                <ProductCardComponent
                                    id={product.$id}
                                    productName={product.productName}
                                    price={product.productPrice}
                                    image={product.productImage}
                                    description={product.productDescription}
                                    rating={product.productRating}
                                    stock={product.status}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;
