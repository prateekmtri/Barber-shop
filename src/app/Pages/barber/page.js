import React from 'react'
import Image from 'next/image'
import Facebook from '../working/prateekfacebook.png'
import Insta  from '../working/prateekinsta.png'
import Twitter from '../working/prateektwitter.png'

const page = () => {
  return (
    <div>
       <div>
        <div className='pt-20 pl-24 lg:pl-[700px]'>
             <h1 className='text-red-700 bg-[#191c24] h-10 w-36 pl-7 pt-2'>Our Barber</h1>
         </div>
         <div className='pl-14 lg:pl-[630px] pt-5'>
             <h1 className='text-3xl lg:text-4xl font-semibold tracking-tighter '>MEET OUR BARBER</h1>
         </div>
       </div>







      <div className=' flex-none lg:flex'>

      <div className='pb-20 pt-20 pl-5 lg:pl-24 '>
        <img src='https://demo.htmlcodex.com/2315/hair-salon-html-template/img/team-1.jpg' className='h-96 w-80 '></img>
        <div className='flex absolute lg:inset-x-24 inset-y-[5248px] lg:inset-y-[3400px] opacity-0 hover:opacity-100 gap-2 duration-500 delay-75 bg-opacity-0 hover:bg-opacity-65  hover:bg-black h-96 w-80 pt-36 pl-20'>
          <Image src={Facebook} className='h-12 w-12  bg-white hover:bg-red-700 '></Image>
          <Image src={Twitter} className='h-12 w-12 bg-white hover:bg-red-700'></Image>
          <Image src={Insta} className='h-12 w-12 bg-white hover:bg-red-700'></Image>

        </div>
        
        <div className='bg-[#191c24] h-24 w-80'>
            <h1 className='text-xl font-semibold tracking-tighter pt-5 pl-24 '>BARBER NAME</h1>
            <h1 className='text-red-700 pl-28 '>Designation</h1>

        </div>    
      </div>










      
      <div className='pb-20 pt-20 pl-5 '>
        <img src='https://demo.htmlcodex.com/2315/hair-salon-html-template/img/team-2.jpg' className='h-96 w-80 '></img>
        <div className='flex absolute inset-x-[20px] lg:inset-x-[436px] inset-y-[5888px] lg:inset-y-[3400px] opacity-0 hover:opacity-100 gap-2 duration-500 delay-75 bg-opacity-0 hover:bg-opacity-65  hover:bg-black h-96 w-80 pt-36 pl-20'>
          <Image src={Facebook} className='h-12 w-12  bg-white hover:bg-red-700 '></Image>
          <Image src={Twitter} className='h-12 w-12 bg-white hover:bg-red-700'></Image>
          <Image src={Insta} className='h-12 w-12 bg-white hover:bg-red-700'></Image>

        </div>
        
        <div className='bg-[#191c24] h-24 w-80'>
            <h1 className='text-xl font-semibold tracking-tighter pt-5 pl-24 '>BARBER NAME</h1>
            <h1 className='text-red-700 pl-28 '>Designation</h1>

        </div>    
      </div>











      
      <div className='pb-20 pt-20 pl-5 '>
        <img src='https://demo.htmlcodex.com/2315/hair-salon-html-template/img/team-3.jpg' className='h-96 w-80 '></img>
        <div className='flex absolute inset-x-[800] inset-y-[6528px] lg:inset-y-[3400px] opacity-0 hover:opacity-100 gap-2 duration-500 delay-75 bg-opacity-0 hover:bg-opacity-65  hover:bg-black h-96 w-80 pt-36 pl-20'>
          <Image src={Facebook} className='h-12 w-12  bg-white hover:bg-red-700 '></Image>
          <Image src={Twitter} className='h-12 w-12 bg-white hover:bg-red-700'></Image>
          <Image src={Insta} className='h-12 w-12 bg-white hover:bg-red-700'></Image>

        </div>
        
        <div className='bg-[#191c24] h-24 w-80'>
            <h1 className='text-xl font-semibold tracking-tighter pt-5 pl-24 '>BARBER NAME</h1>
            <h1 className='text-red-700 pl-28 '>Designation</h1>

        </div>    
      </div>









      
      <div className='pb-20 pt-20 pl-5 '>
        <img src='https://demo.htmlcodex.com/2315/hair-salon-html-template/img/team-4.jpg' className='h-96 w-80 '></img>
        <div className='flex absolute inset-x-[1200] inset-y-[7168px] lg:inset-y-[3400px] opacity-0 hover:opacity-100 gap-2 duration-500 delay-75 bg-opacity-0 hover:bg-opacity-65  hover:bg-black h-96 w-80 pt-36 pl-20'>
          <Image src={Facebook} className='h-12 w-12  bg-white hover:bg-red-700 '></Image>
          <Image src={Twitter} className='h-12 w-12 bg-white hover:bg-red-700'></Image>
          <Image src={Insta} className='h-12 w-12 bg-white hover:bg-red-700'></Image>

        </div>
        
        <div className='bg-[#191c24] h-24 w-80'>
            <h1 className='text-xl font-semibold tracking-tighter pt-5 pl-24 '>BARBER NAME</h1>
            <h1 className='text-red-700 pl-28 '>Designation</h1>

        </div>    
      </div>






      </div>


    </div>
  )
}

export default page
