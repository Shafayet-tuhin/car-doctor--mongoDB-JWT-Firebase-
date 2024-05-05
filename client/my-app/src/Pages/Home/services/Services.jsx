import React, { useEffect, useState } from 'react'
import SingleService from './SingleService'
import { TbCalendarTime } from "react-icons/tb";
import { FiPhoneCall } from "react-icons/fi";
import { FaMapLocationDot } from "react-icons/fa6";

const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://cor-doctor-server.vercel.app/services')
            .then((res) => res.json())
            .then((data) => setServices(data))
    }, [])



    return (
        <div className='mt-[8.25rem] mb-32 '>
            <div className='flex flex-col gap-5 items-center mb-12'>
                <p className='font-bold text-xl text-[#FF3811]'>Service</p>
                <p className='font-bold text-[2.8125rem] '>Our Service Area</p>
                <p className='text-[#737373] font-normal text-base leading-loose text-center lg:w-[44.8125rem]'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6'>
                {
                    services.map((el) => {
                        return (
                            <SingleService key={el._id} item={el} />
                        )
                    })
                }
            </div>



            <div className='flex flex-col lg:flex-row justify-between gap-9 lg:gap-0 bg-black lg:px-[4.5rem] lg:py-24 rounded-2xl mt-[8rem] py-6  items-center '>
                <div className='flex gap-5 items-center text-white w-72 lg:w-full'>
                    <TbCalendarTime className='text-orange-400 text-4xl ' />
                    <div className='flex flex-col gap-2 '>
                        <p className='lg:text-lg text-xl font-medium '>We are open monday-friday</p>
                        <p className='lg:text-3xl font-bold'>7:00 am - 9:00 pm</p>
                    </div>
                </div>
                <div className='flex gap-5 items-center text-white w-72 lg:w-full'>
                    <FiPhoneCall className='text-orange-400 text-4xl' />
                    <div className='flex flex-col gap-2 '>
                        <p className='lg:text-lg text-xl font-medium '>Have a question?</p>
                        <p className='lg:text-3xl font-bold'>+2546 251 2658</p>
                    </div>
                </div>
                <div className='flex gap-5 items-center text-white w-72 lg:w-full'>
                    <FaMapLocationDot className='text-orange-400 text-4xl' />
                    <div className='flex flex-col gap-2 '>
                        <p className='lg:text-lg text-xl font-medium '>Need a repair? our address</p>
                        <p className='lg:text-3xl font-bold'>Liza Street, New York</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Services