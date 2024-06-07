import React from 'react';

const BookCard = ({ book }) => {
    console.log(book);
    const { name, product, location, phone, price, email} = book;
    return (
      <div className="card w-96 bg-primary text-primary-content shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{product}</h2>
            <h3 className="card-title">{name}</h3>
            <p>Price: ${ price}</p>
          <div className="card-actions justify-end">
            <p>{email}</p>
            <p>{phone}</p>
            <p>{ location}</p>
          </div>
        </div>
      </div>
    );
};

export default BookCard;