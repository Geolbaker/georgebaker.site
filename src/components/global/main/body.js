import assets from '../assets.js';
import {Mouse, ResetTheme, PopupToggle} from './mainUtil.js';
import {useEffect} from 'react';
import Popup from './popup.js'


function Body() {
  useEffect(()=>{
    Mouse();
    ResetTheme();
  },[]);
  PopupToggle();
  return (
    <div id="body" className="align-items-center d-flex flex-wrap justify-content-center pt-5 overflow-hidden">
      <Popup />
      <div className="typing-wrapper">
        <div className="typing-intro">
          Welcome to my site. :)
        </div>
      </div>
    </div>
  );

}

export default Body;
