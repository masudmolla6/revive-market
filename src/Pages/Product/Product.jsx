import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { id, name, picture, category } = product;
    return (
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img
            src={picture}
            alt="Shoes"
            className='w-full h-64'
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <div className="card-actions justify-end">
            <Link to={`/usedProducts/${category}`} className="badge badge-outline hover:bg-blue-600 hover:text-white">See All</Link>
          </div>
        </div>
      </div>
    );
};

export default Product;