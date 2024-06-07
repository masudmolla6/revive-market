import { useEffect, useState } from 'react';
import BookCard from './BookCard';

const Cart = () => {
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/bookings`)
        .then(res=>res.json())
        .then(data=>{
            setBookings(data)
        })
    }, [])
    
    return (
        <div className='my-10'>
            <h1 className='text-2xl text-center py-5'>Booking Card</h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center'>
          {bookings.map((book) => (
            <BookCard key={book._id} book={book}></BookCard>
          ))}
        </div>
      </div>
    );
};

export default Cart;