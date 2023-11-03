import React from 'react'
import CardContent from './CardContent'
import { useState, useEffect } from 'react';
import { MENU_DATA } from '../../mocks/data';
import { useContext } from 'react';
import MyContext from '../../context/myContext.js';
import Shimmer from '../Shimmer/Shimmer';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const CardOverall = () => {

    const [fetchcards, setFetchCards] = useState(MENU_DATA);
    const [freshData, setFreshData] = useState(MENU_DATA);
    const context = useContext(MyContext)
    const { mode } = context

    // const filterType = () => {
    //     setFetchCards(
    //         MENU_DATA.filter((item) => {
    //             return item?.info?.avgRatingString ==="4" ;
    //         })
    //     )
    // }
    function filterType() {
        const fildata = freshData?.filter((item) => item?.info?.avgRating > 4.5);
        setFetchCards(fildata)
    }
    function filterType1() {
        const fildata = freshData?.filter((item) => item?.info?.veg === true);
        setFetchCards(fildata)
    }
    function filterType2() {
        const fildata = freshData?.filter((item) => item?.info?.sla?.deliveryTime < 20);
        setFetchCards(fildata)
    }

    function filterType3() {
        const fildata = freshData?.filter((item) => item?.info?.feeDetails?.totalFee === 3800);
        setFetchCards(fildata)
    }
    function filterType4() {
        const fildata = freshData?.filter((item) => item?.info?.feeDetails?.totalFee === 4100);
        setFetchCards(fildata)
    }


    return (fetchcards.length === 0) ? <Shimmer /> : (

        <section className=" bg-white ">
            <div className="container px-5 py-4  ">
                <div>
                    <div className="flex flex-wrap -m-4 lg:mx-32 sm:mx-0 mb-11 ">
                        <h2 className="font-bold text-2xl mb-12  sm:text-center lg:text-left ">Restaurants with online food delivery</h2>
                        <div>
                            {(window.innerWidth >= 504) ?
                                <>
                                    <button onClick={() => setFetchCards(MENU_DATA)} type="button" class=" shadow-xl py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">All</button>
                                    <button onClick={() => filterType()} type="button" class="shadow-xl py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Rating 4.5+</button>
                                    <button onClick={() => filterType1()} type="button" class="shadow-xl py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Pure Veg</button>
                                    <button onClick={() => filterType2()} type="button" class="shadow-xl py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Fast Delivery</button>
                                    <button onClick={() => filterType3()} type="button" class="shadow-xl py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Rs.300-Rs.600</button>
                                    <button onClick={() => filterType4()} type="button" class="shadow-xl py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Less than Rs. 300</button>
                                    <button type="button" class="shadow-xl py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Offers</button>
                                </> :
                                <>
                                    <button onClick={() => setFetchCards(MENU_DATA)} type="button" class=" shadow-xl py-1 px-1 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">All</button>
                                    <button onClick={() => filterType()} type="button" class="shadow-xl py-1 px-1 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Rating 4.5+</button>
                                    <button onClick={() => filterType1()} type="button" class="shadow-xl py-1 px-1 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Pure Veg</button>
                                    <button onClick={() => filterType2()} type="button" class="shadow-xl py-1 px-1 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Fast Delivery</button>
                                    <button onClick={() => filterType3()} type="button" class="shadow-xl py-1 px-1 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Rs.300-Rs.600</button>
                                    {/* <button onClick={() => filterType4()} type="button" class="shadow-xl py-1 px-1 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Less than Rs. 300</button>
                                    <button type="button" class="shadow-xl py-1 px-1 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Offers</button>  */}
                                </>}
                        </div>
                    </div>

                    <div className="flex flex-wrap -m-4 lg:mx-24 sm:mx-0 ">

                        {
                            // console.log(fetchcards)
                            //  return <Link to={"/restrauant/"+res?.info?.id} key={res?.id}><CardContent  {...res?.info}  /></Link>
                            fetchcards.map((res, index) => {
                                return (
                                    <div>
                                        <Link to={"/restrauant/" + res?.info?.id + "#top"} key={res?.id}><CardContent  {...res?.info} /></Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>

    )
}

export default CardOverall
