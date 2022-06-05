
import {Mouse, ResetTheme, PopupToggle} from './mainUtil.js';
import {useEffect} from 'react';
import Popup from './popup.js'
import Pong from './pong.js';


function Body() {
  useEffect(()=>{
    Mouse();
    ResetTheme();

  },[]);
  PopupToggle();
  return (
    <div id="body" className="flex flex-wrap justify-center items-center">
      <div className="h-screen w-screen overflow-hidden flex flex-wrap items-center justify-center">
        <svg className="h-full w-full fixed z-[-1] top-0" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="Gradient1" cx="50%" cy="50%" fx="10%" fy="50%" r=".5">
              <animate attributeName="fx" dur="34s" values="0%;3%;0%" repeatCount="indefinite" />
              <stop offset="0%" stopColor="#fff" />
              <stop offset="100%" stopColor="#fff0" />
            </radialGradient>
            <radialGradient id="Gradient2" cx="50%" cy="50%" fx="10%" fy="50%" r=".5">
              <animate attributeName="fx" dur="23.5s" values="0%;3%;0%" repeatCount="indefinite" />
              <stop offset="0%" stopColor="#0ff" />
              <stop offset="100%" stopColor="#0ff0" />
            </radialGradient>
            <radialGradient id="Gradient3" cx="50%" cy="50%" fx="50%" fy="50%" r=".5">
              <animate attributeName="fx" dur="21.5s" values="0%;3%;0%" repeatCount="indefinite" />
              <stop offset="0%" stopColor="#f0f" />
              <stop offset="100%" stopColor="#f0f0" />
            </radialGradient>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient1)">
            <animate attributeName="x" dur="20s" values="25%;0%;25%" repeatCount="indefinite" />
            <animate attributeName="y" dur="21s" values="0%;25%;0%" repeatCount="indefinite" />
            <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="17s" repeatCount="indefinite" />
          </rect>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient2)">
            <animate attributeName="x" dur="23s" values="-25%;0%;-25%" repeatCount="indefinite" />
            <animate attributeName="y" dur="24s" values="0%;50%;0%" repeatCount="indefinite" />
            <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="18s" repeatCount="indefinite" />
          </rect>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient3)">
            <animate attributeName="x" dur="25s" values="0%;25%;0%" repeatCount="indefinite" />
            <animate attributeName="y" dur="26s" values="0%;25%;0%" repeatCount="indefinite" />
            <animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="19s" repeatCount="indefinite" />
          </rect>
        </svg>
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

      <div className="container flex justify-center items-center rounded-2xl mb-10 glass-container">
        <p className="flex content-center p-5 m-5">CALL ME YOU FUCKING NERDS</p>
      </div>


    </div>
  );

}

export default Body;
