import React from 'react'
import Image from 'next/image'
import Location from '../contact/prateek.png'
import Call from '../contact/mani.png'
import Message from '../contact/tripathi.png'
import Face from '../footer/f.png'
import You from '../footer/y.png'
import insta from '../footer/i.png'
import linked from '../footer/l.png'

const page = () => {
  return (
    <div className='pt-48'>
      
<div className='bg-[#191c24] h-[900px] lg:h-[300px] w-full flex-none lg:flex '>
   



    <div>

    <div>
     
     <h1 className='text-3xl font-semibold tracking-tighter pl-30 lg:pl-20 pt-10'>GET IN TOUCH</h1>
   </div>

   <div className='flex pl-30 lg:pl-20 pt-5'>
     <div className='bg-black w-10 h-10 pt-1 pl-1'>
     <Image src={Location} className='w-7 h-7'></Image>
     </div>
     
    
     <p className='pt-1 pl-5'>123 Street, New York, USA</p>
   </div>


   
   <div className='flex pt-5 pl-30 lg:pl-20'>
     <div className='pt-2 bg-black w-10 h-10 pl-2'>
     <Image src={Call} className='w-5 h-5'></Image>
     </div>
     <p className='pt-1 pl-5'>9761634502</p>
   </div>



   
   <div className='flex pt-5 pl-30 lg:pl-20'>
     <div className='pt-2 bg-black h-10 w-10 pl-2'>
     <Image src={Message} className='w-5 h-5 '></Image>
     </div>
     <p className='pt-1 pl-5'>prateek1tri2@gmail.com</p>
   </div>

    </div>
    
    <div className='pl-[40px] lg:pl-[300px] pt-20 lg:pt-0'>
        <h1 className='text-3xl font-semibold tracking-tighter  pt-10 pl-2'>QUICK LINKS</h1>
        <button className=''>
        <p className=' pt-2 hover:text-red-700 pr-[50px]'> About Us</p>
        <p className=' pt-2 hover:text-red-700 pr-10'>Contact Us</p>
        <p className=' pt-2 hover:text-red-700 pr-7'>Our Services</p>
        <p className='pt-2  hover:text-red-700 pl-3'>Tearm & Condition</p>
        <p className=' pt-2 hover:text-red-700 pr-16'>Support</p>
        </button>
        
      </div>


<div className='pl-10 lg:pl-48 pt-20 lg:pt-0'>
<div className='text-3xl pt-10 tracking-tighter font-semibold'>
        <h1 className=''>NEWSLETTER</h1>
      </div>
      <div className='flex gap-5 pt-16 '>
        <div className='bg-black w-14 h-14 pl-3 pt-3'>
        <Image src={insta} className='h-7 w-7'></Image>
        </div>

        <div className='bg-black w-14 h-14 pl-3 pt-3'>
        <Image src={Face} className='h-7 w-7'></Image>
        </div>

        <div className='bg-black w-14 h-14 pl-3 pt-3'>
        <Image src={linked} className='h-7 w-7'></Image>
        </div>

        <div className='bg-black w-14 h-14 pl-3 pt-3'>
        <Image src={You} className='h-7 w-7'></Image>
        </div>
        
      </div>

</div>
     
</div>

    </div>
  )
}

export default page
