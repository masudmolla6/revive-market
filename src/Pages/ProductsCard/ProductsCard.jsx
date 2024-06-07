import React from 'react';
import { Link } from 'react-router-dom';

const ProductsCard = ({ product }) => {
  const { name, picture, location, originalPrice, salePrice, sellerName, _id, useTime } = product;


  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const  name= form.name.value;
    const  location= form.location.value;
    const  phone= form.phone.value;
    const  product= form.product.value;
    const  price= form.price.value;
    const  picture= form.picture.value;

    const booking = { email, name, location, phone, product, price, picture }
    
    console.log(booking);

    fetch(`http://localhost:5000/bookings`, {
      method: "POST",
      headers: {
        "content-type":"application/json"
      },
      body: JSON.stringify(booking)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          form.reset();
          alert("Added Booking");
        }
    })


  }


    return (
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img src={picture} alt="Shoes" className="w-full h-64" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">{useTime} Year</div>
          </h2>
          <p>OrginalPrice: {originalPrice}</p>
          <p>SalePrice: {salePrice}</p>
          <p>SellerName: {sellerName}</p>
          <div className="card-actions justify-end">
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Add To Cart
            </button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <div className="hero min-h-screen bg-base-200">
                  <div className="hero-content flex-col w-full">
                    <div className="text-center lg:text-left">
                      <h1 className="text-5xl font-bold">Book now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                      <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Your Email</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            placeholder="email"
                            className="input input-bordered"
                            required
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Your Name</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            placeholder="Enter Your Name"
                            className="input input-bordered"
                            required
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Meeting Location</span>
                          </label>
                          <input
                            type="text"
                            name="location"
                            placeholder="Enter Meeting Location"
                            className="input input-bordered"
                            required
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Your Phone Number</span>
                          </label>
                          <input
                            type="text"
                            name="phone"
                            placeholder="Enter Your Number"
                            className="input input-bordered"
                            required
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Product Name</span>
                          </label>
                          <input
                            type="text"
                            name="product"
                            placeholder="Enter Product Name"
                            className="input input-bordered"
                            required
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Purchase price</span>
                          </label>
                          <input
                            type="text"
                            name="price"
                            placeholder="Enter Price"
                            className="input input-bordered"
                            required
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Product Picture</span>
                          </label>
                          <input
                            type="text"
                            name="picture"
                            placeholder="Enter Product photo"
                            className="input input-bordered"
                            required
                          />
                        </div>
                        <div className="form-control mt-6">
                          <input
                            className="btn btn-primary"
                            type="submit"
                            value="Submit"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    );
};

export default ProductsCard;