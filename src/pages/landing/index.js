import React, { useEffect } from 'react';
import HeaderNav from './components/HeaderNav';
import Section1 from './Section1';
import Footer from './components/Footer';

const Landing = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, [])
  return (
    <div>
      <HeaderNav goSection={(secId) => { }} />
      <Section1 />
      <Footer />
    </div>
  )
}

export default Landing;