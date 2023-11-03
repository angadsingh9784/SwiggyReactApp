import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CardImgConst } from '../../../assets/config';
import { FcRating } from "react-icons/fc"
import { CgTimelapse } from 'react-icons/cg'
import { HiCurrencyRupee } from 'react-icons/hi'
import { addItem } from '../../../utils/cartSlice';
import { Dispatch } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

const Restrauant = () => {
    const params = useParams();
    const [restrauant, setRestrauant] = useState([])
    const [resMenu, setResMenu] = useState([]);

    useEffect(() => {
        getRestrauantInfo();
    }, [])

    async function getRestrauantInfo() {
        if (window.innerWidth >= 1024) {
            const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=31.3260152&lng=75.57618289999999&restaurantId=" + params.id + "&catalog_qa=undefined&submitAction=ENTER")
            const json = await data?.json();
            console.log(json?.data);
            setResMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1].card?.card?.itemCards);
            setRestrauant(json?.data?.cards[0]?.card?.card?.info)
        }else{
            //https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=31.3260152&lng=75.57618289999999&restaurantId=115812&submitAction=ENTER
            const data = await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=31.3260152&lng=75.57618289999999&restaurantId=" + params.id + "&submitAction=ENTER")
            const json = await data?.json();

            setRestrauant(json?.data?.cards[0]?.card?.card?.info)
            console.log(json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
            setResMenu(json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)

            //setResMenu(json);
            // console.log(resMenu)
            // setRestrauant(json?.data?.cards[0]?.card?.card?.info)
        }
    }
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }


    return (
        <>









            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 py-10 mx-auto flex  ">
                    <div class="my-1  divide-gray-100  m-auto lg:w-[80%] md:w-auto sm:w-[90%]">
                        <div class="p-2 flex flex-wrap md:flex-nowrap  justify-between">

                            <div class=" md:mb-0  flex-shrink-0 flex flex-col">
                                <span class="font-semibold title-font text-gray-700 text-3xl">{restrauant?.name}</span>
                                <span class="mt-1 text-gray-500 text-sm">{restrauant?.locality},{restrauant?.areaName}</span>
                                <span class="mt-1 text-gray-500 text-sm">{restrauant?.cuisines?.join(' , ')}</span>

                            </div>

                            <div class="border p-2 rounded-xl " >
                                <h2 class="text-xl font-medium text-gray-900 title-font  flex justify-center">🌟 {restrauant?.avgRating} </h2>
                                <hr class="h-[0.9] bg-gray-100 border-0 rounded  dark:bg-gray-700"></hr>
                                <p>{restrauant?.totalRatingsString}</p>
                                <p class="">Too few Rating</p>

                            </div>
                        </div>
                        <hr class=" w-[0.7] drop-shadow-xl border-dotted h-1 bg-gray-100 border-0 rounded  dark:bg-gray-700"></hr>

                        <div class=" flex flex-wrap  justify-start">
                            <div class=" flex flex-col">
                                <span class="font-semibold title-font text-gray-700 md:text-3xl flex sm:text-sm"><CgTimelapse className='md:text-3xl sm:text-xl mr-1' />{restrauant?.sla?.lastMileTravelString?.slice(0, 2)} MINS</span>
                                {/* <span class="mt-1 text-gray-500 text-sm">{restrauant?.locality},{restrauant?.areaName}</span>
                                <span class="mt-1 text-gray-500 text-sm">{restrauant?.cuisines?.join(' , ')}</span> */}

                            </div>

                            <div class=" ml-2 rounded-sm " >
                                <h2 class="md:text-3xl font-semibold text-gray-700 title-font  flex sm:text-sm "> <HiCurrencyRupee className='md:text-3xl sm:text-xl mr-1' />  ₹{restrauant?.costForTwo / 100} for two </h2>
                                {/* <hr class="h-1 bg-gray-100 border-0 rounded  dark:bg-gray-700"></hr>
                                <p class="">Too few Rating</p> */}

                            </div>
                        </div>




                        <div class=" flex flex-wrap  justify-evenly mt-1">
                            <div class=" flex flex-col p-3 border rounded-md mt-2">
                                <span class="font-semibold title-font text-gray-700 text-sm flex">
                                    EXTRA 20% off upto ₹200
                                </span>
                                <span>
                                    NO CODE REQUIRED | ABOVE ₹249
                                </span>
                            </div>

                            <div class=" flex flex-col p-3 border rounded-md mt-2">
                                <span class="font-semibold title-font text-gray-700 text-sm flex">
                                    EXTRA 15% off upto ₹200
                                </span>
                                <span>
                                    NO CODE REQUIRED | ABOVE ₹399
                                </span>
                            </div>

                            <div class=" flex flex-col p-3 border rounded-md mt-2">
                                <span class="font-semibold title-font text-gray-700 text-sm flex">
                                    FLAT ₹50 OFF
                                </span>
                                <span>
                                    NO CODE REQUIRED | ABOVE ₹299
                                </span>
                            </div>



                        </div>
                    </div>
                </div>
            </section>


            {/* //menu list */}

            <section class="text-gray-600 body-font">


                <div class="container px-5 py-1 mx-auto">
                    <h2 className='mb-6 text-center   text-2xl border-b border-dotted  font-bold'> Recommended ({resMenu?.length})</h2>

                    {resMenu?.map((res) => {
                        return (<>
                            {/* <li key={res?.card?.info?.name?.id}>{res?.card?.info?.name}</li>
                            <img key={res?.card?.info?.name?.id} src={CardImgConst + res?.card?.info?.imageId} alt="" /> */}
                            <div key={res?.card?.info?.name?.id} class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                                <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center  text-indigo-500 flex-shrink-0">
                                    {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg> */}
                                    <img className='rounded-2xl' src={CardImgConst + res?.card?.info?.imageId} />
                                </div>
                                <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                    <h2 class="text-gray-900 text-lg title-font font-medium mb-2">{res?.card?.info?.name}</h2>
                                    <p class=" text-base">{res?.card?.info?.description}</p>
                                    <button onClick={() => {
                                        handleAddItem(res)
                                        alert("Item added successfully")

                                    }} class="mt-3 p-2 shadow-md rounded-md hover:bg-gray-200 cursor-pointer  border text-green-500 inline-flex items-center">ADD
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </>
                        )
                    })}





                </div>
            </section>




















        </>
    )
}

export default Restrauant
