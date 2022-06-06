
import {Mouse, ResetTheme, PopupToggle} from './mainUtil.js';
import {useEffect} from 'react';
import Popup from './popup.js'
import Pong from './pong.js';

import assets from '../assets.js';


function Body() {

  useEffect(()=>{
    Mouse();
    ResetTheme();

  });

  PopupToggle();

  return (
    <div id="body" className="flex flex-wrap justify-center items-center">
      <div id="opacityHomeCheck" className="w-screen h-screen fixed top-0 right-0 z-[-1] opacity-20 transition-all duration-200">
        <video className="w-screen h-screen object-cover" width="320" height="240" autoPlay loop muted>
          <source src={assets[8]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="h-screen w-screen overflow-hidden flex flex-wrap items-center justify-center">
        <Popup />
        <Pong />
        <div className="font-serif absolute left-0 top-0 text-[21vw] tracking-tighter"
          style={{'WebkitTextStrokeWidth': "1px", 'WebkitTextStrokeColor': "rgb(255 255 255 / 65%)"}}>
          <section aria-label="Floating Logo" className="w-screen absolute top-1/4 content-center items-center">
            <div className="tilt flex content-center items-center text-transparent">
              <span>W</span>
              <span>E</span>
              <span>L</span>
              <span>C</span>
              <span>O</span>
              <span>M</span>
              <span>E</span>
            </div>
          </section>
        </div>
        <div className="h-[20vh] absolute items-center top-1/4 mb-[50vh]">
          <div className="typing-intro w-[22ch] whitespace-nowrap overflow-hidden border-black border-solid border-r-4 font-[monospace] text-3xl">
            Welcome to my site. :)
          </div>
        </div>
      </div>

      <div className="container flex justify-center items-center rounded-2xl mb-10 backdrop-blur-xl bg-slate-900/[.4] h-[90vh] z-[1] relative">

        <div id="header" className="h-[5vw] border-b border-slate-500/25 absolute top-0 left-0 w-full flex justify-between">
          <div id="icons" className="group flex p-1">
            <div className="bg-[#f96057] h-[15px] w-[15px] rounded-full mt-6 ml-5 flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x invisible group-hover:visible" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </div>
            <div className="bg-[#f8ce52] h-[15px] w-[15px] rounded-full mt-6 ml-2 flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash invisible group-hover:visible" viewBox="0 0 16 16">
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
              </svg>
            </div>
            <div className="bg-[#5fcf65] h-[15px] w-[15px] rounded-full mt-6 ml-2 flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrows-angle-expand p-1 invisible group-hover:visible" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z"/>
              </svg>
            </div>
          </div>
          <div id="profilePicture" className="flex justify-end m-4 mouseHover">
            <img src={assets[9]} className="h-[32px] w-[32px] rounded-full object-cover border-2 border-white mr-5"/>
          </div>
        </div>
        Hello, currently in devlepment, check back later :)
      </div>


    </div>
  );

}

export default Body;
