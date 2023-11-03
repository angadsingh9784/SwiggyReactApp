import React from 'react'
import { CardImgConst } from '../../assets/config'

const FoodItem = ({ name, description, imageId,category,price }) => {
    return (
        // <li class="py-3 sm:py-4 hover:bg-gray-200 ">
        //     <div class="flex items-center space-x-4">
        //         <div class="flex-shrink-0">
        //             <img class="w-12 h-12 rounded-full" src={CardImgConst+imageId} alt="Neil image" />
        //         </div>
        //         <div class="flex-1 min-w-0">
        //             <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
        //                 {name}
        //             </p>
        //             <p class="text-sm text-gray-500 truncate dark:text-gray-400">
        //                 {description}
        //             </p>
        //             {/* <p class="text-sm text-gray-500 truncate dark:text-gray-400">
        //                 {cuisines[0]},{cuisines[1]}
        //             </p> */}
        //         </div>
        //         {/* <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
        //             {costForTwo.slice(0,4)}
        //         </div> */}
        //     </div>
        // </li>
        <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div class="flex md:w-[40%] sm:w-[100%]">
                <div class="md:w-[30%] ">
                    <img  class="rounded-full p-1 h-20 w-52 border " src={CardImgConst+imageId} />
                </div>
                <div class="flex flex-col justify-between ml-4 flex-grow">
                    <span class="font-bold text-sm">{name}</span>
                    <span class="text-red-500 text-xs">{category}</span>
                    <a href="#" class="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
                </div>
            </div>
            <div class="flex justify-center w-1/5">
                <svg class="fill-current text-gray-600 md:w-3 sm:w-0" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>
                <input class="mx-2 border text-center w-8" type="text" value="1" />
                <svg class="fill-current text-gray-600 md:w-3 sm:w-0" viewBox="0 0 448 512">
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>
            </div>
            <span class=" text-center w-1/5 font-semibold text-sm">{price/100}</span>
            <span class="md:visible sm:invisible text-center w-1/5 font-semibold text-sm">{price/100}</span>
        </div>
    )
}

export default FoodItem
