import {
  CreateDateCode,
  PopupToggle,
  PopupDelayTime,
  PopupModalToggle,
} from '../Utils.js';

import Header from './header.js';
import NotificationCenterModal from '../../modals/notificationCenterModal.js';
import ColorPaletteModal from '../../modals/colorPaletteModal.js';
import TimedDisplayModal from '../../modals/timedDisplayModal.js';
import PopupCodeModal from '../../modals/popupCodeModal.js';
import SidePopup from '../../modals/sidePopup.js';

import assets from '../assets.js';


function Tools() {
  return (
    <div id="tools">
    <NotificationCenterModal  />
    <ColorPaletteModal  />
    <TimedDisplayModal />
    <PopupCodeModal />
    <SidePopup />
    <Header />
    <div className="container justify-center m-auto pt-5">
      <div className="w-full mt-32 justify-center text-center">
        <h2>External Websites</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full text-center justify-center items-center" id="externalWebsites">

        <div className="w-full p-1 pt-2 md:p-4">
          <div className="p-3">
            <a href="https://github.com/" target="blank">
              <img loading="lazy" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png" alt="github Logo" className="w-full"/>
            </a>
          </div>
        </div>
        <div className="w-full p-1 pt-2 md:p-4">
          <div className="p-3">
            <a href="https://formsubmit.co/" target="blank">
              <img loading="lazy" src="https://formsubmit.co/image/logo.png" alt="formsubmit logo" className="w-full"/>
            </a>
          </div>
        </div>
        <div className="w-full p-1 pt-2 md:p-4">
          <div className="p-3">
            <a href="https://htmlcolorcodes.com" target="blank">
              <img loading="lazy" src={assets[5]} alt="htmlcolorcodes logo" className="w-full"/>
            </a>
          </div>
        </div>
        <div className="w-full p-1 pt-2 md:p-4">
          <div className="p-3">
            <a href="https://www.freeformatter.com/html-formatter.html" target="blank">
              <img loading="lazy" src={assets[4]} alt="html beautifier logo" className="w-full"/>
            </a>
          </div>
        </div>
        <div className="w-full p-1 pt-2 md:p-4">
          <div className="p-3">
            <a href="https://www.freeformatter.com/css-beautifier.html" target="blank">
              <img loading="lazy" src={assets[3]} alt="css beautifier logo" className="w-full"/>
            </a>
          </div>
        </div>
        <div className="w-full p-1 pt-2 md:p-4">
          <div className="p-3">
            <a href="https://www.freeformatter.com/javascript-beautifier.html" target="blank">
              <img loading="lazy" src={assets[6]} alt="javascript beautifier logo" className="w-full"/>
            </a>
          </div>
        </div>
        <div className="w-full p-1 pt-2 md:p-4">
          <div className="p-3">
            <a href="https://tinypng.com/" target="blank">
              <img loading="lazy" src={assets[7]} alt="tinypng logo" className="w-full"/>
            </a>
          </div>
        </div>




      </div>
    </div>
      <div className="container justify-center m-auto">
        <div className="w-full mt-2 justify-center text-center">
          <h2>Helpful Code</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full text-center justify-center" id="helpfulCode">

        <div className="w-full p-1 pt-3 md:p-5">
          <div className="text-center bg-white rounded pb-4 containerShadow">
            <h2 className="pt-3">Timed Display Enabler</h2>
            <div className="flex flex-wrap justify-center">
              <label className="w-full">Select date:</label>
              <input className="w-3/5 m-2" type="datetime-local" id="selectedDateTime" name="selectedDateTime"
                  defaultValue="2022-01-01T01:00" min="2010-01-01T00:00" max="2090-12-31T24:00"/>
              <button className="btn-primary m-2" onClick={() => CreateDateCode(true)}>Enabling</button>
              <button className="btn-primary m-2" onClick={() => CreateDateCode(false)}>Disabling</button>
            </div>
          </div>
        </div>

        <div className="w-full p-1 pt-3 md:p-5">
          <div className="text-center bg-white rounded pb-4 containerShadow">
            <h2 className="pt-3">Pop-up - Set Time</h2>
            <div className="flex flex-wrap justify-center">
              <input className="w-3/5 m-3" type="range" id="popup-slider" name="time-s" min="1" max="30" defaultValue="5" onChange={PopupDelayTime}/>
              <p className="w-full text-center" id="popUpdefaultValue">5 Seconds</p>
              <button className="btn-primary m-2" onClick={PopupToggle}>Show Popup</button>
              <button className="btn-primary m-2" data-toggle="modal" data-target="#popupCodeModal" onClick={PopupModalToggle}>Show Code</button>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div className="container justify-center m-auto">
      <div className="w-full mt-2 justify-center text-center">
        <h2>Branding And Colours</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full text-center justify-center" id="colours">
          <div className="w-full p-1 pt-3 md:p-5">

            <h2>SU Main Colours</h2>
            <div className="p-3">
              <div className="bg-slate-700 rounded p-2">
                <div className="p-4 text-center" style={{background: "#C31F21"}}>
                  <span className="w-100" style={{color: "white"}}>#C31F21</span>
                </div>
                <div className="p-4 text-center" style={{background: "#DB362E"}}>
                  <span className="w-100" style={{color: "white"}}>#DB362E</span>
                </div>
              </div>
            </div>
            <h2>White Gradients</h2>
            <div className="p-3">
              <div className="bg-slate-700 rounded p-2">
                <div className="p-4" style={{background: "#E5E6E4"}}>
                  <span>#E5E6E4</span>
                </div>
                <div className="p-4" style={{background: "#ECECEB"}}>
                  <span>#ECECEB</span>
                </div>
                <div className="p-4" style={{background: "#F2F3F2"}}>
                  <span>#F2F3F2</span>
                </div>
                <div className="p-4" style={{background: "#F9F9F8"}}>
                  <span>#F9F9F8</span>
                </div>
                <div className="p-4" style={{background: "#FFFFFF"}}>
                  <span>#FFFFFF</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full p-1 pt-3 md:p-5">
            <h2>SU Standard Colours</h2>
            <div className="p-3">
              <div className="bg-slate-700 rounded p-2">
                <div className="p-4 text-center" style={{background: "#F17F41"}}>
                  <span className="w-100" style={{color: "white"}}>#F17F41</span>
                </div>
                <div className="col-12 p-4 text-center" style={{background: "#FAB728"}}>
                  <span className="w-100" style={{color: "white"}}>#FAB728</span>
                </div>
                <div className="col-12 p-4 text-center" style={{background: "#1FAC81"}}>
                  <span className="w-100" style={{color: "white"}}>#1FAC81</span>
                </div>
                <div className="col-12 p-4 text-center" style={{background: "#1AAADF"}}>
                  <span className="w-100" style={{color: "white"}}>#1AAADF</span>
                </div>
                <div className="col-12 p-4 text-center" style={{background: "#123044"}}>
                  <span className="w-100" style={{color: "white"}}>#123044</span>
                </div>
                <div className="col-12 p-4 text-center" style={{background: "#9B82BB"}}>
                  <span className="w-100" style={{color: "white"}}>#9B82BB</span>
                </div>
                <div className="col-12 p-4 text-center" style={{background: "#EF819A"}}>
                  <span className="w-100" style={{color: "white"}}>#EF819A</span>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>

  </div>

  );

}

export default Tools;
