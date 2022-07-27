import React from 'react'
import CardSwipe from '../components/Treks/CardSwipe'
import TrekComp from '../components/Treks/TrekComp'

const Treks = () => {
  return (
    <div className="w-full">
        <div className='container mx-auto mt-5'>
        <div className="bg-grey-200">
            <h1 className='text-4xl my-2 text-green-600'>Best Treks</h1>
        <CardSwipe/>
        </div>
    </div>
    </div>
  )
}

export default Treks