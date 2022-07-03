
import website1 from '../../../../assets/portfolio/Websites_1.webp';
import website2 from '../../../../assets/portfolio/Websites_2.webp';
import website3 from '../../../../assets/portfolio/Websites_3.webp';
import website4 from '../../../../assets/portfolio/Websites_4.webp';
import website5 from '../../../../assets/portfolio/Websites_5.webp';
import website6 from '../../../../assets/portfolio/Websites_6.webp';
import website7 from '../../../../assets/portfolio/Websites_7.webp';

function WebsitesSection() {


    return (
    <div className="flex absolute bottom-0 right-0 rounded-br-2xl" style={{width: "calc(100% - 240px)", height: "calc(100% - 65px)"}}>
      <div id="mainContentHeader" className="flex items-center justify-center border-b border-slate-500/25 h-[65px] shrink-0 w-full text-white sticky top-0">
        <div id="sectionTitle" className="font-bold ml-5 lg:ml-10 absolute left-0">Websites</div>
      </div>

      <div id="sectionContent" className="p-2 bg-slate-900/[.6] absolute right-0 w-full top-[65px] overflow-auto rounded-br-2xl" style={{height: "calc(100% - 65px)"}}>

        <div className="transition-opacity duration-500 absolute" style={{width: "calc(100% - 1rem)"}}>

        {[
          ['Freshers Lincoln', 'https://freshers.lincolnsu.com/', 'Freshers Events', 'Splashpage', 'Lincoln Students Union', <img className="p-1 rounded-lg hover:bg-slate-100/[0.2]" src={require("../../../../assets/portfolio/Websites_1.webp")}/>],
          ['Quack Lincoln', 'https://quacklincoln.com/', 'Club Night Event', 'Splashpage', 'Lincoln Students Union', <img className="p-1 rounded-lg hover:bg-slate-100/[0.2]" src={require("../../../../assets/portfolio/Websites_2.webp")}/>],
          ['ULSU Roles', 'https://ulsuroles.co.uk/', 'Recruitment', 'Splashpage', 'Lincoln Students Union', <img className="p-1 rounded-lg hover:bg-slate-100/[0.2]" src={require("../../../../assets/portfolio/Websites_3.webp")}/>],
          ['Varsity', 'https://lincolnsu.com/activities/varsity', 'Varsity Sports', 'Splashpage', 'Lincoln Students Union', <img className="p-1 rounded-lg hover:bg-slate-100/[0.2]" src={require("../../../../assets/portfolio/Websites_4.webp")}/>],
          ['Northumbria Students Union', 'https://mynsu.co.uk/', 'Full Site Design', 'Beskope Homepage', 'Northumbria Students Union', <img className="p-1 rounded-lg hover:bg-slate-100/[0.2]" src={require("../../../../assets/portfolio/Websites_5.webp")}/>],
          ['Make A Difference', 'https://lincolnsu.com/makeadifference22', 'Make A Difference Event', 'Splashpage', 'Lincoln Students Union', <img className="p-1 rounded-lg hover:bg-slate-100/[0.2]" src={require("../../../../assets/portfolio/Websites_6.webp")}/>],
          ['George Baker Tools', 'https://georgebaker.site/tools', 'Tools Website', 'Personal Use', 'Feature Testing', <img className="p-1 rounded-lg hover:bg-slate-100/[0.2]" src={require("../../../../assets/portfolio/Websites_7.webp")}/>],
        ].map(([website, url, tag1, tag2, tag3, img]) => (
          <div key={website} className="flex flex-col lg:grid lg:grid-cols-2 border-b border-slate-500/25">

            <div className="text-white flex-col flex justify-center items-center text-justify p-2">
              <span className="font-bold p-2 rounded-lg hover:bg-slate-100/[0.1] hover:underline"><a href={url} target="_blank">{website}</a></span><br />
              <span className="flex flex-wrap justify-center">
                <div className="m-1 p-2 bg-slate-100/[0.1] rounded-lg">
                  {tag1}
                </div>
                <div className="m-1 p-2 bg-slate-100/[0.1] rounded-lg">
                  {tag2}
                </div>
                <div className="m-1 p-2 bg-slate-100/[0.1] rounded-lg">
                  {tag3}
                </div>
              </span>
            </div>
            <a href={url} target="_blank">
              {img}
            </a>

          </div>
        ))}


        </div>

      </div>

    </div>
  );
}

export default WebsitesSection;
