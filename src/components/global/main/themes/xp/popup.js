import {PopupToggle, PongToggle} from './mainUtil.js';
import Clippy from './assets/clippy.png';

function Popup(){
  return (
    <div id="popupMain" className=" fixed invisible animate__animated bottom-0 right-0 w-screen sm:w-[30rem] z-[400] flex justify-end">
      <div className="absolute bottom-12 right-32 border-black border-2 p-2 bg-[#ffffcb] rounded-md
      after:content-[''] after:absolute after:w-[20px] after:h-[20px] after:border-t-black after:border-t-2 after:border-l-black after:border-l-2
      after:rotate-[135deg] after:bg-[#ffffcb] after:-right-[11.5px] after:bottom-5 after:z-10">
        It looks like youre having <br/> a look at my site
        <br/><br/>
        Anything I can help with?
        <br/><br/>
        <div className="flex flex-row justify-between w-full relative">
          <div className="z-20 px-2 border-black/[0.2] border-2 rounded-[5px] w-16 text-center
          hover:border-[1px] hover:shadow-[2px_2px_2px_-1px_rgba(0,0,0,0.69)] hover:cursor-pointer">Game</div>
          <div onClick={PopupToggle} className=" z-20 px-2 border-black/[0.2] border-2 rounded-[5px] w-16 text-center
          hover:border-[1px] hover:shadow-[2px_2px_2px_-1px_rgba(0,0,0,0.69)] hover:cursor-pointer">No</div>
        </div>
      </div>
      <img className="w-32" loading="lazy" src={Clippy}/>
    </div>
  );
}

export default Popup;
