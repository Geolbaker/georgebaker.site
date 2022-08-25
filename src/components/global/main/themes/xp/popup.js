import {PopupToggle, PongToggle} from './mainUtil.js';
import Clippy from './assets/clippy.png';

function Popup(){
  return (
    <div id="popupMain" className="fixed invisible animate__animated bottom-0 right-0 w-screen sm:w-[30rem] z-[400] flex justify-end">
      <img className="w-32" loading="lazy" src={Clippy}/>
    </div>
  );
}

export default Popup;
