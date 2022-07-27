
import "./CarouselStyles.css";
import { useState } from "react";
import Slider from "react-slick";
import astronaut from "../../assets/pictures/astronaut.png";
import celebrating from "../../assets/pictures/celebrating.png";
import education from "../../assets/pictures/education.png";
import taken from "../../assets/pictures/taken.png";
import land from "../../assets/pictures/land.jpg"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import sun from "../../assets/pictures/sunclip2.png"
import veggies from "../../assets/pictures/veggiesclip.png"
import treehouse from "../../assets/pictures/treehouseclip.png"


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
          title: 'My Nature Fix ',
          desc: 'description four',
          image: taken,
      },
  },
];


function Carousel() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };  

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [itemIndex, setItemIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setItemIndex(next),
  };

  return (
    <div className="Carousel">
      <Slider {...settings}>
        {items.map((item,idx) => (
          <div className={idx === itemIndex ? "slide activeSlide" : "slide"}>
            <div className='CarouselSlideItem'>
              <h15>{item.card.title}</h15>
              <p>{item.card.desc}</p>
              <img src={item.card.image} alt={item.card.title} />
            </div>
          </div>
        ))}

      </Slider>
    </div>
  );
}

export default Carousel;

{/**/}