import NotificationCenter from './tools/notificationCenter.js';
import ColorPaletteSelector from './tools/colorPaletteSelector.js';
import { Link } from "react-router-dom";
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import Vivus from "vivus";
import {useEffect} from 'react';




function Header() {
  useEffect(()=>{
    new Vivus('homeLogoSVG', {duration: 200});
  });
  return (
    <Popover className="fixed top-0 w-full bg-white bg-light">
      <div className="justify-center max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex-1 justify-start">
            <a href="/">
              <span className="sr-only">Workflow</span>
              <svg id="homeLogoSVG" xmlns="http://www.w3.org/2000/svg" fill="#ffac32" viewBox="0 0 50 50" height="50" width="50">
                <path fill="none" stroke="#ffac32" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" d="M25 16c4.963 0 9 4.038 9 9 0 4.963-4.037 9-9 9-4.962 0-9-4.037-9-9C16 20.038 20.038 16 25 16M25 45L25 39M25 11L25 5M5 25L11 25M39 25L45 25M10.858 39.143L15.101 34.9M34.899 15.102L39.143 10.858M10.858 10.858L15.101 15.102M34.899 34.9L39.143 39.143"/>
              </svg>
            </a>
          </div>



            <a href="/tools" className="flex text-base font-medium hover:font-bold">
              Tools
            </a>
            <a href="/fontsizes" className="flex text-base font-medium hover:font-bold">
              Font Sizes
            </a>
            <div className="flex-1 flex flex-row-reverse">
              <NotificationCenter />
              <ColorPaletteSelector />
            </div>
        </div>

      </div>
    </Popover>

  );
}

export default Header;
