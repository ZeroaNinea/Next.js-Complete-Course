'use client';

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

import 'slick-carousel/silck/slick.css';
import 'slick-carousel/silck/slick-theme.css';
import './ImageSlider.css';

import './style.css';

// import { serverSideFunction } from '@/utils/server-utils';

export default function ClientRoutePage() {
  // const result = serverSideFunction();

  const settings = {
    dots: true,
  };

  // return (
  //   <>
  //     <h1>Client Route</h1>
  //   </>
  // );

  return (
    <>
      <div className="image-slider-container">
        <Slider {...settings}>
          <div>
            <Image src="http://placekitten.com/g/400/200" alt="Kitten 1" />
          </div>
          <div>
            <Image src="http://placekitten.com/g/400/200" alt="Kitten 2" />
          </div>
          <div>
            <Image src="http://placekitten.com/g/400/200" alt="Kitten 3" />
          </div>
        </Slider>
      </div>
    </>
  );
}
