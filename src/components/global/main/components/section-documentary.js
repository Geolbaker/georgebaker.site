
function DocumentarySection() {

    return (
    <div className="flex absolute bottom-0 right-0 rounded-br-2xl" style={{width: "calc(100% - 240px)", height: "calc(100% - 65px)"}}>
      <div id="mainContentHeader" className="flex items-center justify-center border-b border-slate-500/25 h-[65px] shrink-0 w-full text-white sticky top-0">
        <div id="sectionTitle" className="font-bold ml-10 absolute left-0">Documentary</div>
      </div>

      <div id="sectionContent" className="p-2 bg-slate-900/[.6] absolute right-0 w-full top-[65px] rounded-br-2xl flex justify-center items-center" style={{height: "calc(100% - 65px)"}}>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/qj_QXksCEyI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

      </div>
    </div>
  );
}

export default DocumentarySection;
