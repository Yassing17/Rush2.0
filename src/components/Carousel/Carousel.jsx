import React, { useState } from 'react'
import "./CarouselStyles.css";
import Slider from "react-slick";
import { TiChevronLeft, TiChevronRight } from "react-icons/ti";
import { Link } from 'react-scroll'








const items = [
  {
      card: {
          title: 'How to beat the heat?',
          
      },
  },
  {
      card: {
          title: "How can I eat local?",
          
     },
  },
  {
      card: {
          title: 'Is development here a good idea?',
      },
  },
  {
      card: {
          title: 'How can I protect our coasts?',
      },
  },
  {
    card: {
      title: 'Plants?',
    },
  },
  {
    card: {
      title: 'Who do I share my home with?',
    },
  },
];


function Carousel() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <TiChevronRight size={50} />
      </div>
    );
  };  

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <TiChevronLeft size={50} />
      </div>
    );
  };

  const [itemIndex, setItemIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 200,
    slidesToShow: 5,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setItemIndex(next),
  };

  return (
    <>
    <div name='carouselAnchor' className='carouselAnchor'></div>
    <div className='carouselSection'>
    <div className='carouselTitle'>
      <h1>Explore the interactive RUSH maps</h1>
      <h5>click on one of the prompts below to learn more</h5>
    
    </div><div className="Carousel">

        <Slider {...settings}>
          {items.map((item, idx) => (
            <div className={idx === itemIndex ? "slide activeSlide" : "slide"}>
              <Link to={item.card.title}>
              <div className='CarouselSlideItem'>
                  <h2 >{item.card.title}</h2>
                  {/* <img src={item.card.image} alt={item.card.title} height='100px' width='400px' /> */}
              </div>
              </Link>
            </div>
          ))}

        </Slider>
        </div>
        <div name='dashpageAnchor' className='dashpageAnchor'></div>
        </div></>
    

  );
}

export default Carousel;

