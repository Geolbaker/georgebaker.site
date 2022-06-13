

function WebsitesSection() {


    return (
    <div className="flex absolute bottom-0 right-0 rounded-br-2xl" style={{width: "calc(100% - 240px)", height: "calc(100% - 65px)"}}>
      <div id="mainContentHeader" className="flex items-center justify-center border-b border-slate-500/25 h-[65px] shrink-0 w-full text-white sticky top-0">
        <div id="sectionTitle" className="font-bold ml-10 absolute left-0">Websites</div>
      </div>

      <div id="sectionContent" className="p-2 bg-slate-900/[.6] absolute right-0 w-full top-[65px] overflow-auto rounded-br-2xl" style={{height: "calc(100% - 65px)"}}>

        <div className="transition-opacity duration-500 absolute" style={{width: "calc(100% - 1rem)"}}>

          <div className="grid grid-cols-2 border-b border-slate-500/25 pb-2">
            Img here
            <div className="text-white flex-col flex justify-center items-center text-justify p-2">
              <span className="font-bold">Website </span><br />
              <span>Website Description</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default WebsitesSection;
