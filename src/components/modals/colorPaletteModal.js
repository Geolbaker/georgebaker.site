import {OpenColorPalette, ChangeColorPalette} from '../global/Utils.js';

function ColorPaletteModal(){
  return (
    <div id="colorPaletteModal" className="container position-fixed m-5 d-none">
    <div className="position-fixed w-100 h-100" style={{top: "0", left: "0"}} onClick={OpenColorPalette}></div>
      <div className=" popupBlockColor arrow-top">
        <div id="colorPaletteContent">

          <div className="colorPalette" onClick={() => ChangeColorPalette('botanical')}>
            <div className="d-flex p-4">
              <div className="col-3 d-inline" style={{background: "rgb(114 144 141)"}}>
                {'\u00A0'}
              </div>
              <div className="col-3 d-inline" style={{background: "rgb(123 156 152)"}}>
                {'\u00A0'}
              </div>
              <div className="col-3 d-inline" style={{background: "rgb(233 241 243)"}}>
                {'\u00A0'}
              </div>
              <div className="col-3 d-inline" style={{background: "rgb(73 87 85)"}}>
                {'\u00A0'}
              </div>
            </div>
          </div>

            <div className="colorPalette" onClick={() => ChangeColorPalette('hello')}>
              <div className="d-flex p-4">
                <div className="col-3 d-inline" style={{background: "rgb(38 57 77)"}}>
                  {'\u00A0'}
                </div>
                <div className="col-3 d-inline" style={{background: "rgb(236 236 235)"}}>
                  {'\u00A0'}
                </div>
                <div className="col-3 d-inline" style={{background: "rgb(0 0 0)"}}>
                  {'\u00A0'}
                </div>
                <div className="col-3 d-inline" style={{background: "rgb(255 255 255)"}}>
                  {'\u00A0'}
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ColorPaletteModal;
