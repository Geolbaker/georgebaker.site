import {ColorRender, PlaceholderToggle, CreateDateCode, PopupToggle, PopupCode, ColorLiveupdate, PopupDelayTime} from './Utils.js';
import assets from './assets.js';


function Body() {
  return (
    <div id="body">
    <div className="container d-flex justify-content-center pt-5">
      <div className="row w-100 text-center justify-content-center align-items-center" id="externalWebsites">
        <div className="col-12 mt-5">
          <h2>External Websites</h2>
        </div>

        <div className="col-12 col-md-6 col-lg-4 w-100 p-md-4 p-1 pt-2">
          <div className="col-12 p-3">
            <a href="https://github.com/" target="blank">
              <img loading="lazy" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png" alt="github Logo" className="w-100 image-responsive"/>
            </a>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 w-100 p-md-4 p-1 pt-2">
          <div className="col-12 p-3">
            <a href="https://formsubmit.co/" target="blank">
              <img loading="lazy" src="https://formsubmit.co/image/logo.png" alt="formsubmit logo" className="w-100 image-responsive"/>
            </a>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 w-100 p-md-4 p-1 pt-2">
          <div className="col-12 p-3">
            <a href="https://htmlcolorcodes.com" target="blank">
              <img loading="lazy" src={assets[5]} alt="htmlcolorcodes logo" className="w-100 image-responsive"/>
            </a>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 w-100 p-md-4 p-1 pt-2">
          <div className="col-12 p-3">
            <a href="https://www.freeformatter.com/html-formatter.html" target="blank">
              <img loading="lazy" src={assets[4]} alt="html beautifier logo" className="w-100 image-responsive"/>
            </a>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 w-100 p-md-4 p-1 pt-2">
          <div className="col-12 p-3">
            <a href="https://www.freeformatter.com/css-beautifier.html" target="blank">
              <img loading="lazy" src={assets[3]} alt="css beautifier logo" className="w-100 image-responsive"/>
            </a>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 w-100 p-md-4 p-1 pt-2">
          <div className="col-12 p-3">
            <a href="https://www.freeformatter.com/javascript-beautifier.html" target="blank">
              <img loading="lazy" src={assets[6]} alt="javascript beautifier logo" className="w-100 image-responsive"/>
            </a>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 w-100 p-md-4 p-1 pt-2">
          <div className="col-12 p-3">
            <a href="https://pagespeed.web.dev/" target="blank">
              <img loading="lazy" src={assets[7]} alt="pagespeed" className="w-100 image-responsive"/>
            </a>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 w-100 p-md-4 p-1 pt-2">
          <div className="col-12 p-3">
            <a href="https://tinypng.com/" target="blank">
              <img loading="lazy" src={assets[8]} alt="tinypng logo" className="w-100 image-responsive"/>
            </a>
          </div>
        </div>




      </div>
    </div>
      <div className="container d-flex justify-content-center">
      <div className="row w-100 text-center justify-content-center" id="helpfulCode">
        <div className="col-12 mt-2">
          <h2>Helpful Code</h2>
        </div>
        <div className="col-12 col-lg-6 col-xl-4 w-100 p-md-5 p-1 pt-3">
          <div className="col-12 text-center bg-white rounded pb-4 containerShadow">
            <h2 className="pt-3">Skeleton Placeholders</h2>
            <div className="row d-flex flex-wrap justify-content-center" id="placeholder-content">
              <div className="col-6 loader w-100 m-0 mb-1">
                <div className="p-3 loader-content">
                  <div className="advert-title-placeholder"> Text</div>
                  <div className="advert-content-placeholder"> Text</div>
                </div>
              </div>
              <div className="col-6 loader w-100 m-0 mb-1">
                <div className="p-3 loader-content">
                  <div className="advert-title-placeholder"> Text</div>
                  <div className="advert-content-placeholder"> Text</div>
                </div>
              </div>
            </div>
            <div className="row d-none flex-wrap justify-content-center" id="advert-content">
              <div className="col-6 w-100 m-0 mb-1">
                <div className="p-3 advert-content">
                  <div className="advert-title"> Loaded</div>
                  <div className="advert-content"> Loaded</div>
                </div>
              </div>
              <div className="col-6 w-100 m-0 mb-1">
                <div className="p-3 advert-content">
                  <div className="advert-title"> Loaded</div>
                  <div className="advert-content"> Loaded</div>
                </div>
              </div>
            </div>
            <br/>
            <input type="color" id="colorLoader1" name="head" defaultValue="#D1FFF6" onChange={ColorLiveupdate}/>
            <input type="color" id="colorLoader2" name="head" defaultValue="#FFB6F1" onChange={ColorLiveupdate}/>
            <br/><br/>
            <button className="btn btn-primary m-2" data-toggle="modal" data-target="#placeholderModal" onClick={() => ColorRender('chosen')}> Chosen</button>
            <button className="btn btn-primary m-2" data-toggle="modal" data-target="#placeholderModal" onClick={() => ColorRender("generic")}> Grey</button>
            <button className="btn btn-primary m-2" onClick={PlaceholderToggle}> Add Content Toggle</button>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-xl-4 w-100 p-md-5 p-1 pt-3">
          <div className="col-12 text-center bg-white rounded pb-4 containerShadow">
            <h2 className="pt-3">Timed Display Enabler</h2>
            <div className="col-12 d-flex flex-wrap align-content-center flex-column">
              <label>Select date:</label>
              <input className="col-12 col-xl-8 m-2" type="datetime-local" id="selectedDateTime" name="selectedDateTime"
                  defaultValue="2022-01-01T01:00" min="2010-01-01T00:00" max="2090-12-31T24:00"/>
              <button className="btn btn-primary col-12 col-xl-8 m-2" onClick={() => CreateDateCode(true)} data-toggle="modal" data-target="#contentDateModal">Enable Code</button>
              <button className="btn btn-primary col-12 col-xl-8 m-2" onClick={() => CreateDateCode(false)} data-toggle="modal" data-target="#contentDateModal">Disable Code</button>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-xl-4 w-100 p-md-5 p-1 pt-3">
          <div className="col-12 text-center bg-white rounded pb-4 containerShadow">
            <h2 className="pt-3">Pop-up - Set Time</h2>
            <div className="col-12 d-flex flex-wrap align-content-center flex-column">
              <input type="range" id="popup-slider" name="time-s" min="1" max="30" defaultValue="5" onChange={PopupDelayTime}/>
              <p id="popUpdefaultValue">5 Seconds</p>
              <button className="btn btn-primary m-2" onClick={PopupToggle}>Show Popup</button>
              <button className="btn btn-primary m-2" data-toggle="modal" data-target="#popupCodeModal" onClick={PopupCode}>Show Code</button>
            </div>
          </div>
        </div>




      </div>
    </div>
    <div className="container d-flex justify-content-center">
      <div className="row w-100 text-center justify-content-center" id="colours">
        <div className="col-12 mt-2">
          <h2>Branding And Colours</h2>
        </div>
          <div className="col-12 col-md-6 col-lg-4 w-100 p-md-5 p-1 pt-3">

            <h2>SU Main Colours</h2>
            <div className="col-12 p-3">
              <div className="bg-dark rounded p-2">
                <div className="col-12 p-4 text-center" style={{background: "#C31F21"}}>
                  <span className="w-100" style={{color: "white"}}>#C31F21</span>
                </div>
                <div className="col-12 p-4 text-center" style={{background: "#DB362E"}}>
                  <span className="w-100" style={{color: "white"}}>#DB362E</span>
                </div>
              </div>
            </div>
            <h2>White Gradients</h2>
            <div className="col-12 p-3">
              <div className="bg-dark rounded p-2">
                <div className="col-12 p-4" style={{background: "#E5E6E4"}}>
                  <span>#E5E6E4</span>
                </div>
                <div className="col-12 p-4" style={{background: "#ECECEB"}}>
                  <span>#ECECEB</span>
                </div>
                <div className="col-12 p-4" style={{background: "#F2F3F2"}}>
                  <span>#F2F3F2</span>
                </div>
                <div className="col-12 p-4" style={{background: "#F9F9F8"}}>
                  <span>#F9F9F8</span>
                </div>
                <div className="col-12 p-4" style={{background: "#FFFFFF"}}>
                  <span>#FFFFFF</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 w-100 p-md-5 p-1 pt-3">
            <h2>SU Standard Colours</h2>
            <div className="col-12 p-3">
              <div className="bg-dark rounded p-2">
                <div className="col-12 p-4 text-center" style={{background: "#F17F41"}}>
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

export default Body;
