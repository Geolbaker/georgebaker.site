import assets from '../mainAssets.js';

function WebsitesSection() {


    return (
    <div className="flex absolute bottom-0 right-0 rounded-br-2xl" style={{width: "calc(100% - 240px)", height: "calc(100% - 65px)"}}>
      <div id="mainContentHeader" className="flex items-center justify-center border-b border-slate-500/25 h-[65px] shrink-0 w-full text-white sticky top-0">
        <div id="sectionTitle" className="font-bold ml-10 absolute left-0">Websites</div>
      </div>

      <div id="sectionContent" className="p-2 bg-slate-900/[.6] absolute right-0 w-full top-[65px] overflow-auto rounded-br-2xl" style={{height: "calc(100% - 65px)"}}>

        <div className="transition-opacity duration-500 absolute" style={{width: "calc(100% - 1rem)"}}>

          {/*Start of section*/}
          <div className="grid grid-cols-2 border-b border-slate-500/25">

            <div className="text-white flex-col flex justify-center items-center text-justify p-2">
              <span className="font-bold"><a href="https://freshers.lincolnsu.com/" target="_blank">Freshers Lincoln</a></span><br />
              <span>The Freshers Splashpage for Lincoln Students' Union</span>
            </div>

            <img className="p-1 rounded-lg" src={assets[42]}/>

          </div>
          {/*End of section*/}

          {/*Start of section*/}
          <div className="grid grid-cols-2 border-b border-slate-500/25">

            <div className="text-white flex-col flex justify-center items-center text-justify p-2">
              <span className="font-bold"><a href="https://quacklincoln.com/" target="_blank">Quack Lincoln</a></span><br />
              <span>The Quack Club Night Splashpage for Lincoln Students' Union</span>
            </div>

            <img className="p-1 rounded-lg" src={assets[43]}/>

          </div>
          {/*End of section*/}

          {/*Start of section*/}
          <div className="grid grid-cols-2 border-b border-slate-500/25">

            <div className="text-white flex-col flex justify-center items-center text-justify p-2">
              <span className="font-bold"><a href="https://ulsuroles.co.uk/" target="_blank">ULSU Roles</a></span><br />
              <span>An Informative Recruitment Splashpage for Lincoln Students' Union</span>
            </div>

            <img className="p-1 rounded-lg" src={assets[44]}/>

          </div>
          {/*End of section*/}

          {/*Start of section*/}
          <div className="grid grid-cols-2 border-b border-slate-500/25">

            <div className="text-white flex-col flex justify-center items-center text-justify p-2">
              <span className="font-bold"><a href="https://lincolnsu.com/activities/varsity" target="_blank">Varsity</a></span><br />
              <span>A Splashpage advertising Varsity for Lincoln Students' Union</span>
            </div>

            <img className="p-1 rounded-lg" src={assets[45]}/>

          </div>
          {/*End of section*/}

          {/*Start of section*/}
          <div className="grid grid-cols-2 border-b border-slate-500/25">

            <div className="text-white flex-col flex justify-center items-center text-justify p-2">
              <span className="font-bold"><a href="https://mynsu.co.uk/" target="_blank">Northumbria Students' Union</a></span><br />
              <span>A Bespoke Homepage and Full Website Transition for Northumbria Students' Union</span>
            </div>

            <img className="p-1 rounded-lg" src={assets[46]}/>

          </div>
          {/*End of section*/}

          {/*Start of section*/}
          <div className="grid grid-cols-2 border-b border-slate-500/25">

            <div className="text-white flex-col flex justify-center items-center text-justify p-2">
              <span className="font-bold"><a href="https://lincolnsu.com/makeadifference22" target="_blank">Make A Difference</a></span><br />
              <span>A Splashpage advertising Make A Difference for Lincoln Students' Union</span>
            </div>

            <img className="p-1 rounded-lg" src={assets[47]}/>

          </div>
          {/*End of section*/}

          {/*Start of section*/}
          <div className="grid grid-cols-2 border-b border-slate-500/25">

            <div className="text-white flex-col flex justify-center items-center text-justify p-2">
              <span className="font-bold"><a href="https://georgebaker.site/tools" target="_blank">Personal Tools</a></span><br />
              <span>My Personal Tools Website to practise and colate code</span>
            </div>

            <img className="p-1 rounded-lg" src={assets[48]}/>

          </div>
          {/*End of section*/}

        </div>

      </div>

    </div>
  );
}

export default WebsitesSection;
