import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';

const CategorizedProds = ({ CategorizedProds }) => {
    const navigate = useNavigate();
    const handleCardClick = (id) => {
        navigate(`/product/${id}`);
    };

    if (CategorizedProds?.length < 1) return (
        <div className="text-center w-full h-full">No products in this category</div>
    )
    return (
        <>
            {
                CategorizedProds.map((product) => (
                    <div className="" key={product.$id}>
                        <ProductCard
                            id={product.$id}
                            productName={product.productName}
                            price={product.productPrice}
                            image={product.productImage}
                            description={product.productDescription}
                            rating={product.productRating}
                            stock={product.status}
                            onClick={() => handleCardClick(product.$id)}
                        />
                    </div>
                ))
            }
        </>
    )
}

export default CategorizedProds