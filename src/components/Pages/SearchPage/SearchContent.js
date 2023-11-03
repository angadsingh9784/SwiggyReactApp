import React from 'react'
import { CardImgConst } from '../../../assets/config'
import { Link } from 'react-router-dom'

const SearchContent = ({name,cloudinaryImageId,locality,cuisines,costForTwo}) => {
    return (
        <li class="py-3 sm:py-4 hover:bg-gray-200 ">
            <Link to="/cart" class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                    <img class="w-12 h-12 rounded-full" src={CardImgConst+cloudinaryImageId} alt="Neil image" />
                </div>
                <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {name}
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                        {locality}
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                        {cuisines[0]},{cuisines[1]}
                    </p>
                </div>
                <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    {costForTwo.slice(0,4)}
                </div>
            </Link>
        </li>
    )
}

export default SearchContent
