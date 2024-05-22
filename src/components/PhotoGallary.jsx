import React from 'react';
import Slider from 'react-slick';
import { creativityGallary, festivalGallary } from '../constant/index';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PhotoGallery.css';

const PhotoGallery = () => {
  const creativitySettings = {
    infinite: true,
    slidesToShow: 4, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 4000,
    cssEase: 'linear',
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  const festivalSettings = {
    infinite: true,
    slidesToShow: 4, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 4000,
    cssEase: 'linear',
    variableWidth: false, 
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Photo Gallery</h2>
        <Slider {...creativitySettings}>
          {creativityGallary.map((item) => (
            <div key={item.id} className="px-2">
              <img
                src={item.image}
                alt={`creativity-${item.id}`}
                className="gallery-image"
              />
            </div>
          ))}
        </Slider>
        <div className='m-4'></div>

        {/* <h2 className="text-4xl font-bold text-gray-800 my-6 text-center">Festival Gallery</h2> */}
        <Slider {...festivalSettings}>
          {festivalGallary.map((item) => (
            <div key={item.id} className="px-z">
              <img
                src={item.image}
                alt={`festival-${item.id}`}
                className="gallery-image"
              />
            </div>
          ))}
        </Slider>
      </div>


      {/* TODO: SEE MORE  */}
    </div>
  );
};

export default PhotoGallery;