import React, { useState } from 'react'
// import SearchCards from './SearchCards'
import SearchContent from './SearchContent';
import { MENU_DATA } from '../../../mocks/data';
// import Navbar from '../../Navbar';

const Search = () => {
    const [actualData, setActualData] = useState(MENU_DATA);
    const [inputData, setInputData] = useState();
    const [fresData, setFreshData] = useState(MENU_DATA);
    const [emptyData, setEmptyData] = useState(MENU_DATA);


    function FilterFunction(inputData, fresData) {
        const data = fresData.filter((res) => res.info.name.toLowerCase().includes(inputData.toLowerCase()));
        return data
    }
    function NotEmpty(inputData) {
        if (inputData.length === 0) {
            setActualData(MENU_DATA)
        }

    }

    return (<div className='  z-0 '>

        <div className=' pt-10 lg:w-[80%] m-auto p-11 '>
            <label for="default-search" class=" mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input onChange={(e) => {
                    setInputData(e.target.value)
                    NotEmpty(e.target.value)
                }
                } type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-500 rounded-lg bg-transparent focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for food..." required />
                <button onClick={
                    function () {
                        const data = FilterFunction(inputData, fresData);;
                        setActualData(data);
                    }
                } type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
        </div>

        <div class="w-[90%] p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 m-auto lg:w-[90%]">



            <div class=" ">
                 
                <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700 p-4 ">
                    {
                        actualData.map((res) => {
                            return <SearchContent {...res.info} />
                        })
                    }
                </ul>
            </div>
        </div>
    </div>
    )
}

export default Search
