import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    console.log(products);
    useEffect(() => {
        fetch(`http://localhost:5000/usedProducts`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])
    
    return (
        <div className='mx-5'>
            <h1 className='text-center py-4 text-3xl'>Products</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center'>
                {products.map(product=> <Product key={product._id} product={product}></Product>)}
            </div>
        </div>
    );
};

export default Products;