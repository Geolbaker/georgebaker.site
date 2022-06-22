
import {ResetTheme, PopupToggle} from './mainUtil.js';
import {useEffect, useState} from 'react';
import Popup from './popup.js'
import Pong from './pong.js';

import assets from '../../../assets.js';
import mainAssets from './mainAssets.js';
import PhotographySection from './components/section-photography.js';
import DocumentarySection from './components/section-documentary.js';
import RenderSection from './components/section-3Drendering.js';
import ProfileSection from './components/section-profile.js';
import WebsitesSection from './components/section-websites.js';

import WindowsBackground from './assets/windowsBackground.webp'

function Body() {
  const [active, setActive] = useState('Profile');

  useEffect(()=>{
    ResetTheme();

  });

  var popupToggled = localStorage.getItem('popupToggle');

  if (popupToggled === "0") {
    PopupToggle();

  }


  return (
    <div id="body" className="flex flex-wrap justify-center items-center" style={{fontFamily: "Tahoma"}}>
      <div id="opacityHomeCheck" className="w-screen h-screen fixed top-0 right-0 z-[-1] opacity-20 transition-all duration-200">
        <img className="z-[1000] w-screen h-screen top-0 left-0 absolute" src={WindowsBackground} />
      </div>
      <Popup />
      <Pong />
      <div id="heroScreen" className="h-screen w-screen overflow-hidden flex flex-wrap items-center justify-center">
        <div className="h-[20vh] absolute items-center top-1/4 mb-[50vh]">
          <div className="overflow-hidden text-3xl">
            Please scroll down here
          </div>
        </div>
      </div>

      <div className="container flex justify-center items-center rounded-2xl bg-['#0053e2'] h-[90vh] z-[1] relative my-[5vh]">

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
                <path fillRule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z"/>
              </svg>
            </div>
          </div>
          <div onClick={() => setActive('Profile')} id="profilePicture" className={`flex justify-end items-center p-4 mouseHover ${active === 'Profile' ? "bg-slate-400/[.1]" : ""} rounded-tr-2xl hover:bg-slate-400/[.1]`}>

          <img src={assets[9]} alt="profilePicture" className="h-[32px] w-[32px] rounded-full object-cover border-2 border-white mr-4"/>
            <div className="text-white mr-4">
              Profile
            </div>
          </div>
        </div>
        <div className="overflow-hidden flex absolute w-full bottom-0" style={{height: "calc(100% - 65px)"}}>
          <div id="sidebar" className="w-[240px] h-full border-r border-slate-500/25 p-8 overflow-auto shrink-0">

          {/*start of work section*/}
          <div id="side-wrapper" className="mb-5">
           <div className="text-slate-400 mb-2">Work</div>
           <div className="flex flex-col whitespace-nowrap">

            <div onClick={() => setActive('Websites')} className={`${active === 'Websites' ? "bg-slate-400/[.1]" : ""} flex align-center text-white p-2 mouseHover rounded-lg hover:bg-slate-400/[.1]`}>
              <svg fill="currentColor" className="w-4 mr-2" viewBox="0 0 16 16">
               <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
              </svg>
             Websites
            </div>


           </div>
          </div>
          {/*end of work section*/}

          {/*start of creativity section*/}
           <div id="side-wrapper">
            <div className="text-slate-400 mb-2">Creativity</div>
            <div className="flex flex-col whitespace-nowrap">

             <div onClick={() => setActive('Photography')} className={`${active === 'Photography' ? "bg-slate-400/[.1]" : ""} flex align-center text-white p-2 mouseHover rounded-lg hover:bg-slate-400/[.1]`}>
              <svg fill="currentColor" className="w-4 mr-2" viewBox="0 0 16 16">
                 <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"/>
                 <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
              </svg>
              Photography
             </div>

             <div onClick={() => setActive('Documentary')} className={`${active === 'Documentary' ? "bg-slate-400/[.1]" : ""} flex align-center text-white p-2 mouseHover rounded-lg hover:bg-slate-400/[.1]`}>
              <svg fill="currentColor" className="w-4 mr-2" viewBox="0 0 16 16">
                <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"/>
                <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7zm6 8.73V7.27l-3.5 1.555v4.35l3.5 1.556zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z"/>
                <path d="M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
              </svg>
              Documentary
             </div>

             <div onClick={() => setActive('3DRendering')} className={`${active === '3DRendering' ? "bg-slate-400/[.1]" : ""} flex align-center text-white p-2 mouseHover rounded-lg hover:bg-slate-400/[.1]`}>
               <svg fill="currentColor" className="w-4 mr-2" viewBox="0 0 16 16">
                 <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0zm-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/>
               </svg>
              3D Rendering
             </div>


            </div>
           </div>
           {/*end of creativity section*/}



          </div>
          </div>


          <div id="mainContent">

            <div className={`transition-opacity duration-500 ${active === 'Websites' ? "opacity-100" : "opacity-0"}`}>
            {active === "Websites" && <WebsitesSection />}
            </div>


            <div className={`transition-opacity duration-500 ${active === 'Photography' ? "opacity-100" : "opacity-0"}`}>
            {active === "Photography" && <PhotographySection />}
            </div>
            <div className={`transition-opacity duration-500 ${active === 'Documentary' ? "opacity-100" : "opacity-0"}`}>
            {active === "Documentary" && <DocumentarySection />}
            </div>
            <div className={`transition-opacity duration-500 ${active === '3DRendering' ? "opacity-100" : "opacity-0"}`}>
            {active === "3DRendering" && <RenderSection />}
            </div>
            <div className={`transition-opacity duration-500 ${active === 'Server' ? "opacity-100" : "opacity-0"}`}>
            {active === "Server" && <PhotographySection />}
            </div>


            <div className={`transition-opacity duration-500 ${active === 'Profile' ? "opacity-100" : "opacity-0"}`}>
            {active === "Profile" && <ProfileSection />}
            </div>


          </div>
      </div>
    </div>

  );

}

export default Body;