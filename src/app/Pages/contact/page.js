"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import call from '../contact/prateek.png'
import location from '../contact/mani.png'
export default function ImageSlider() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    { src: 'https://demo.htmlcodex.com/2315/hair-salon-html-template/img/carousel-1.jpg', text1: 'WE WILL KEEP YOU AN',text2: 'AWESOME LOOK',text3:'273016 UTTAR PRADESH INDIA' ,text4:'9761634502' },
    { src: 'https://demo.htmlcodex.com/2315/hair-salon-html-template/img/carousel-2.jpg',text1:'LUXURY HAIRCUT AT', text2: 'AFFORDABLE PRICE',text3:'273016 UTTAR PRADESH INDIA',text4:'9761634502' }, 
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className=''>
    <div className="image-slider">
    
      <div className="slide">
        <img src={images[currentImage].src} alt="Slideshow" className=  "fade" />
        <div className="overlay">
          <div className='fada inset-0 bg-opacity-65 bg-black h-[850px] w-[1700px] pt-[300px] pl-[500px]'>
          <h2 className='text-4xl lg:text-7xl pl-52 lg:pl-0 tracking-tighter'>{images[currentImage].text1}</h2>
          <h2 className='text-4xl lg:text-7xl pl-52 lg:pl-0 tracking-tighter pt-2'>{images[currentImage].text2}</h2>
          <div className='flex pt-4'>
            <div className=''>
            <Image src={call} className='h-9 w-9 '/>
            </div>
             
          <h2 className='pl-44 lg:pl-0 text-xl lg:text-2xl pr-2'>{images[currentImage].text3}</h2>
          </div>
          <div className='flex gap-1 pl-2 pt-3'>
            <div className='pt-2 '>
            <Image src={location} className='h-6 w-6'/>
            </div>
            
          <h2 className='pl-44 lg:pl-0 text-xl lg:text-2xl'>{images[currentImage].text4}</h2>
          </div>
          
          
          </div>
         
        </div>
      </div>
    
    
      <style jsx>{`
        .image-slider {
          position: relative;
          width: 100%;
          height: 700px; 
          overflow: hidden;
          
        }

        .slide {
          position: relative;
          width: 100%;
          height: 100%;
          
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          animation: fadeInOut 6s infinite;
         
        }

        .fade {
          animation: fadeInOut 6s infinite;
        }

        
        .fada {
          animation: fadaInOut 6s infinite;
        }

        .overlay {
          position: absolute;
           top: 58%;
           left: 45%;
          transform: translate(-50%, -50%);
          color: white; 
          padding: 10px 20px;
          border-radius: 5px;  
          
        }


        @keyframes fadeInOut {
          0% {
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        
        @keyframes fadaInOut {
          0% {
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
    </div>
  );
}

