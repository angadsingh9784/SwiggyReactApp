import React from 'react'
import { useContext } from 'react'
import MyContext from '../context/myContext'
import {SiFoodpanda} from 'react-icons/si'

const Footer = () => {
    const context = useContext(MyContext)
    const { mode } = context

    const linkidin="https://www.linkedin.com/in/angad-singh2001/"
    return (
        <footer style={{ backgroundColor: mode === 'dark' ? 'black' : '' }} class="text-black bg-gray-200 body-font mt-24">
            <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <a class="flex title-font font-medium items-center md:justify-start justify-center text-white" target="_blank" href={linkidin}>
                        {/* <SiFoodpanda size={50} className='text-green-500'/> */}
                        <svg className="_8pSp-" viewBox="0 0 559 825" height="49" width="34" fill="#fc8019"><path fillRule="evenodd" clipRule="evenodd" d="M542.92 388.542C546.805 366.526 542.355 349.598 530.881 340.76C513.621 327.466 487.698 320.236 425.954 320.236C380.271 320.236 331.225 320.286 310.268 320.275C308.322 319.894 301.285 317.604 301.02 309.112L300.734 174.289C300.727 165.779 307.531 158.857 315.943 158.839C324.369 158.825 331.204 165.723 331.211 174.226C331.211 174.226 331.421 247.414 331.441 273.424C331.441 275.936 332.892 281.8 338.549 283.328C375.43 293.267 561.865 285.999 558.967 251.804C543.147 109.96 424.476 0 280.394 0C235.021 0 192.065 10.9162 154.026 30.2754C62.9934 77.5955 -1.65904 173.107 0.0324268 283.43C1.23215 361.622 52.2203 500.605 83.434 521.234C97.8202 530.749 116.765 527.228 201.484 527.228C239.903 527.228 275.679 527.355 293.26 527.436C295.087 527.782 304.671 530.001 304.671 538.907L304.894 641.393C304.915 649.907 298.104 656.826 289.678 656.829C281.266 656.843 274.434 649.953 274.42 641.446C274.42 641.446 275.17 600.322 275.17 584.985C275.17 581.435 275.424 575.339 265.178 570.727C231.432 555.553 121.849 564.712 115.701 581.457C113.347 587.899 125.599 612.801 144.459 644.731C170.102 685.624 211.889 747.245 245.601 792.625C261.047 813.417 268.77 823.813 280.467 824.101C292.165 824.389 300.514 814.236 317.213 793.928C383.012 713.909 516.552 537.663 542.92 388.542Z" fill="url(#paint0_linear_19447_66107)"></path><defs><linearGradient id="paint0_linear_19447_66107" x1="445.629" y1="63.8626" x2="160.773" y2="537.598" gradientUnits="userSpaceOnUse"><stop stopColor="#FF993A"></stop><stop offset="1" stopColor="#F15700"></stop></linearGradient></defs></svg>
                        <span style={{ color: mode === 'dark' ? 'white' : '' }} class="ml-3 text-black text-xl">Swiggy</span>
                    </a>
                    <p style={{ color: mode === 'dark' ? 'white' : '' }} class="mt-2 text-sm text-black">Made with ❤️ by Angad Singh</p>
                </div>
                <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 style={{ color: mode === 'dark' ? 'white' : '' }} class="title-font font-medium text-black tracking-widest text-sm mb-3">COMPANY</h2>
                        <nav class="list-none mb-10">
                            <li>
                                <a style={{ color: mode === 'dark' ? 'white' : '' }} class="text-black hover:text-black">About</a>
                            </li>
                            <li>
                                <a style={{ color: mode === 'dark' ? 'white' : '' }} class="text-black hover:text-black">Carrer</a>
                            </li>
                            <li>
                                <a style={{ color: mode === 'dark' ? 'white' : '' }} class="text-black hover:text-black">Team</a>
                            </li>
                            <li>
                                <a style={{ color: mode === 'dark' ? 'white' : '' }} class="text-black hover:text-black">Swiggy One</a>
                            </li>
                        </nav>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 style={{ color: mode === 'dark' ? 'white' : '' }} class="title-font font-medium text-black tracking-widest text-sm mb-3">CONTACT US</h2>
                        <nav class="list-none mb-10">
                            <li>
                                <a style={{ color: mode === 'dark' ? 'white' : '' }} class="text-black hover:text-black">Help & Support</a>
                            </li>
                            <li>
                                <a style={{ color: mode === 'dark' ? 'white' : '' }} class="text-black hover:text-black">Partner with us</a>
                            </li>
                            <li>
                                <a style={{ color: mode === 'dark' ? 'white' : '' }} class="text-black hover:text-black">Ride with us</a>
                            </li>
                            
                        </nav>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 style={{ color: mode === 'dark' ? 'white' : '' }} class="title-font font-medium text-black tracking-widest text-sm mb-3">LEGAL</h2>
                        <nav class="list-none mb-10">
                            <li>
                                <a style={{ color: mode === 'dark' ? 'white' : '' }} class="text-black hover:text-black">Term & Conditions</a>
                            </li>
                            <li>
                                <a style={{ color: mode === 'dark' ? 'white' : '' }} class="text-black hover:text-black">Cookie Policy</a>
                            </li>
                            <li>
                                <a style={{ color: mode === 'dark' ? 'white' : '' }} class="text-black hover:text-black">Privacy Policy</a>
                            </li>
                           
                        </nav>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 style={{ color: mode === 'dark' ? 'white' : '' }} class="title-font font-medium text-black tracking-widest text-sm mb-3">WE DELIVER TO:</h2>
                        <nav class="list-none mb-10">
                            <li>
                                <a style={{ color: mode === 'dark' ? 'white' : '' }} class="text-black hover:text-black">Banglore</a>
                            </li>
                            <li>
                                <a style={{ color: mode === 'dark' ? 'white' : '' }} class="text-black hover:text-black">Delhi</a>
                            </li>
                            <li>
                                <a style={{ color: mode === 'dark' ? 'white' : '' }} class="text-black hover:text-black">Jalandhar</a>
                            </li>
                            <li>
                                <a style={{ color: mode === 'dark' ? 'white' : '' }} class="text-black hover:text-black">Pune</a>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: mode === 'dark' ? 'black' : '' }} class="bg-gray-200 bg-opacity-75">
                <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p style={{ color: mode === 'dark' ? 'white' : '' }} class="text-black text-sm text-center sm:text-left">© 2023  —
                        <a style={{ color: mode === 'dark' ? 'white' : '' }} href={linkidin} rel="noopener noreferrer" class="text-black ml-1" target="_blank">@Angad Singh </a><br/>
                        <a style={{ color: mode === 'dark' ? 'white' : '' }} href={linkidin} rel="noopener noreferrer" class="text-black ml-1" target="_blank">👳‍♂️ angad_ramgarhiia</a>

                    </p>
                    <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <a style={{ color: mode === 'dark' ? 'white' : '' }} class="text-black  cursor-pointer" >
                            <svg href={linkidin} fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a style={{ color: mode === 'dark' ? 'white' : '' }} class="ml-3 text-black cursor-pointer" href={linkidin}>
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                        <a style={{ color: mode === 'dark' ? 'white' : '' }} class="ml-3 text-black cursor-pointer" href={linkidin}>
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a style={{ color: mode === 'dark' ? 'white' : '' }} class="ml-3 text-black cursor-pointer" href={linkidin}>
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
