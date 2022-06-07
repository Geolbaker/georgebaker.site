
import {Mouse, ResetTheme, PopupToggle} from './mainUtil.js';
import {useEffect} from 'react';
import Popup from './popup.js'
import Pong from './pong.js';

import assets from '../assets.js';
import photoAssets from './photographyAssets.js';


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

        <div id="header" className="h-[65px] border-b border-slate-500/25 absolute top-0 left-0 w-full flex justify-between">
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
        <div className="overflow-hidden flex absolute w-full bottom-0" style={{height: "calc(100% - 65px)"}}>
          <div id="sidebar" className="w-[240px] h-full border-r border-slate-500/25 p-8 overflow-auto shrink-0">
           <div id="side-wrapper">
            <div className="text-slate-400 mb-2">Creativity</div>
            <div className="flex flex-col whitespace-nowrap">

             <div className="flex align-center text-white p-2 mouseHover">
              <svg fill="currentColor" className="w-4 mr-2" viewBox="0 0 16 16">
                 <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"/>
                 <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
              </svg>
              Photography
             </div>

             <div className="flex align-center text-white p-2 mouseHover">
              <svg fill="currentColor" className="w-4 mr-2" viewBox="0 0 16 16">
                <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"/>
                <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7zm6 8.73V7.27l-3.5 1.555v4.35l3.5 1.556zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z"/>
                <path d="M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
              </svg>
              Documentary
             </div>

             <div className="flex align-center text-white p-2 mouseHover">
               <svg fill="currentColor" className="w-4 mr-2" viewBox="0 0 16 16">
                 <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0zm-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/>
               </svg>
              3D Rendering
             </div>

             <div className="flex align-center text-white p-2 mouseHover">
               <svg fill="currentColor" className="w-4 mr-2" viewBox="0 0 16 16">
                 <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
              </svg>
              Server Building
             </div>



            </div>
           </div>

           <div id="side-wrapper">
            <div className="text-slate-400 mb-2 mt-5">Apps</div>
            <div className="flex flex-col whitespace-nowrap">

             <div className="flex align-center text-white p-2 mouseHover">
              <svg viewBox="0 0 512 512" className="w-4 mr-2">
               <g xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                <path d="M0 0h128v128H0zm0 0M192 0h128v128H192zm0 0M384 0h128v128H384zm0 0M0 192h128v128H0zm0 0" data-original="#bfc9d1"></path>
               </g>
               <path xmlns="http://www.w3.org/2000/svg" d="M192 192h128v128H192zm0 0" fill="currentColor" data-original="#82b1ff"></path>
               <path xmlns="http://www.w3.org/2000/svg" d="M384 192h128v128H384zm0 0M0 384h128v128H0zm0 0M192 384h128v128H192zm0 0M384 384h128v128H384zm0 0" fill="currentColor" data-original="#bfc9d1"></path>
              </svg>
              All Apps
             </div>

             <div className="flex align-center text-white p-2 mouseHover">
               <svg viewBox="0 0 488.932 488.932" fill="currentColor" className="w-4 mr-2">
                <path d="M243.158 61.361v-57.6c0-3.2 4-4.9 6.7-2.9l118.4 87c2 1.5 2 4.4 0 5.9l-118.4 87c-2.7 2-6.7.2-6.7-2.9v-57.5c-87.8 1.4-158.1 76-152.1 165.4 5.1 76.8 67.7 139.1 144.5 144 81.4 5.2 150.6-53 163-129.9 2.3-14.3 14.7-24.7 29.2-24.7 17.9 0 31.8 15.9 29 33.5-17.4 109.7-118.5 192-235.7 178.9-98-11-176.7-89.4-187.8-187.4-14.7-128.2 84.9-237.4 209.9-238.8z"></path>
               </svg>
              Updates
             </div>

            </div>
           </div>


          </div>
          </div>


          <div id="mainContent" className="flex absolute bottom-0 right-0 rounded-br-2xl" style={{width: "calc(100% - 240px)", height: "calc(100% - 65px)"}}>

            <div id="mainContentHeader" className="flex items-center justify-center border-b border-slate-500/25 h-[65px] shrink-0 w-full text-white sticky top-0">
              <div id="sectionTitle" className="font-bold ml-10 absolute left-0">Photography</div>
              <div id="sectionHeaders" className="flex">
                <div className="activeSectionTitle font-bold px-8 h-[65px] flex items-center text-slate-400 transition-all hover:text-white hover:border-b-2 hover:border-white">
                  Title 1
                </div>
                <div className="font-bold px-8 h-[65px] flex items-center text-slate-400 transition-all hover:text-white hover:border-b-2 hover:border-white">
                  Title 2
                </div>
                <div className="font-bold px-8 h-[65px] flex items-center text-slate-400 transition-all hover:text-white hover:border-b-2 hover:border-white">
                  Title 3
                </div>
              </div>
            </div>

            <div id="sectionContent" className="bg-slate-900/[.6] absolute top-0 right-0 w-full top-[65px] overflow-scroll" style={{height: "calc(100% - 65px)"}}>
              <img src={photoAssets[0]} />
              <img src={photoAssets[1]} />
              <img src={photoAssets[2]} />
              <img src={photoAssets[3]} />
              <img src={photoAssets[4]} />
              <img src={photoAssets[5]} />
              <img src={photoAssets[6]} />
              <img src={photoAssets[7]} />
              <img src={photoAssets[8]} />
            </div>


          </div>
      </div>
    </div>

  );

}

export default Body;
