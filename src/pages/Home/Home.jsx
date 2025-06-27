import React from 'react';
import Banner from './Banner';
import Services from './services/Services';
import Works from './Works';

function Home() {
  return (
    <div className='my-7'>
      <Banner></Banner>
      <Works></Works>
      <Services></Services>
    </div>
  );
}

export default Home;