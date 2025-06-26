import React from 'react';
import Banner from './Banner';
import Services from './services/Services';

function Home() {
  return (
    <div className='my-7'>
      <Banner></Banner>
      <Services></Services>
    </div>
  );
}

export default Home;