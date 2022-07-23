import Image from 'next/image'
import React from 'react'

const HomePage = () => {
  return (
    <div className='Hero'>
        <div className='Hero-body'>
            <div className='container w-full grid grid-cols-2 bg-teal-200'>
               <div className="left ">

               <h1 className='Title text-4xl text-blue-600 fill-teal-700 filter'>
                    Welcome to the Rahbar India
                </h1>
                <h2 className='subtitle text-lg font-normal text-grey-800 my-4'>
                We are a travel agency that specializes in tours of the India. We offer a wide variety of tours, from day trips to full day excursions, all designed to make you feel like you are in the area yourself. We can even help you plan your next adventure. We are here to make your trip a fun and adventure filled one.
                </h2>
               </div>
               <div className="right">
                {/* <Image src="/logo_rahbarindia.png" height={400} width={800} /> */}
               </div>
            </div>
        </div>

    </div>
  )
}

export default HomePage