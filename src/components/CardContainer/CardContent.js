import React from 'react'
import { CardImgConst } from '../../assets/config'
import { FcRating } from "react-icons/fc";
import { LuDot } from "react-icons/lu";
import { useContext } from 'react';
import MyContext from '../../context/myContext';

const CardContent = ({ name, avgRating, cloudinaryImageId, sla, cuisines }) => {
    const context = useContext(MyContext)
    const { mode } = context

    return (
        <>

            <div className=" p-4 w-[250px] hover:scale-95 transition-all ">
                <a className="block relative h-32 rounded overflow-hidden">
                    <img alt="ecommerce" className=" object-center w-full object-cover block rounded-xl h-36" src={CardImgConst + cloudinaryImageId} />
                </a>
                <div className="">
                    <h1 className="text-gray-700 title-font text-lg font-medium font-bold ">{name}</h1>
                    <h6 className=" mt-1 flex space-x-1 text-gray-700 title-font  font-medium font-bold ">
                        <FcRating size={22} />{avgRating} <LuDot size={22} /> {sla.deliveryTime} mins </h6>
                    <h6 className=" mt-1 flex space-x-1 text-gray-500 title-font  font-medium font-bold ">
                    {/* {cuisines.map((res)=>res)} */}
                    {cuisines.join(' , ').slice(0,25)}...
                    </h6>
                </div>
            </div>
        </>

    )
}

export default CardContent
