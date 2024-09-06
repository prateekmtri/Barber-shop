import React from 'react'
import Layout from '@/app/Pages/Layout/page'

const page = () => {
  return (
    <div>
<Layout>
        <div className='flex-none lg:flex pl-2 lg:pl-32 pt-24'>
        <div className='h-[600px] lg:h-[700px] lg:w-[640px] bg-[#191c24] '>
        <div className='pl-8 pt-32'>
        <h1 className='text-red-700 bg-black h-9 w-32 pt-1 pl-3 '>Price & Plan</h1>
        <h1 className=' text-3xl lg:text-4xl font-semibold tracking-tighter pt-6'>CHECK OUT OUR BARBER</h1>
        <h1 className='text-3xl lg:text-4xl font-semibold tracking-tighter pt-2'>Services AND PRICES</h1>
      </div>
      <div className='flex justify-between text-lg font-semibold pt-8'>
        <h1 className='pl-8'>HAIRCUT</h1>
        <p className='pr-8'>$29.00</p>
      </div>

      <div className='flex justify-between text-lg font-semibold pt-3'>
        <h1 className='pl-8'>Beard Trim</h1>
        <p className='pr-8'>$35.00</p>
      </div>

      <div className='flex justify-between text-lg font-semibold pt-3'>
        <h1 className='pl-8'>Mans Shave</h1>
        <p className='pr-8'>$23.00</p>
      </div>

      <div className='flex justify-between text-lg font-semibold pt-3 '>
        <h1 className='pl-8'>Hair Dyeing</h1>
        <p className='pr-8'>$19.00</p>
      </div>

      <div className='flex justify-between text-lg font-semibold pt-3 '>
        <h1 className='pl-8'>Mustache</h1>
        <p className='pr-8'>$15.00</p>
      </div>

      <div className='flex justify-between text-lg font-semibold  pt-3'>
        <h1 className='pl-8'>Stacking</h1>
        <p className='pr-8'>$39.00</p>
      </div>
        </div>

        <div>
            <img src='https://demo.htmlcodex.com/2315/hair-salon-html-template/img/price.jpg ' className='h-[500px] lg:h-[700px] w-[400px] lg:w-[640px] pt-10 lg:pt-0'></img>
        </div>
       
      


        </div>
        </Layout>
    </div>
  )
}

export default page
