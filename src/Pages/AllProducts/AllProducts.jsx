import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductsCard from '../ProductsCard/ProductsCard';

const AllProducts = () => {
    const products = useLoaderData();
    console.log(products);
    return (
      <div className="mx-5">
        <h1 className="text-center py-4 text-3xl">Products</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center">
          {products.map((product) => (
            <ProductsCard key={product._id} product={product}></ProductsCard>
          ))}
        </div>
      </div>
    );
};

export default AllProducts;