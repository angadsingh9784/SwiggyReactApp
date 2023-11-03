import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './style.css';
import { FcRating } from "react-icons/fc";
import { LuDot } from "react-icons/lu";
import { MENU_DATA2 } from "../../mocks/data";
import { CardImgConst } from "../../assets/config";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 1// optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 1,
        slidesToSlide: 1// optional, default to 1.
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
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Chole_Bature.png"
    },
    {
        url:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png"
    },
    //Second image url
    {
        url:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png"
    },
    //Third image url
    {
        url:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/North_Indian_4.png"
    },

    //Fourth image url

    {
        url:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pav_Bhaji.png"
    },
    {
        url:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rasgulla.png"
    },
    {
        url:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Idli.png"
    },
    {
        url:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Lassi.png"
    },
    {
        url:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Gulab_Jamun.png"
    }

];
const ThirdCardslider = () => {

    const [fetData, setFetData] = useState(MENU_DATA2);
    return (

        <div className="parent lg:mx-32 sm:mx-0 pt-0 mb-20">
            {console.log(fetData[0]?.info?.name)}
            <h2 className="font-bold text-2xl sm:text-center lg:text-left ">Top restaurant chains in Jalandhar</h2>
            <Carousel
                responsive={responsive}
                autoPlay={true}
                swipeable={true}
                draggable={true}
                showDots={true}
                infinite={true}
                // partialVisible={false}
                dotListClass="custom-dot-list-style"
                autoPlaySpeed={3000}
                customTransition="all 2s"
                removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
                
            >
                {fetData.map((res, index) => {
                    return (<>
                        <div className=" bg-white p-5 " key={index}>
                            <div className="slider" key={index}>
                                <img src={CardImgConst + res.info.cloudinaryImageId} alt="movie" className="h-[200px] w-[100%] object-cover" />
                            </div>
                            <div>
                                <p className="text-gray-700 title-font text-lg font-medium font-bold ">{res.info.name}</p>
                                <p className="text-gray-400 title-font text-sm font-medium font-bold ">{res.info.locality}</p>
                                <p className="text-gray-400 title-font text-sm font-medium font-bold ">{res.info.cuisines[0]},{res.info.cuisines[1]},{res.info.cuisines[2]}...</p>
                            </div>
                        </div>
                    </>
                    );
                })}
            </Carousel>
        </div>
    );
};
export default ThirdCardslider;
