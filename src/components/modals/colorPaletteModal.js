import {OpenColorPalette, ChangeColorPalette} from '../global/Utils.js';
import {useEffect} from 'react';

function ColorPaletteModal(){
  useEffect(()=>{
    ChangeColorPalette();
  },[]);
  return (
    <div id="colorPaletteModal" className="container fixed m-5 py-16 invisible">
      <div className="fixed w-full h-full colorPaletteBackground" onClick={OpenColorPalette}></div>
      <div className=" popupBlockColor rounded-lg drop-shadow-md">
        <div id="colorPaletteContent" className="relative z-[200]">
        <div onClick={() => ChangeColorPalette('normal')}>
          <div className="flex p-2 grid grid-cols-4 transition-all ease-in-ease-out duration-500 hover:box-shadow-lg hover:text-[2rem] hover:cursor-pointer">
            <div className="rounded-l-lg" style={{background: "rgb(255 255 255)"}}>
              {'\u00A0'}
            </div>
            <div style={{background: "rgb(236 236 235)"}}>
              {'\u00A0'}
            </div>
            <div style={{background: "rgb(0 0 0)"}}>
              {'\u00A0'}
            </div>
            <div className="rounded-r-lg" style={{background: "rgb(38 57 77)"}}>
              {'\u00A0'}
            </div>
          </div>
        </div>

          <div onClick={() => ChangeColorPalette('botanical')}>
            <div className="flex p-2 grid grid-cols-4 transition-all ease-in-ease-out duration-500 hover:box-shadow-lg hover:text-[2rem] hover:cursor-pointer">
              <div className="rounded-l-lg" style={{background: "rgb(114 144 141)"}}>
                {'\u00A0'}
              </div>
              <div style={{background: "rgb(123 156 152)"}}>
                {'\u00A0'}
              </div>
              <div style={{background: "rgb(233 241 243)"}}>
                {'\u00A0'}
              </div>
              <div className="rounded-r-lg" style={{background: "rgb(73 87 85)"}}>
                {'\u00A0'}
              </div>
            </div>
          </div>

          <div onClick={() => ChangeColorPalette('witchgirl')}>
            <div className="flex p-2 grid grid-cols-4 transition-all ease-in-ease-out duration-500 hover:box-shadow-lg hover:text-[2rem] hover:cursor-pointer">
              <div className="rounded-l-lg" style={{background: "rgb(231 200 190)"}}>
                {'\u00A0'}
              </div>
              <div style={{background: "rgb(243 219 218)"}}>
                {'\u00A0'}
              </div>
              <div style={{background: "rgb(86 120 106)"}}>
                {'\u00A0'}
              </div>
              <div className="rounded-r-lg" style={{background: "rgb(220 180 167)"}}>
                {'\u00A0'}
              </div>
            </div>
          </div>

          <div onClick={() => ChangeColorPalette('alpine')}>
            <div className="flex p-2 grid grid-cols-4 transition-all ease-in-out duration-500 hover:box-shadow-lg hover:text-[2rem] hover:cursor-pointer">
              <div className="rounded-l-lg" style={{background: "rgb(118 115 140)"}}>
                {'\u00A0'}
              </div>
              <div style={{background: "rgb(108 104 127)"}}>
                {'\u00A0'}
              </div>
              <div style={{background: "rgb(255 255 255)"}}>
                {'\u00A0'}
              </div>
              <div className="rounded-r-lg" style={{background: "rgb(119 115 140)"}}>
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
