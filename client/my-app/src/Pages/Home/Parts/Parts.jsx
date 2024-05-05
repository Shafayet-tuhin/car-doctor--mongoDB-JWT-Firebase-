import React from 'react'
import one from '../../../assets/images/products/1.png' ;
import two from '../../../assets/images/products/2.png' ;
import three from '../../../assets/images/products/3.png' ;
import four from '../../../assets/images/products/4.png' ;
import five from '../../../assets/images/products/5.png' ;
import six from '../../../assets/images/products/6.png' ;

const Parts = () => {




    return (
        <div className='mt-[8.25rem] mb-32 '>
            <div className='flex flex-col gap-5 items-center mb-12'>
                <p className='font-bold text-xl text-[#FF3811]'>Popular Products</p>
                <p className='font-bold text-[2.8125rem] text-center'>Browse Our Products</p>
                <p className='text-[#737373] font-normal text-base leading-loose text-center lg:w-[44.8125rem]'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6'>

                <div className="card w-96 bg-base-100 shadow-xl items-center ">
                    <figure className="px-10 pt-10">
                        <img src={one} alt="Shoes" className="rounded-xl w-52 h-52" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="text-[#444444] text-3xl mb-2 font-bold">Car Disk Brake</h2>
                        <div className="flex items-center justify-end">
                            <p className='text-[#FF3811] font-semibold text-xl'>Price : $110.00</p>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl items-center ">
                    <figure className="px-10 pt-10">
                        <img src={two} alt="Shoes" className="rounded-xl w-52 h-52" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="text-[#444444] text-3xl mb-2 font-bold">Car Suspension</h2>
                        <div className="flex items-center justify-end">
                            <p className='text-[#FF3811] font-semibold text-xl'>Price : $80.00</p>
                        </div>
                    </div>
                </div>
          
                <div className="card w-96 bg-base-100 shadow-xl items-center ">
                    <figure className="px-10 pt-10">
                        <img src={four} alt="Shoes" className="rounded-x w-52 h-52l" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="text-[#444444] text-3xl mb-2 font-bold">Car Battery</h2>
                        <div className="flex items-center justify-end">
                            <p className='text-[#FF3811] font-semibold text-xl'>Price : $70.00</p>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl items-center ">
                    <figure className="px-10 pt-10">
                        <img src={five} alt="Shoes" className="rounded-x w-52 h-52l" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="text-[#444444] text-3xl mb-2 font-bold">Car Tire</h2>
                        <div className="flex items-center justify-end">
                            <p className='text-[#FF3811] font-semibold text-xl'>Price : $60.00</p>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl items-center ">
                    <figure className="px-10 pt-10">
                        <img src={six} alt="Shoes" className="rounded-xl w-52 h-52" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="text-[#444444] text-3xl mb-2 font-bold">Car Tools</h2>
                        <div className="flex items-center justify-end">
                            <p className='text-[#FF3811] font-semibold text-xl'>Price : $20.00</p>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl items-center ">
                    <figure className="px-10 pt-10">
                        <img src={three} alt="Shoes" className="rounded- w-52 h-52xl" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="text-[#444444] text-3xl mb-2 font-bold">Car Air Filter</h2>
                        <div className="flex items-center justify-end">
                            <p className='text-[#FF3811] font-semibold text-xl'>Price : $40.00</p>
                        </div>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default Parts