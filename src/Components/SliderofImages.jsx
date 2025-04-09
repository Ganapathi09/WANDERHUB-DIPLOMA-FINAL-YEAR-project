import React from 'react'
import Slider from "react-slick";
import './sliders.css'
export default function SliderofImages(props) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="list-block mx-auto">
      <ul id="list-block-contents">
        <h1 className='text-center mx-auto'>{props.heading}</h1>
      </ul>
      <Slider {...settings} prevArrow='' nextArrow=''>
        <div >
          <ul className="list-block-contents">
            <img className="d-block w-50 " src={props.src1} alt={props.alt1} />
            <h3 className="text-navy">{props.text1}</h3>
          </ul>
        </div>
        <div>
          <ul className="list-block-contents">
            <img className="d-block w-50 " src={props.src2} alt={props.alt2} />
            <h3 className="text-navy">{props.text2}</h3>
          </ul>
        </div>
        <div>
          <ul className="list-block-contents">
            <img className="d-block w-50 " src={props.src3} alt={props.alt3} />
            <h3 className="text-navy">{props.text3}</h3>
          </ul>
        </div>
        <div>
          <ul className="list-block-contents">
            <img className="d-block w-50 " src={props.src4} alt={props.alt4} />
            <h3 className="text-navy">{props.text4}</h3>
          </ul>
        </div>
        <div>
          <ul className="list-block-contents">
            <img className="d-block w-50 " src={props.src5} alt={props.alt5} />
            <h3 className="text-navy">{props.text5}</h3>
          </ul>
        </div>
        <div>
          <ul className="list-block-contents">
            <img className="d-block w-50 " src={props.src6} alt={props.alt6} />
            <h3 className="text-navy">{props.text6}</h3>
          </ul>
        </div>

      </Slider >
    </div >
  )
}
