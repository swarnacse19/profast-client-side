import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import { Card, Avatar, Button } from 'react-daisyui';
import customer from '../../assets/customer-top.png';
import reviewQuote from '../../assets/reviewQuote.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const TestimonialSection = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
      name: "Rashi Ahamed",
      title: "CTO",
      avatar: "https://i.ibb.co/jv81Z19r/girl1.jpg", 
    },
    {
      id: 2,
      text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
      name: "Arpa Hossain",
      title: "Senior Product Designer",
      avatar: "https://i.ibb.co/LXxHXP5g/girl2.jpg", 
    },
    {
      id: 3,
      text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
      name: "Nasira Mira",
      title: "CEO",
      avatar: "https://i.ibb.co/v6TrY4pZ/girl3.jpg", 
    },
    {
      id: 4,
      text: "This product significantly improved my daily comfort. Highly recommend to anyone struggling with posture!",
      name: "Janne Doe",
      title: "Product Manager",
      avatar: "https://i.ibb.co/Pz4MMyKD/student3.webp", 
    },
    {
      id: 5,
      text: "Fantastic results! My back pain has reduced considerably since I started using Posture Pro.",
      name: "John Smitha",
      title: "Fitness Enthusiast",
      avatar: "https://i.ibb.co/bjfz1Dv4/student1.jpg", 
    },
  ];

  const settings = {
    className: "center", 
    centerMode: true,
    infinite: true,
    centerPadding: "60px", 
    slidesToShow: 3, 
    speed: 500,
    dots: false, 
    arrows: false, 
    autoplay: true, 
    autoplaySpeed: 3000,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex), 


    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 3,
          centerPadding: "40px",
        }
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1, 
          centerPadding: "0px", 
          dots: true, 
        }
      },
      {
        breakpoint: 640, 
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
          dots: true,
        }
      }
    ]
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto text-center">
        <img className='mx-auto mb-7' src={customer} alt="" />
        <h2 className="text-4xl font-bold text-gray-800 mb-4">What our customers are saying</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!
        </p>

        <div className="">
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="p-2 outline-none">
                <Card
                  className={`shadow-xl p-6 bg-white testimonial-card`}
                >
                  <Card.Body className="p-0">
                    <img src={reviewQuote} className='w-14 h-14' alt="" />
                    <p className="text-left text-gray-700 text-lg mb-6 relative">
                      {testimonial.text}
                    </p>
                    <div className="flex items-center mt-auto border-t-2 pt-4 border-gray-300">
                      <Avatar
                        src={testimonial.avatar}
                        alt={`${testimonial.name}'s avatar`}
                        shape="circle"
                        size="lg"
                        className="mr-4 w-16"
                      />
                      <div className="text-left">
                        <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.title}</p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Slider>
        </div>

        {/* Custom Navigation Dots and arrow*/}
        <div className="flex items-center justify-center mt-8 space-x-2">
            <Button className="btn rounded-3xl bg-white text-black hover:text-primary backdrop-blur-sm" onClick={goToPrev}>
              <FaArrowLeft />
            </Button>
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-200 ${
                index === currentSlide ? 'bg-primary' : 'bg-gray-300'
              }`}
              onClick={() => sliderRef.current.slickGoTo(index)}
            ></span>
          ))}
          <Button className="btn rounded-3xl text-black bg-lime-300" onClick={goToNext}>
              <FaArrowRight />
            </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;