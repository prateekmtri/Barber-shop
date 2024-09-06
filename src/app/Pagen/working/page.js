import React from 'react'
import Layout from '@/app/Pages/Layout/page'

const page = () => {
  return (
    <div>
      <Layout>

        <div className='flex-none lg:flex pb-40 pl-0 lg:pl-24'>
        <div className='pb-20 lg:pb-0'>
        <img src='https://demo.htmlcodex.com/2315/hair-salon-html-template/img/open.jpg' className='h-[450px] lg:h-[670px] w-[400px] lg:w-[670px] '></img>
      </div>
      <div className='bg-[#191c24] h-[700px] lg:h-[670px] w-[380px] lg:w-[670px] '>

        <div className='pl-12 pt-24'>
          <h1 className='bg-black h-10 w-36 text-red-700 pl-4 pt-1'>Working Hours</h1>
          <h1 className='text-4xl lg:text-5xl font-semibold tracking-tighter pt-5'>Professional Barbers Are</h1>
          <h1 className='text-4xl lg:text-5xl font-semibold tracking-tighter'>Waiting For You</h1>
        </div>
        <div className='pt-10 pl-12 flex justify-between'>
          <h1 className='text-lg font-semibold tracking-tighter'>MONDAY</h1>
          <h1 className='pr-16 text-lg'>09 AM - 09 PM</h1>
        </div>



        <div className='pt-3 pl-12 flex justify-between'>
          <h1 className='text-lg font-semibold tracking-tighter'>TUESDAY</h1>
          <h1 className='pr-16 text-lg'>09 AM - 09 PM</h1>
        </div>

        <div className='pt-3 pl-12 flex justify-between'>
          <h1 className='text-lg font-semibold tracking-tighter'>WEDNESDAY</h1>
          <h1 className='pr-16 text-lg'>09 AM - 09 PM</h1>
        </div>

        <div className='pt-3 pl-12 flex justify-between'>
          <h1 className='text-lg font-semibold tracking-tighter'>THURSDAY</h1>
          <h1 className='pr-16 text-lg'>09 AM - 09 PM</h1>
        </div>

        <div className='pt-3 pl-12 flex justify-between'>
          <h1 className='text-lg font-semibold tracking-tighter'>FRIDAY</h1>
          <h1 className='pr-16 text-lg '>09 AM - 09 PM</h1>
        </div>


        <div className='pt-3 pl-12 flex justify-between'>
          <h1 className='text-lg font-semibold tracking-tighter'>SAT/SUN</h1>
          <h1 className='pr-16 text-lg text-red-700 font-semibold tracking-tighter'>CLOSED</h1>
        </div>
        </div>
        


      </div>
      </Layout>
    </div>
  )
}

export default page
