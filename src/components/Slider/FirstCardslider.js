import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './style.css';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2.5,
    slidesToSlide: 1// optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const sliderImageUrl = [
  //First image url
  {
    url:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/731031544495581f1d6884624aa3ecf5"
  },
  {
    url:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/49cfabd8c7ca5bd1ab44c55b177b0a5b"
  },
  //Second image url
  {
    url:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/9c1b7104ad92fb3082e62dbdefe118fa"
  },
  //Third image url
  {
    url:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/7004bb67da2bc79145552e05a4605d6e"
  },

  //Fourth image url

  {
    url:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/7dec1c62b4e539323ea54bae5e152c62"
  }
];
const FirstCardslider = () => {
  return (
    <div className="parent lg:mx-32 sm:mx-0 pt-12 ">
      <h2 className="font-bold text-2xl p-2  sm:text-center lg:text-left ">Best offers for you</h2>
      <Carousel
        responsive={responsive}
        autoPlay={false}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={false}
         partialVisible={true}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className=" bg-white" key={index}>
              <div className="slider" key={index}>
                <img src={imageUrl.url} alt="movie" className="object-fill h-[200px] w-[200px]" />
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default FirstCardslider;
