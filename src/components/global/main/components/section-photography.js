import {useState} from 'react';
import photoAssets from '../photographyAssets.js';

function PhotographySection() {

  const [active, setActive] = useState('Nature');


  let photoSection;
  if (active === "Nature") {
    photoSection = <div className="grid grid-cols-3">
                      <img className="p-1 rounded-lg" src={photoAssets[6]} />
                      <img className="p-1 rounded-lg" src={photoAssets[7]} />
                      <img className="p-1 rounded-lg" src={photoAssets[8]} />
                      <img className="p-1 rounded-lg" src={photoAssets[9]} />
                      <img className="p-1 rounded-lg" src={photoAssets[10]} />
                      <img className="p-1 rounded-lg" src={photoAssets[11]} />
                      <img className="p-1 rounded-lg" src={photoAssets[12]} />
                      <img className="p-1 rounded-lg" src={photoAssets[13]} />
                      <img className="p-1 rounded-lg" src={photoAssets[14]} />
                    </div>
  }
  else if (active === "Building") {
    photoSection = <div className="grid grid-cols-3">
                      <img className="p-1 rounded-lg" src={photoAssets[0]} />
                      <img className="p-1 rounded-lg" src={photoAssets[1]} />
                      <img className="p-1 rounded-lg" src={photoAssets[5]} />
                      <img className="p-1 rounded-lg" src={photoAssets[3]} />
                      <img className="p-1 rounded-lg" src={photoAssets[4]} />
                      <img className="p-1 rounded-lg" src={photoAssets[2]} />
                  </div>
  }

    return (
    <div className="flex absolute bottom-0 right-0 rounded-br-2xl" style={{width: "calc(100% - 240px)", height: "calc(100% - 65px)"}}>
      <div id="mainContentHeader" className="flex items-center justify-center border-b border-slate-500/25 h-[65px] shrink-0 w-full text-white sticky top-0">
        <div id="sectionTitle" className="font-bold ml-10 absolute left-0">Photography</div>
        <div id="sectionHeaders" className="flex">
          <div onClick={() => setActive('Nature')} id="Nature" className={`${active === 'Nature' ? "activeSectionTitle" : ""} font-bold px-8 h-[65px] flex items-center text-slate-400 transition-all hover:text-white hover:border-b-2 hover:border-white`}>
            Nature
          </div>
          <div onClick={() => setActive('Building')} id="Building" className={`${active === 'Building' ? "activeSectionTitle" : ""} font-bold px-8 h-[65px] flex items-center text-slate-400 transition-all hover:text-white hover:border-b-2 hover:border-white`}>
            Buildings
          </div>
          <div onClick={() => setActive('ThirdTitle')} id="ThirdTitle" className={`${active === 'ThirdTitle' ? "activeSectionTitle" : ""} font-bold px-8 h-[65px] flex items-center text-slate-400 transition-all hover:text-white hover:border-b-2 hover:border-white`}>
            Title 3
          </div>
        </div>
      </div>

      <div id="sectionContent" className="p-2 transition-all bg-slate-900/[.6] absolute right-0 w-full top-[65px] overflow-scroll" style={{height: "calc(100% - 65px)"}}>
        {photoSection}
      </div>
    </div>
  );
}

export default PhotographySection;
