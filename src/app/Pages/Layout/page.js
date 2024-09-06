// components/Layout.js
import React from 'react';
import Home from '../home/page';
import Footer from '../footer/page';


const Layout = ({ children }) => {
  return (
    <div>
      <Home />
      {children}
      <Footer />
      
    </div>
  );
};

export default Layout;
