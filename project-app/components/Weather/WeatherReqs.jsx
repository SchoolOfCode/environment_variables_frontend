import React from 'react'

const WeatherReqs = () => {
  return (
    <div className='bg-blue-300 ml-4 mr-4 '>
        <h1 className='text-4xl font-bold ml-4'>Weather Requirements</h1>
        <div className='flex justify-evenly'>
        <div>
            
            <h2 className='text-2xl font-bold ml-4'>Hot weather</h2>
            <p className='ml-4'>For hotter weather here are some things we recommend:</p>
                <ul className='ml-4'>
                    <li>Sun-screen</li>
                    <li>Hat</li>
                    <li>Sunglasses</li>
                    <li>Water</li>
                </ul>
        </div>
        <div>
            <h2 className='text-2xl font-bold ml-4'>Cold weather</h2>
            <p className='ml-4'>For colder weather here are some things we recommend:</p>
            <ul className='ml-4'>
                <li>Warm headwear</li>
                <li>Jacket</li>
                <li>Gloves</li>
                <li>Water-proof boots</li>
                <li>Thick socks</li>
            </ul>
            
            </div>
        </div>
    </div>
  )
}

export default WeatherReqs