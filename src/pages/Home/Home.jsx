import React from 'react';
import Banner from './Banner';
import Services from './services/Services';
import Works from './Works';
import CompanyLogo from './CompanyLogo';

function Home() {
  return (
    <div className='my-7'>
      <Banner></Banner>
      <Works></Works>
      <Services></Services>
      <CompanyLogo></CompanyLogo>
    </div>
  );
}

export default Home;