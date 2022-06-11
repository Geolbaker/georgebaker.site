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

      <div id="sectionContent" className="p-2 bg-slate-900/[.6] absolute right-0 w-full top-[65px] overflow-auto rounded-br-2xl" style={{height: "calc(100% - 65px)"}}>

        <div id="MainProfile" className={`p-3 flex flex-col justify-center text-center items-center transition-opacity duration-500 text-white absolute ${active === 'MainProfile' ? "opacity-100" : "opacity-0"}`} style={{width: "calc(100% - 1rem", height: "calc(100% - 1rem)"}}>
          <div className="text-4xl ">George Baker</div>
          <br />
          <div className="text-sm mt-[-1rem]">V21.5</div>

          <br />
          <div className="text-2xl mt-[-1rem] inline">Web <div className="inline relative before:content-['</>'] before:top-[-0.5rem] before:absolute before:left-0 before:text-sm after:content-['</>'] after:bottom-[-0.5rem] after:absolute after:right-2 after:text-sm"> &nbsp; Developer &nbsp; </div> and <div className="inline relative before:absolute before:border-white before:border-dotted before:border-2 before:content-[''] before:w-full before:h-full before:p-4 before:ml-1 after:"> &nbsp; Designer &nbsp;
            <div className="absolute right-[-1rem]">
              <svg width="16" height="16" fill="currentColor" className="bi bi-arrows-move" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10zM.146 8.354a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L1.707 7.5H5.5a.5.5 0 0 1 0 1H1.707l1.147 1.146a.5.5 0 0 1-.708.708l-2-2zM10 8a.5.5 0 0 1 .5-.5h3.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L14.293 8.5H10.5A.5.5 0 0 1 10 8z"/>
              </svg>
            </div>
          </div></div>

          <div className="mt-8 flex flex-col text-center">

            <div className="flex text-xl w-100 justify-center">
              Find me on:
            </div>

            <div className="flex m-2 text-2xl items-center ">

              <a href="https://codepen.io/geo1baker" target="_blank" className="p-4 mr-4 rounded-lg hover:bg-slate-400/[.1]">
                <svg width="150" viewBox="0 0 138 26" fill="none" stroke="#fff" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M80 6h-9v14h9 M114 6h-9 v14h9 M111 13h-6 M77 13h-6 M122 20V6l11 14V6 M22 16.7L33 24l11-7.3V9.3L33 2L22 9.3V16.7z M44 16.7L33 9.3l-11 7.4 M22 9.3l11 7.3 l11-7.3 M33 2v7.3 M33 16.7V24 M88 14h6c2.2 0 4-1.8 4-4s-1.8-4-4-4h-6v14 M15 8c-1.3-1.3-3-2-5-2c-4 0-7 3-7 7s3 7 7 7 c2 0 3.7-0.8 5-2 M64 13c0 4-3 7-7 7h-5V6h5C61 6 64 9 64 13z"/>
                </svg>
              </a>

              <a href="https://github.com/Geolbaker/georgereactsite" target="_blank" className="flex p-4 rounded-lg hover:bg-slate-400/[.1]">
                <svg width="30" height="30" stroke="#fff" strokeWidth="1.5" viewBox="-2 -2 30 30">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Github
              </a>

            </div>
          </div>

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
