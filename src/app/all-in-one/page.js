import React from 'react'
import Home from '../Pages/home/page'
import CONTACT from '../Pages/contact/page'
import About from '../Pages/about/page'
import Service from '../Pages/service/page'
import Price from '../Pages/price/page'
import Barber from '../Pages/barber/page'
import Working from '../Pages/working/page'
import Footer from '../Pages/footer/page'
import Logout from '../Pages/Logoutpage/page'
import  MainContact from '../Pages/Mainabout/page'




const page = () => {
  return (

    <div>

   <Home/>
    <CONTACT/>
    <About/>
    <Service/>
    <Price/>
    <Barber/>
    <Working/>
    <MainContact/>
    <Footer/>
    <Logout/>

    </div>
  )
}

export default page