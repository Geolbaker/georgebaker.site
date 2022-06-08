
import photoAssets from './photographyAssets.js';

function SectionPhotography(type) {
  console.log(type.name);
  let photoSection;
  if (type.name === "Nature") {
    photoSection = <div className="grid grid-cols-3"><img className="p-1 rounded-lg" src={photoAssets[6]} /><img className="p-1 rounded-lg" src={photoAssets[7]} /><img className="p-1 rounded-lg" src={photoAssets[8]} /><img className="p-1 rounded-lg" src={photoAssets[9]} /><img className="p-1 rounded-lg" src={photoAssets[10]} /><img className="p-1 rounded-lg" src={photoAssets[11]} /><img className="p-1 rounded-lg" src={photoAssets[12]} /><img className="p-1 rounded-lg" src={photoAssets[13]} /><img className="p-1 rounded-lg" src={photoAssets[14]} /></div>
  }
  else if (type.name === "Building") {
    photoSection = <div className="grid grid-cols-3"><img className="p-1 rounded-lg" src={photoAssets[0]} /><img className="p-1 rounded-lg" src={photoAssets[1]} /><img className="p-1 rounded-lg" src={photoAssets[2]} /><img className="p-1 rounded-lg" src={photoAssets[3]} /><img className="p-1 rounded-lg" src={photoAssets[4]} /><img className="p-1 rounded-lg" src={photoAssets[5]} /></div>
  }

    return (
    <div id="sectionContent" className="p-2 bg-slate-900/[.6] absolute top-0 right-0 w-full top-[65px] overflow-scroll" style={{height: "calc(100% - 65px)"}}>
      {photoSection}
    </div>
  );
}

export default SectionPhotography;
