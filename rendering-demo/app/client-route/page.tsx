'use client';

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
            <Image
              src="/images/cat.jpg"
              alt="Kitten 1"
              width={400}
              height={200}
            />
          </div>
          <div>
            <Image
              src="/images/cat.jpg"
              alt="Kitten 2"
              width={400}
              height={200}
            />
          </div>
          <div>
            <Image
              src="/images/cat.jpg"
              alt="Kitten 3"
              width={400}
              height={200}
            />
          </div>
        </Slider>
      </div>
    </>
  );
}
