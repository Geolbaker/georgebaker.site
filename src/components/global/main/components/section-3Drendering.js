import assets from '../photographyAssets.js';

function RenderSection() {

    //images 30 -

    return (
    <div className="flex absolute bottom-0 right-0 rounded-br-2xl" style={{width: "calc(100% - 240px)", height: "calc(100% - 65px)"}}>
      <div id="mainContentHeader" className="flex items-center justify-center border-b border-slate-500/25 h-[65px] shrink-0 w-full text-white sticky top-0">
        <div id="sectionTitle" className="font-bold ml-10 absolute left-0">3D Renders</div>
      </div>

      <div id="sectionContent" className="p-2 bg-slate-900/[.6] absolute right-0 w-full top-[65px] overflow-scroll rounded-br-2xl" style={{height: "calc(100% - 65px)"}}>

        <div className="transition-opacity duration-500 absolute" style={{width: "calc(100% - 1rem)"}}>

          <div className="grid grid-cols-2 border-b border-slate-500/25 pb-2">
            <img className="p-1 rounded-lg" src={assets[31]}/>
            <div className="text-white flex-col flex justify-center items-center text-justify p-2">
              <span className="font-bold">Blade Runner Inspiration </span><br />
              <span>The way in which Blade Runner 2049 played with light inspired
              me to recreate one of the scenes. This was a very interesting
              project to try and get the light to act natural and fall in the
              ways I wanted.</span>
            </div>
          </div>

          <div className="grid grid-cols-3 border-b border-slate-500/25 pt-2 pb-2">
            <div className="text-white flex-col flex justify-center items-center text-justify p-2">
              <span className="font-bold">Room Designs </span><br />
              <span>Designs of room interiors to either experiment with light or general object building.</span>
            </div>
            <img className="p-1 rounded-lg" src={assets[34]}/>
            <img className="p-1 rounded-lg" src={assets[35]}/>
          </div>

          <div className="grid grid-cols-3 border-b border-slate-500/25 pt-2 pb-2">
            <img className="p-1 rounded-lg" src={assets[32]}/>
            <img className="p-1 rounded-lg" src={assets[33]}/>
            <div className="text-white flex-col flex justify-center items-center text-justify p-2">
              <span className="font-bold">Game Level Design </span><br />
              <span>A friend of mine needed a loading screen modal designed for a VR game he was creating.</span>
            </div>
          </div>

          <div className="grid grid-cols-2 border-b border-slate-500/25 pt-2 pb-2">
            <img className="p-1 rounded-lg" src={assets[36]}/>
            <img className="p-1 rounded-lg" src={assets[37]}/>
            <div className="text-white flex-col flex justify-center items-center text-justify p-2">
              <span className="font-bold">Abstract Pillars </span><br />
              <span>I started with a futuristic style design and slowly moved towards it being a combination of nature and technology. I finally settled with a lighter scene illuminated through a fog by the moon.</span>
            </div>
            <img className="p-1 rounded-lg" src={assets[39]}/>
            <img className="p-1 rounded-lg" src={assets[40]}/>
            <img className="p-1 rounded-lg" src={assets[41]}/>
          </div>

        </div>

      </div>

    </div>
  );
}

export default RenderSection;
