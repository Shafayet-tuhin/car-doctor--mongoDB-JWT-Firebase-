import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SingleService = ({ item }) => {

    const { _id, title, img, price } = item;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="text-[#444444] text-2xl font-bold">{title}</h2>
                <div className="flex items-center justify-end">
                    <p className='text-[#e46833e6] font-semibold text-xl'>Price : {price}$ </p>
                    <Link to={`/checkout/${_id}`} ><button className=' text-3xl text-orange-500 animate-pulse'><FaArrowCircleRight /></button> </Link>
                </div>
            </div>
        </div>
    )
}

export default SingleService