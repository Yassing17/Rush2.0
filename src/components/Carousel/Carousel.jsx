// code for carousel

import React, { useState } from 'react'
import "./CarouselStyles.css";
import Slider from "react-slick";
import { TiChevronLeft, TiChevronRight } from "react-icons/ti";
import sun from "../../assets/pictures/sunclip2.png"
import veggies from "../../assets/pictures/veggiesclip.png"
import treehouse from "../../assets/pictures/treehouseclip.png"
import { Link } from 'react-scroll'


//creating the different carousel cards
//Title must be the same as map ID for smooth scroll to work
const items = [
  {
      card: {
          title: 'How to beat the heat?',
          image: sun,
      },
  },
  {
      card: {
          title: "How can I eat local?",
          image: veggies,
     },
  },
  {
      card: {
          title: 'Is a development here a good idea?',
          image: treehouse,
      },
  },
  {
      card: {
          title: 'How can I protect our coasts? ',
          image: treehouse,
      },
  },
  {
    card: {
      title: 'What Ecosystems are around me',
      image: treehouse,
    },
  },
  {
    card: {
      title: 'Who do I share my home with? ',
      image: treehouse,
    },
  },
];


//creating the arrow buttons
function Carousel() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <TiChevronRight size={35} />
      </div>
    );
  };  

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <TiChevronLeft size={35} />
      </div>
    );
  };

  const [itemIndex, setItemIndex] = useState(0);


//carousel settings
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


//main carousel javascript code
  return (
    <>
    <div name='carouselAnchor' className='carouselAnchor'></div>
    <div className='carouselTitle'>
      <h1>Explore the thematic RUSH maps</h1>
      <h5>click on one of the prompts below to learn more</h5>
    </div><div className="Carousel">

        <Slider {...settings}>
          {items.map((item, idx) => (
            <div className={idx === itemIndex ? "slide activeSlide" : "slide"}>
              <div className='CarouselSlideItem'>
                <Link to={item.card.title}>
                  <h15>{item.card.title}</h15>
                  {/* <img src={item.card.image} alt={item.card.title} /> */}
                </Link>
              </div>
            </div>
          ))}

        </Slider>

      </div></>
    

  );
}

export default Carousel;

