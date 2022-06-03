import {PopupToggle, PongToggle} from './mainUtil.js';

function Popup(){
  return (
    <div id="popupMain" className="fixed hidden animate__animated bottom-0 right-0 w-screen sm:w-[30rem]">
      <div className="pb-2 pl-4 pr-4 pt-4 bg-white text-sky-600">

        <span className="font-sans">
          Nice to see you still here. Or have you just clicked back here after
          forgetting what this tab was? Oops
        </span>

        <div className="m-4 flex justify-center items-center ">
          <span className="MainPopupButtons mouseHover p-1 mr-4" onClick={PongToggle}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline bi bi-joystick mr-3 popupMainIcon" viewBox="0 0 16 16">
              <path d="M10 2a2 2 0 0 1-1.5 1.937v5.087c.863.083 1.5.377 1.5.726 0 .414-.895.75-2 .75s-2-.336-2-.75c0-.35.637-.643 1.5-.726V3.937A2 2 0 1 1 10 2z"/>
              <path d="M0 9.665v1.717a1 1 0 0 0 .553.894l6.553 3.277a2 2 0 0 0 1.788 0l6.553-3.277a1 1 0 0 0 .553-.894V9.665c0-.1-.06-.19-.152-.23L9.5 6.715v.993l5.227 2.178a.125.125 0 0 1 .001.23l-5.94 2.546a2 2 0 0 1-1.576 0l-5.94-2.546a.125.125 0 0 1 .001-.23L6.5 7.708l-.013-.988L.152 9.435a.25.25 0 0 0-.152.23z"/>
            </svg>
            Fancy a game?
          </span>

          <span className="MainPopupButtons mouseHover p-1 mr-4" onClick={PopupToggle}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline bi bi-x-circle mr-3 popupMainIcon" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
            Goodbye
          </span>
        </div>

      </div>
    </div>
  );
}

export default Popup;
