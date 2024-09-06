'use client';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import Layout from '@/app/Pages/Layout/page';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4nn3tdn', 'template_vwpjs8d', form.current, 'QBj8nR4xBGyk0NqLu')
      .then(
        () => {
          toast.success('Email sent successfully!');
          form.current.reset(); // Clear the form after successful submission
        },
        (error) => {
          toast.error('Failed to send email. Please try again.');
          console.error('FAILED...', error.text);
        },
      );
  };

  return (

    <div>
      <Layout>
    <div id="contact" className="w-full md:h-[750px] bg-black text-white">
      <Toaster /> {/* Ensure Toaster is rendered in your component */}
     
      

      <div className="pt-20 pl-[10px] lg:pl-[400px] pb-28">
        <form ref={form} onSubmit={sendEmail} className=" h-[850px] lg:h-[750px] w-[350px] lg:w-[800px] bg-[#191c24] p-3 lg:p-14">

            <div  >
                <button  className='bg-black text-red-700 w-28 h-10'>Contact Us</button>
            </div>

            <p className='text-3xl lg:text-5xl font-bold tracking-tighter pt-5'>HAVE ANY QUERY? PLEASE </p>
            <p className='text-3xl lg:text-5xl font-bold tracking-tighter pt-5'>CONCACT US </p>


            <div className='flex-none lg:flex gap-10 pt-24'>

            <div className='pb-5 lg:pb-0'>
            <input type="text" placeholder="Enter Your name" name="to_name" className="text-black w-[330px]  h-20 p-5 bg-[#191c24] border-slate-800 border-4" />

          </div>
          <div className="">
           
            <input type="email" placeholder="Enter Your Email" name="from_name" className="text-black  w-[330px] h-20 p-5  bg-[#191c24] border-slate-800 border-4" />
          </div>
            </div>


          



          <div className=" pt-16 pb-10">
            
            <textarea name="message" placeholder="Message" className="text-black w-[330px] lg:w-[700px]  h-24 pt-2 pl-4 bg-[#191c24] border-4 border-slate-800 text-2xl font-thin" />
          </div>
          <button type="submit" className="bg-red-600 hover:bg-red-800  h-16 w-[330px] lg:w-[700px] ">
            Send
          </button>
        </form>
      </div>
    </div>
    </Layout>
    </div>
  );
};

export default Contact;
