import {useState} from 'react';

function PhotographySection() {

    const [active, setActive] = useState('MainProfile');

    return (
    <div className="flex absolute bottom-0 right-0 rounded-br-2xl" style={{width: "calc(100% - 240px)", height: "calc(100% - 65px)"}}>
      <div id="mainContentHeader" className="flex items-center justify-center border-b border-slate-500/25 h-[65px] shrink-0 w-full text-white sticky top-0">
        <div id="sectionTitle" className="font-bold ml-10 absolute left-0">About Me</div>
        <div id="sectionHeaders" className="flex">
          <div onClick={() => setActive('MainProfile')} id="MainProfile" className={`${active === 'MainProfile' ? "activeSectionTitle" : ""} font-bold px-8 h-[65px] flex items-center text-slate-400 transition-all hover:text-white hover:border-b-2 hover:border-white`}>
            Profile
          </div>
          <div onClick={() => setActive('Timeline')} id="Timeline" className={`${active === 'Timeline' ? "activeSectionTitle" : ""} font-bold px-8 h-[65px] flex items-center text-slate-400 transition-all hover:text-white hover:border-b-2 hover:border-white`}>
            Timeline
          </div>
          <div onClick={() => setActive('Personal')} id="Personal" className={`${active === 'Personal' ? "activeSectionTitle" : ""} font-bold px-8 h-[65px] flex items-center text-slate-400 transition-all hover:text-white hover:border-b-2 hover:border-white`}>
            Personal
          </div>
        </div>
      </div>

      <div id="sectionContent" className="p-2 bg-slate-900/[.6] absolute right-0 w-full top-[65px] overflow-scroll rounded-br-2xl" style={{height: "calc(100% - 65px)"}}>

        <div id="MainProfile" className={`p-3 flex flex-col justify-center text-center items-center transition-opacity duration-500 text-white absolute ${active === 'MainProfile' ? "opacity-100" : "opacity-0"}`} style={{width: "calc(100% - 1rem", height: "calc(100% - 1rem)"}}>
          <div className="text-4xl ">George Baker</div>
          <br />
          <div className="text-sm mt-[-1rem]">V21.5</div>

          <br />
          <div className="text-2xl mt-[-1rem] inline">Web <div className="inline relative before:content-['</>'] before:top-[-0.5rem] before:absolute before:left-0 before:text-sm after:content-['</>'] after:bottom-[-0.5rem] after:absolute after:right-2 after:text-sm"> &nbsp; Developer &nbsp; </div> and <div className="inline relative before:absolute before:border-white before:border-dotted before:border-2 before:content-[''] before:w-full before:h-full before:p-4 before:ml-1 after:"> &nbsp; Designer &nbsp;
            <div className="absolute right-[-1rem]">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-move" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10zM.146 8.354a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L1.707 7.5H5.5a.5.5 0 0 1 0 1H1.707l1.147 1.146a.5.5 0 0 1-.708.708l-2-2zM10 8a.5.5 0 0 1 .5-.5h3.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L14.293 8.5H10.5A.5.5 0 0 1 10 8z"/>
              </svg>
            </div>
          </div></div>
        </div>

        <div id="Timeline" className={`transition-opacity duration-500 text-white absolute ${active === 'Timeline' ? "opacity-100" : "opacity-0"}`}>

        </div>

        <div id="Personal" className={`transition-opacity duration-500 text-white absolute ${active === 'Personal' ? "opacity-100" : "opacity-0"}`}>

        </div>

      </div>
    </div>
  );
}

export default PhotographySection;
