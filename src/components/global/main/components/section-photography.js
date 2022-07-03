import {useState} from 'react';
import photoAssets from '../mainAssets.js';

function PhotographySection() {
    const skyPhotos = [25, 26, 27, 28, 29, 30, 15, 17, 23, 18, 19, 20, 24, 16, 21, 22 ];
    const naturePhotos = [6, 7, 8, 9, 10, 11, 12, 13, 14];
    const buildingPhotos = [0, 1, 5, 3, 4, 2];

    const [active, setActive] = useState('Nature');

    return (
    <div className="flex absolute bottom-0 right-0 rounded-br-2xl" style={{width: "calc(100% - 240px)", height: "calc(100% - 65px)"}}>
      <div id="mainContentHeader" className="flex items-center justify-center border-b border-slate-500/25 h-[65px] shrink-0 w-full text-white sticky top-0">
        <div id="sectionTitle" className="font-bold ml-5 lg:ml-10 absolute left-0">Photography</div>
        <div id="sectionHeaders" className="flex">
          <div onClick={() => setActive('Nature')} id="Nature" className={`${active === 'Nature' ? "activeSectionTitle" : ""} apple-header`}>
            Nature
          </div>
          <div onClick={() => setActive('Building')} id="Building" className={`${active === 'Building' ? "activeSectionTitle" : ""} apple-header`}>
            Buildings
          </div>
          <div onClick={() => setActive('Sky')} id="Sky" className={`${active === 'Sky' ? "activeSectionTitle" : ""} apple-header`}>
            Sky
          </div>
        </div>
      </div>

      <div id="sectionContent" className="p-2 bg-slate-900/[.6] absolute right-0 w-full top-[65px] overflow-auto rounded-br-2xl" style={{height: "calc(100% - 65px)"}}>

        <div id="NaturePhotos" className={`grid grid-cols-2 lg:grid-cols-3 transition-opacity duration-500 absolute ${active === 'Nature' ? "opacity-100" : "opacity-0"}`} style={{width: "calc(100% - 1rem)"}}>
          {naturePhotos.map(i => {
            return <img className={`p-1 rounded-lg ${active === 'Nature' ? "h-100" : "h-0"}`} src={photoAssets[i]} key={i} loading="lazy"/>
          })}
        </div>

          <div id="BuildingPhotos" className={`grid grid-cols-2 lg:grid-cols-3 transition-opacity duration-500 absolute ${active === 'Building' ? "opacity-100" : "opacity-0"}`} style={{width: "calc(100% - 1rem)"}}>
            {buildingPhotos.map(i => {
              return <img className={`p-1 rounded-lg ${active === 'Building' ? "h-100" : "h-0"}`} src={photoAssets[i]} key={i} loading="lazy"/>
            })}
          </div>

          <div id="SkyPhotos" className={`grid grid-cols-2 lg:grid-cols-3 transition-opacity duration-500 absolute ${active === 'Sky' ? "opacity-100" : "opacity-0"}`} style={{width: "calc(100% - 1rem)"}}>
            {skyPhotos.map(i => {
              return <img className={`p-1 rounded-lg ${active === 'Sky' ? "h-100" : "h-0"}`} src={photoAssets[i]} key={i} loading="lazy"/>
            })}
          </div>

      </div>
    </div>
  );
}

export default PhotographySection;
