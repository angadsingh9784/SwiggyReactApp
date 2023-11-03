import React, { useState } from 'react';
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'
import { BiSolidOffer, BiHelpCircle } from 'react-icons/bi'
import { BsPerson } from 'react-icons/bs'
import { MdOutlineFeaturedPlayList } from 'react-icons/md'
import { FiSun } from 'react-icons/fi'
import { BsFillCloudSunFill } from 'react-icons/bs'
import { useContext } from 'react';
import MyContext from '../context/myContext';
import { MdDarkMode } from 'react-icons/md'
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { useSelector } from 'react-redux';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const context = useContext(MyContext);
  const { mode, toggleMode } = context;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const cartItems = useSelector(store => store.cart.items);
  console.log(cartItems)


  return (
    <nav style={{ backgroundColor: mode === 'dark' ? 'black' : '' }} className="bg-white  h-[60] p-2 mb-0 shadow-xl  flex justify-between w-[100%]  relative top-0 left-0">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="text-gray-600 text-xl font-semibold">
            <svg className="_8pSp-" viewBox="0 0 559 825" height="49" width="34" fill="#fc8019"><path fillRule="evenodd" clipRule="evenodd" d="M542.92 388.542C546.805 366.526 542.355 349.598 530.881 340.76C513.621 327.466 487.698 320.236 425.954 320.236C380.271 320.236 331.225 320.286 310.268 320.275C308.322 319.894 301.285 317.604 301.02 309.112L300.734 174.289C300.727 165.779 307.531 158.857 315.943 158.839C324.369 158.825 331.204 165.723 331.211 174.226C331.211 174.226 331.421 247.414 331.441 273.424C331.441 275.936 332.892 281.8 338.549 283.328C375.43 293.267 561.865 285.999 558.967 251.804C543.147 109.96 424.476 0 280.394 0C235.021 0 192.065 10.9162 154.026 30.2754C62.9934 77.5955 -1.65904 173.107 0.0324268 283.43C1.23215 361.622 52.2203 500.605 83.434 521.234C97.8202 530.749 116.765 527.228 201.484 527.228C239.903 527.228 275.679 527.355 293.26 527.436C295.087 527.782 304.671 530.001 304.671 538.907L304.894 641.393C304.915 649.907 298.104 656.826 289.678 656.829C281.266 656.843 274.434 649.953 274.42 641.446C274.42 641.446 275.17 600.322 275.17 584.985C275.17 581.435 275.424 575.339 265.178 570.727C231.432 555.553 121.849 564.712 115.701 581.457C113.347 587.899 125.599 612.801 144.459 644.731C170.102 685.624 211.889 747.245 245.601 792.625C261.047 813.417 268.77 823.813 280.467 824.101C292.165 824.389 300.514 814.236 317.213 793.928C383.012 713.909 516.552 537.663 542.92 388.542Z" fill="url(#paint0_linear_19447_66107)"></path><defs><linearGradient id="paint0_linear_19447_66107" x1="445.629" y1="63.8626" x2="160.773" y2="537.598" gradientUnits="userSpaceOnUse"><stop stopColor="#FF993A"></stop><stop offset="1" stopColor="#F15700"></stop></linearGradient></defs></svg>
            <img src="" alt="" />
          </div>
          <div className="lg:hidden flex">
            {/* <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-400 focus:outline-none"
            >
              <svg
                // xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button> */}
           
            <Link to="/search" className="lg:invisible md:invisible sm:visible  text-gray-600 hover:text-orange-500 text-[18px] font-semibold  flex justify-center ">
              <AiOutlineSearch size={25} />&nbsp;</Link>

              <Link to="/cart" style={{ color: mode === 'dark' ? 'white' : '' }} href="#" className=" lg:invisible md:invisible sm:visible text-gray-600 hover:text-orange-500 text-[15px]  flex font-semibold  mr-3">
              <AiOutlineShoppingCart size={25} /> {cartItems.length}
            </Link>





          </div>






          <div className="hidden lg:flex space-x-6">
            <Link to="/search#top" style={{ color: mode === 'dark' ? 'white' : '' }} href="#" className="text-gray-600 hover:text-orange-500 text-[15px] font-semibold mr-3 flex">
              <AiOutlineSearch size={25} />&nbsp; Search</Link>

            <Link to="/offers" style={{ color: mode === 'dark' ? 'white' : '' }} href="#" className="text-gray-600 hover:text-orange-500 text-[15px]  font-semibold  mr-3 flex">
              <MdOutlineFeaturedPlayList size={25} />&nbsp; Offers
            </Link>



            <Link to="/help" style={{ color: mode === 'dark' ? 'white' : '' }} href="#" className="text-gray-600 hover:text-orange-500 text-[15px]  font-semibold flex mr-3">
              <BiHelpCircle size={25} /> &nbsp; Help
            </Link>

            <Link to="/signin" style={{ color: mode === 'dark' ? 'white' : '' }} href="#" className="text-gray-600 hover:text-orange-500 text-[15px]  font-semibold flex mr-3">
              <BsPerson size={25} /> &nbsp;Sign In
            </Link>

            <Link to="/cart" style={{ color: mode === 'dark' ? 'white' : '' }} href="#" className="text-gray-600 hover:text-orange-500 text-[15px]  flex font-semibold  mr-3">
              <AiOutlineShoppingCart size={25} /> {cartItems.length}
            </Link>




            <button className='' onClick={toggleMode}>
              {/* { <MdDarkMode size={35} style={{ color: mode === 'dark' ? 'white' : '' }} />} */}
              {mode === 'light' ?
                (<FiSun className='' size={30} />
                ) : 'dark' ?
                  (<BsFillCloudSunFill style={{ color: mode === 'dark' ? 'white' : '' }} size={30} />
                  ) : ''}
            </button>

          </div>
        </div>
        {isOpen && (
          <div className="lg:hidden mt-2">
            {/* <a href="#" className="text-gray-600 hover:text-orange-500 text-[18px] font-semibold mr-3 flex justify-center ">
              <AiOutlineSearch size={30} />&nbsp; Search</a> */}

            {/* <a href="/offers" className="text-gray-600 hover:text-orange-500 text-[18px]  font-semibold  mr-3 flex justify-center ">
              <MdOutlineFeaturedPlayList size={30} />&nbsp; Offers
            </a> */}
            {/* <a href="/help" className="text-gray-600 hover:text-orange-500 text-[18px]  font-semibold flex mr-3 justify-center ">
              <BiHelpCircle size={30} /> &nbsp; Help
            </a> */}

            {/* <a href="#" className="text-gray-600 hover:text-orange-500 text-[18px]  font-semibold flex mr-3 justify-center ">
              <BsPerson size={30} /> &nbsp;Sign In
            </a> */}

           
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
