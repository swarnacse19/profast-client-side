import React from "react";
import Marquee from "react-fast-marquee";

import amazon from '../../assets/brands/amazon.png';
import casio from '../../assets/brands/casio.png';
import moonstar from '../../assets/brands/moonstar.png';
import start from '../../assets/brands/start.png';
import randstad from '../../assets/brands/randstad.png';

const logos = [amazon, casio, moonstar, start, randstad];

function CompanyLogo() {
  return (
    <section className="my-14">
      <div className="">
        <h2 className="text-2xl text-lime-700 font-bold text-center mb-12">We've helped thousands of sales teams</h2>
        
        <Marquee pauseOnHover speed={50} gradient={false}>
          {logos.map((logo, idx) => (
            <div key={idx} className="mx-24 flex items-center">
              <img src={logo} alt={`Client Logo ${idx + 1}`} className="h-6 object-contain" />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

export default CompanyLogo;
