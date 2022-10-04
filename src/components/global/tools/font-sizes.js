import {FontSizeTextUpdater} from '../Utils.js';

import Header from './header.js';
import NotificationCenterModal from '../../modals/notificationCenterModal.js';
import ColorPaletteModal from '../../modals/colorPaletteModal.js';
import TimedDisplayModal from '../../modals/timedDisplayModal.js';
import PopupCodeModal from '../../modals/popupCodeModal.js';
import SidePopup from '../../modals/sidePopup.js';

function FontSizes() {
  return (
    <div id="font-sizes">
    <NotificationCenterModal  />
    <ColorPaletteModal  />
    <TimedDisplayModal />
    <PopupCodeModal />
    <SidePopup />
    <Header />
      <div className="container-fluid d-flex justify-content-center">
            <div className="row w-100 text-center justify-content-center mt-32" id="helpfulCode">
              <div className="col-12 mt-5">
                <h2>Variable Font Sizes</h2>
              </div>
              <input className="w-75" onChange={FontSizeTextUpdater} type="range" min="0.1" max="2.5" defaultValue="1" id="slider" step="0.05" />
              <p id="fontPara" className="col-12 text-center" style={{fontSize: "1rem"}}>
                <span id="fontTitle">1rem</span>
                <br />
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
            </div>
          </div>
          <div className="container-fluid d-flex justify-content-center">
            <div className="row w-100 text-center" id="helpfulCode">
              <div className="col-12 mt-5">
                <h2>Set Font Sizes</h2>
              </div>
              <p className="col-12 col-sm-6 col-md-3" style={{fontSize: "0.5rem"}}>
                <span>0.5rem</span>
                <br />
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
              <p className="col-12 col-sm-6 col-md-3" style={{fontSize: "0.75rem"}}>
                <span>0.75rem</span>
                <br />
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
              <p className="col-12 col-sm-6 col-md-3" style={{fontSize: "1rem"}}>
                <span>1rem</span>
                <br />
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
              <p className="col-12 col-sm-6 col-md-3" style={{fontSize: "1.25rem"}}>
                <span>1.25rem</span>
                <br />
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
              <p className="col-12 col-sm-6 col-md-3" style={{fontSize: "1.5rem"}}>
                <span>1.5rem</span>
                <br />
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
              <p className="col-12 col-sm-6 col-md-3" style={{fontSize: "1.75rem"}}>
                <span>1.75rem</span>
                <br />
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
              <p className="col-12 col-sm-6 col-md-3" style={{fontSize: "2rem"}}>
                <span>2rem</span>
                <br />
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
              <p className="col-12 col-sm-6 col-md-3" style={{fontSize: "2.25rem"}}>
                <span>2.25rem</span>
                <br />
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>

            </div>
          </div>
          </div>
        );
      }

export default FontSizes;
