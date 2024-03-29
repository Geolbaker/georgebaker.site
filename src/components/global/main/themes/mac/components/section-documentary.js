
function DocumentarySection() {

    return (
    <div className="block sm:flex relative sm:absolute bottom-0 right-0 rounded-br-2xl contentBox">
      <div id="mainContentHeader" className="flex items-center justify-center border-b border-slate-500/25 h-[65px] shrink-0 w-full text-white sticky top-0">
        <div id="sectionTitle" className="font-bold ml-5 lg:ml-10 absolute left-0">Documentary</div>
      </div>

      <div id="sectionContent" className="p-2 bg-slate-900/[.6] absolute right-0 w-full top-[65px] overflow-auto rounded-br-2xl flex justify-center items-center">

        <iframe width="560" height="315" src="https://www.youtube.com/watch?v=X6_IaHQpMD0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy" ></iframe>

      </div>
    </div>
  );
}

export default DocumentarySection;
