import {PongFunction, PongToggle} from './mainUtil.js';
import {useEffect} from 'react';


function Pong() {
  useEffect(() => {
    PongFunction();
  });
  return (
    <div className="invisible fixed top-0 left-0 bg-white/[0.8] w-screen h-screen justify-center items-center flex" id="PongGameContainer">
      <span className="fixed z-[3000] top-0 left-0 bg-slate-600/[0.8] w-screen h-screen transition duration-700 ease-linear hover:bg-slate-600/[0.25] mouseHover" onClick={PongToggle}></span>
      <canvas className="z-[4000]"></canvas>
    </div>
  )
}

export default Pong;
