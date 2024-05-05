import React from 'react'
import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'
import Swal from 'sweetalert2'


const About = () => {

    const handleInfo = () => {
        Swal.fire({
            icon: "error",
            title: "Eitar Kaaj kori nai 😥 ,Niche Service er Kaaj korsi",

            footer: '<a href="#">Why do I have this issue?</a>'
          });
    }

    return (
        <div className="mt-24 ">
            <div className="hero-content flex-col lg:flex-row">
                <div className=' relative'>
                    <img src={person} className="w-[80%] rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-white" />
                </div>
                <div >

                    <h1 className="text-xl font-bold text-[#FF3811] mb-5">About Us</h1>

                    <p className=" text-5xl font-bold mb-7 ">We are qualified & of experience in this field.</p>

                    <p className='text-[#737373] font-normal text-base mb-5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

                    <p className='text-[#737373] font-normal text-base mb-7'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

                    <button className="bg-[#FF3811] text-white font-semibold text-lg px-4 py-2 rounded-lg" onClick={handleInfo}>Get More Info</button>
                </div>
            </div>
        </div>
    )
}

export default About