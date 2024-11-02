import React from "react"
import Fade from "react-reveal/Fade"

import hero from "../../images/file.png"
import "../Home/home.css"

const Header = () => {
  return (
    <Fade duration={2200}>
      <div className="max-w-7xl mx-auto lg:px-6 md:px-3">
        <div className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-0 xl:mt-28 flex lg:flex-justify lg:flex flex-col lg:flex-row flex-col-reverse">
          <div className="text-center lg:text-left flex flex-col justify-center">
            <h2 className="text-black text-gradient bg-gradient-to-r from-pink to-purple text-4xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl nadun1">
              Helping businesses grow with customised AI solutions.
            </h2>

            <p className="mt-3 text-base text-black-70 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Intellisr pvt ltd helps businesses with creative, customised artificial intelligence solutions aimed to drive efficiency and growth.<br/> Our primary focus is on developing and using innovative artificial intelligence solutions, tools specialised to match the specific needs of every client, and concepts.
            </p>

            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md">
                <a
                  href="/contact"
                  className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-purple text-white hover:text-black border border-purple  hover:bg-transparent md:text-lg md:px-10 "
                >
                  Contact Us
                  <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="/about"
                  className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 border border-purple text-base font-medium rounded-md text-black hover:text-white bg-transparent hover:bg-purple md:py-3 md:text-lg md:px-10"
                >
                  Get To Know Us
                </a>
              </div>
            </div>
          </div>

          <div className="logocont">
            <img
              className="robohand"
              src={hero}
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default Header
