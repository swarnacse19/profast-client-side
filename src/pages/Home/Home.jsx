import React from 'react';
import Banner from './Banner';
import Services from './services/Services';
import Works from './Works';
import CompanyLogo from './CompanyLogo';
import Benefits from './Benefits/Benefits';
import BeMerchant from './BeMerchant';
import TestimonialSection from './TestimonialSection';
import Faq from './Faq';

function Home() {
  return (
    <div className='my-7'>
      <Banner></Banner>
      <Works></Works>
      <Services></Services>
      <CompanyLogo></CompanyLogo>
      <Benefits></Benefits>
      <BeMerchant></BeMerchant>
      <TestimonialSection></TestimonialSection>
      <Faq></Faq>
    </div>
  );
}

export default Home;