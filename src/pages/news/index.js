import React, { useEffect } from 'react';
import HeaderNav from '../landing/components/HeaderNav';
import Footer from '../landing/components/Footer';
import Section1 from './Section1';

const News = () => {
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

export default News;