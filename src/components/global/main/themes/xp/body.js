
import {ResetTheme, PopupToggle} from './mainUtil.js';
import {useEffect, useState} from 'react';
import Popup from './popup.js';
import Pong from './pong.js';

import assets from '../../../assets.js';
import mainAssets from './mainAssets.js';
import './xp.css';
import PhotographySection from './components/section-photography.js';
import DocumentarySection from './components/section-documentary.js';
import RenderSection from './components/section-3Drendering.js';
import ProfileSection from './components/section-profile.js';
import WebsitesSection from './components/section-websites.js';

import WindowsBackground from './assets/windowsBackground.webp';
import WindowsLogo from './assets/Windows_logo.svg';
import WindowsFolder from './assets/FolderIcon.png';
import WindowsComputer from './assets/MyComputerIcon.png';
import WindowdsFolderOpen from './assets/FolderOpenIcon.png';
import WindowsFile from './assets/FileIcon.png';

function Body() {
  const [active, setActive] = useState('MyComputer');

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

      <div className="container flex justify-center items-center rounded-t-[5px] bg-[#0053e2] border-[#0053e2] border-[3px] h-[90vh] z-[1] relative my-[5vh]
                      shadow-[inset_0_10px_3px_-8px_rgba(52,147,255,0.7)]">

        {/*Start of header*/}

        <div id="header" className="h-auto border-b-[3px] border-[#0053e2]   absolute top-0 left-0 w-full flex justify-end"
        style={{boxShadow: "inset 0 -7px 15px -7px rgba(180,210,255,0.7)"}}>
          <div id="icons" className="group flex p-1 w-full">

            <div className="w-full flex text-white text-left">
              <img src={WindowsComputer} className="m-1 w-[20px] h-[20px]" />
              {active === "MyComputer" && "My Computer"}
              {active === "About" && "About"}
              {active === "Work" && "Work"}
              {active === "Creativity" && "Creativity"}
            </div>

            {/*Start of minimise icon*/}
            <div className="h-[23px] w-[23px] rounded-[2px] bg-white m-[2px] p-[0.6px]">
              <div className="relative h-full w-full bg-[#3870f5] rounded-[2px] flex justify-center items-center border-[0.5px] border-[#3870f5] topbar-buttons hover:brightness-125
              before:content-[''] before:absolute before:h-[3px] before:w-[7px] before:bottom-1 before:left-1 before:bg-white">

              </div>
            </div>
            {/*End of minimise icon*/}

            {/*Start of maximise icon*/}
            <div className="h-[23px] w-[23px] rounded-[2px] bg-white m-[2px] p-[0.6px]">
              <div className="h-full w-full bg-[#3870f5] rounded-[2px] flex justify-center items-center border-[0.5px] border-[#3870f5] topbar-buttons hover:brightness-125">
                <svg width="16" height="16" fill="white" className=" scale-75">
                  <path d="M.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5H.5ZM1 5V2h14v3H1Zm0 1h14v8H1V6Z"/>
                </svg>
              </div>
            </div>
            {/*End of maximise icon*/}

            {/*Start of close icon*/}
            <div className="h-[23px] w-[23px] rounded-[2px] bg-white m-[2px] p-[0.6px]">
              <div className="h-full w-full bg-[#e76338] rounded-[2px] flex justify-center items-center border-[0.5px] border-[#b24228] topbar-buttons hover:brightness-125">
                <svg width="16" height="16" fill="white" className="scale-150">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </div>
            </div>
            {/*End of close icon*/}

          </div>
        </div>
        {/*End of header*/}
        <div className="overflow-hidden flex absolute w-full bottom-0 bg-[#f1eee4]" style={{height: "calc(100% - 38px)"}}>

          <div id="mainContent" className="w-full h-full">
            <div id="topNavbar" className="h-auto w-full flex">

              <div className="flex w-full border-b-[1.5px] border-r-[1.5px] border-[#d5d5cd]">
                <div className="my-[3px] ml-[3px] py-1 px-3 hover:bg-[#1660E8] hover:text-white transition-none">
                  File
                </div>
                <div className="my-[3px] py-1 px-3 hover:bg-[#1660E8] hover:text-white transition-none">
                  Edit
                </div>
                <div className="my-[3px] py-1 px-3 hover:bg-[#1660E8] hover:text-white transition-none">
                  View
                </div>
                <div className="my-[3px] py-1 px-3 hover:bg-[#1660E8] hover:text-white transition-none">
                  Favourites
                </div>
                <div className="my-[3px] py-1 px-3 hover:bg-[#1660E8] hover:text-white transition-none">
                  Tools
                </div>
                <div className="my-[3px] py-1 px-3 hover:bg-[#1660E8] hover:text-white transition-none">
                  Help
                </div>
              </div>
              <div className="bg-white border-b-[1.5px] border-b-[#d5d5cd] border-l-[1.5px] border-l-white">
                <img className="mx-4 my-1 ml-3" src={WindowsLogo} width="35"/>
              </div>
            </div>
            <div className="flex w-full border-b-[1.5px] border-b-[#d5d5cd] border-t-white border-t-[1.5px]">
              <div className="flex border-r-2 border-r-black/[0.2] my-1 pr-1">
                <div onClick={() => setActive('MyComputer')} className={`ml-1 px-1 flex items-center border-2 border-transparent rounded-[5px] ${active === 'MyComputer' ? "" : "hover:border-slate-600/[0.1] hover:shadow-[inset_0_-7px_3px_-7px_rgba(0,0,0,0.1);]"}`}>
                  <div className="m-1 h-[37px] w-[37px] bg-[#1d730e] rounded-full flex justify-center items-center">
                    <svg width="16" height="16" className={`${active === 'MyComputer' ? "bg-[#b2b2b2]" : "bg-[#48c221] hover:brightness-110"} history-buttons w-[13px] h-[13px] scale-[275%] stroke-white rounded-full`}>
                      <path className="translate-y-[-1.3px] translate-x-[-1.3px]" fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                    </svg>
                  </div>
                  &nbsp;Back
                </div>

                <div className="ml-1 px-1 flex items-center border-2 border-transparent rounded-[5px] ">
                  <div className="m-1 h-[37px] w-[37px] bg-[#1d730e] rounded-full flex justify-center items-center">
                    <svg width="16" height="16" className="bg-[#b2b2b2] history-buttons w-[13px] h-[13px] scale-[275%] stroke-white rounded-full">
                      <path className="translate-y-[-1.3px] translate-x-[-1.3px]" fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full border-b-[1.5px] border-b-[#d5d5cd] border-t-white border-t-[1.5px]">
              <div className="flex mt-1 px-3 w-full">
                Address
                <div className="flex ml-3 w-full h-full bg-white border-[#afafff] border-2">
                  <img src={WindowsComputer} className="m-1 w-[20px] h-[20px]" />
                  {active === "MyComputer" && "My Computer"}
                  {active === "About" && "My Computer / About"}
                  {active === "Work" && "My Computer / Work"}
                  {active === "Creativity" && "My Computer / Creativity"}
                </div>
              </div>
            </div>
            <div id="folders" className="flex w-full bg-white" style={{height: "calc(100% - 100px)"}}>

              <div id="MyComputer" className={`${active === 'MyComputer' ? "block" : "hidden"} absolute grid grid-cols-6`}>
                <div onClick={() => setActive('About')} className="flex items-center h-[80px] m-5 group">
                  <img src={WindowsFolder} className="w-[70px] h-[70px] block group-hover:hidden"/>
                  <img src={WindowdsFolderOpen} className="w-[70px] h-[70px] hidden group-hover:block"/>
                  About
                </div>

                <div onClick={() => setActive('Work')} className="flex items-center h-[80px] m-5 group">
                  <img src={WindowsFolder} className="w-[70px] h-[70px] block group-hover:hidden"/>
                  <img src={WindowdsFolderOpen} className="w-[70px] h-[70px] hidden group-hover:block"/>
                  Work
                </div>

                <div onClick={() => setActive('Creativity')} className="flex items-center h-[80px] m-5 group">
                  <img src={WindowsFolder} className="w-[70px] h-[70px] block group-hover:hidden"/>
                  <img src={WindowdsFolderOpen} className="w-[70px] h-[70px] hidden group-hover:block"/>
                  Creativity
                </div>
              </div>

              <div id="Profile" className={`${active === 'About' ? "block" : "hidden"} absolute grid grid-cols-6`}>
                <div onClick={() => setActive('About')} className="flex items-center h-[80px] m-5 group">
                  <img src={WindowsFile} className="w-[70px] h-[70px]"/>
                  Profile
                </div>
                <div onClick={() => setActive('About')} className="flex items-center h-[80px] m-5 group">
                  <img src={WindowsFile} className="w-[70px] h-[70px]"/>
                  Timeline
                </div>
                <div onClick={() => setActive('About')} className="flex items-center h-[80px] m-5 group">
                  <img src={WindowsFile} className="w-[70px] h-[70px]"/>
                  Personal
                </div>
              </div>

              <div id="Work" className={`${active === 'Work' ? "block" : "hidden"} absolute grid grid-cols-6`}>
                <div onClick={() => setActive('Profile')} className="flex items-center h-[80px] m-5 group">
                  <img src={WindowsFile} className="w-[70px] h-[70px]"/>
                  Websites
                </div>
              </div>

              <div id="Creativity" className={`${active === 'Creativity' ? "block" : "hidden"} absolute grid grid-cols-6`}>
                <div onClick={() => setActive('Profile')} className="flex items-center h-[80px] m-5 group">
                  <img src={WindowsFile} className="w-[70px] h-[70px]"/>
                  Photography
                </div>
                <div onClick={() => setActive('Profile')} className="flex items-center h-[80px] m-5 group">
                  <img src={WindowsFile} className="w-[70px] h-[70px]"/>
                  Documentary
                </div>
                <div onClick={() => setActive('Profile')} className="flex items-center h-[80px] m-5 group">
                  <img src={WindowsFile} className="w-[70px] h-[70px]"/>
                  3D-Rendering
                </div>
              </div>

            </div>

          </div>
      </div>
    </div>
    </div>

  );

}

export default Body;
