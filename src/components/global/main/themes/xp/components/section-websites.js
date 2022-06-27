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
              <span className="font-bold p-2 rounded-lg hover:bg-slate-100/[0.1] hover:underline"><a href="https://freshers.lincolnsu.com/" target="_blank">Freshers Lincoln</a></span><br />
              <span className="flex flex-wrap justify-center">
                <div className="m-1 p-2 bg-slate-100/[0.1] rounded-lg">
                  Freshers Events
                </div>
                <div className="m-1 p-2 bg-slate-100/[0.1] rounded-lg">
                  Splashpage
                </div>
                <div className="m-1 p-2 bg-slate-100/[0.1] rounded-lg">
                  Lincoln Students' Union
                </div>
              </span>
            </div>
            <a href="https://freshers.lincolnsu.com/" target="_blank">
              <img className="p-1 rounded-lg hover:bg-slate-100/[0.2]" src={assets[42]}/>
            </a>

          </div>
          {/*End of section*/}

          {/*Start of section*/}
          <div className="grid grid-cols-2 border-b border-slate-500/25">

            <div className="text-white flex-col flex justify-center items-center text-justify p-2">
              <span className="font-bold p-2 rounded-lg hover:bg-slate-100/[0.1] hover:underline"><a href="https://quacklincoln.com/" target="_blank">Quack Lincoln</a></span><br />
              <span className="flex flex-wrap justify-center">
                <div className="m-1 p-2 bg-slate-100/[0.1] rounded-lg">
                  Club Night Event
                </div>
                <div className="m-1 p-2 bg-slate-100/[0.1] rounded-lg">
                  Splashpage
                </div>
                <div className="m-1 p-2 bg-slate-100/[0.1] rounded-lg">
                  Lincoln Students' Union
                </div>
              </span>
            </div>
            <a href="https://quacklincoln.com/" target="_blank">
              <img className="p-1 rounded-lg hover:bg-slate-100/[0.2]" src={assets[43]}/>
            </a>

          </div>
          {/*End of section*/}

          {/*Start of section*/}
          <div className="grid grid-cols-2 border-b border-slate-500/25">

            <div className="text-white flex-col flex justify-center items-center text-justify p-2">
              <span className="font-bold p-2 rounded-lg hover:bg-slate-100/[0.1] hover:underline"><a href="https://ulsuroles.co.uk/" target="_blank">ULSU Roles</a></span><br />
              <span className="flex flex-wrap justify-center">
                <div className="m-1 p-2 bg-slate-100/[0.1] rounded-lg">
                  Recruitment
                </div>
                <div className="m-1 p-2 bg-slate-100/[0.1] rounded-lg">
                  Splashpage
                </div>
                <div className="m-1 p-2 bg-slate-100/[0.1] rounded-lg">
                  Lincoln Students' Union
                </div>
              </span>
            </div>
            <a href="https://ulsuroles.co.uk/" target="_blank">
              <img className="p-1 rounded-lg hover:bg-slate-100/[0.2]" src={assets[44]}/>
            </a>

          </div>
          {/*End of section*/}

          {/*Start of section*/}
          <div className="grid grid-cols-2 border-b border-slate-500/25">

            <div className="text-white flex-col flex justify-center items-center text-justify p-2">
              <span className="font-bold p-2 rounded-lg hover:bg-slate-100/[0.1] hover:underline"><a href="https://lincolnsu.com/activities/varsity" target="_blank">Varsity</a></span><br />
              <span className="flex flex-wrap justify-center">
                <div className="m-1 p-2 bg-slate-100/[0.1] rounded-lg">
                  Varsity Sports
                </div>
                <div className="m-1 p-2 bg-slate-100/[0.1] rounded-lg">
                  Splashpage
                </div>
                <div className="m-1 p-2 bg-slate-100/[0.1] rounded-lg">
                  Lincoln Students' Union
                </div>
              </span>
            </div>
            <a href="https://lincolnsu.com/activities/varsity" target="_blank">
              <img className="p-1 rounded-lg hover:bg-slate-100/[0.2]" src={assets[45]}/>
            </a>

          </div>
          {/*End of section*/}

          {/*Start of section*/}
          <div className="grid grid-cols-2 border-b border-slate-500/25">

            <div className="text-white flex-col flex justify-center items-center text-justify p-2">
              <span className="font-bold p-2 rounded-lg hover:bg-slate-100/[0.1] hover:underline"><a href="https://mynsu.co.uk/" target="_blank">Northumbria Students' Union</a></span><br />
              <span className="flex flex-wrap justify-center">
                <div className="m-1 p-2 bg-slate-100/[0.1] rounded-lg">
                  Full Despoke Site
                </div>
                <div className="m-1 p-2 bg-slate-100/[0.1] rounded-lg">
                  Beskope Homepage
                </div>
                <div className="m-1 p-2 bg-slate-100/[0.1] rounded-lg">
                  Northumbria Students' Union
                </div>
              </span>
            </div>
            <a href="https://mynsu.co.uk/" target="_blank">
              <img className="p-1 rounded-lg hover:bg-slate-100/[0.2]" src={assets[46]}/>
            </a>

          </div>
          {/*End of section*/}

          {/*Start of section*/}
          <div className="grid grid-cols-2 border-b border-slate-500/25">

            <div className="text-white flex-col flex justify-center items-center text-justify p-2">
              <span className="font-bold p-2 rounded-lg hover:bg-slate-100/[0.1] hover:underline"><a href="https://lincolnsu.com/makeadifference22" target="_blank">Make A Difference</a></span><br />
              <span className="flex flex-wrap justify-center">
                <div className="m-1 p-2 bg-slate-100/[0.1] rounded-lg">
                  Make A Difference Event
                </div>
                <div className="m-1 p-2 bg-slate-100/[0.1] rounded-lg">
                  Splashpage
                </div>
                <div className="m-1 p-2 bg-slate-100/[0.1] rounded-lg">
                  Lincoln Students' Union
                </div>
              </span>
            </div>
            <a href="https://lincolnsu.com/makeadifference22" target="_blank">
              <img className="p-1 rounded-lg hover:bg-slate-100/[0.2]" src={assets[47]}/>
            </a>

          </div>
          {/*End of section*/}

          {/*Start of section*/}
          <div className="grid grid-cols-2 border-b border-slate-500/25">

            <div className="text-white flex-col flex justify-center items-center text-justify p-2">
              <span className="font-bold p-2 rounded-lg hover:bg-slate-100/[0.1] hover:underline"><a href="https://georgebaker.site/tools" target="_blank">Personal Tools</a></span><br />
              <span className="flex flex-wrap justify-center">
                <div className="m-1 p-2 bg-slate-100/[0.1] rounded-lg">
                  Tools Website
                </div>
                <div className="m-1 p-2 bg-slate-100/[0.1] rounded-lg">
                  Personal Use
                </div>
              </span>
            </div>
            <a href="https://georgebaker.site/tools" target="_blank">
              <img className="p-1 rounded-lg hover:bg-slate-100/[0.2]" src={assets[48]}/>
            </a>

          </div>
          {/*End of section*/}

        </div>

      </div>

    </div>
  );
}

export default WebsitesSection;
