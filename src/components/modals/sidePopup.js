import {PopupToggle} from '../global/Utils.js';

function SidePopup(){
  return (
    <div id="popupDiv" className="fixed invisible animate__animated right-0 bottom-0 z-[2000]">
    <div className="bg-teal-500 p-10 drop-shadow-md">
      <button type="button" className="close  absolute top-0 right-[0.3rem] p-2" onClick={PopupToggle}>
        <span aria-hidden="true">&times;</span>
      </button>
      Hello there, I'm a popup

    </div>
  </div>
  );
}

export default SidePopup;
