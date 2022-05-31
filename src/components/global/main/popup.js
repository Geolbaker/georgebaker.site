import {PopupToggle} from './mainUtil.js';

function Popup(){
  return (
    <div id="popupMain" className="position-fixed d-none animate__animated">
      <div className="p-5 popupBlockMain">
        <button type="button" className="close closePopup" onClick={PopupToggle}>
          <span aria-hidden="true">&times;</span>
        </button>
        <span className="MainPopup">
          Nice to see you still here. Or have you just clicked back here after
          forgetting what this tab was? Oops
        </span>
        <span className="MainPopupButtons mouseHover" >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-joystick mr-3" viewBox="0 0 16 16">
            <path d="M10 2a2 2 0 0 1-1.5 1.937v5.087c.863.083 1.5.377 1.5.726 0 .414-.895.75-2 .75s-2-.336-2-.75c0-.35.637-.643 1.5-.726V3.937A2 2 0 1 1 10 2z"/>
            <path d="M0 9.665v1.717a1 1 0 0 0 .553.894l6.553 3.277a2 2 0 0 0 1.788 0l6.553-3.277a1 1 0 0 0 .553-.894V9.665c0-.1-.06-.19-.152-.23L9.5 6.715v.993l5.227 2.178a.125.125 0 0 1 .001.23l-5.94 2.546a2 2 0 0 1-1.576 0l-5.94-2.546a.125.125 0 0 1 .001-.23L6.5 7.708l-.013-.988L.152 9.435a.25.25 0 0 0-.152.23z"/>
          </svg>
          Play a game?
        </span>

      </div>
    </div>
  );
}

export default Popup;
