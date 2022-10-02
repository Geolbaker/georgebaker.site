import $ from 'jquery';

import {useEffect} from 'react';

function Body() {

  useEffect(()=>{

      var tempSubMenu = document.getElementById("tempSubMenu");
      var themeSubMenu = document.getElementById("themeSubMenu");
      var portfolioSubMenu = document.getElementById("portfolioSubMenu");
      var personalSubMenu = document.getElementById("personalSubMenu");
      var hobbiesSubMenu = document.getElementById("hobbiesSubMenu");
      var palletePopout = document.getElementById("palletePopout");
      var palleteToggle = false;

      function subMenuReset() {
        tempSubMenu.classList.add("hidden");
        themeSubMenu.classList.add("translate-x-[-20rem]");
        portfolioSubMenu.classList.add("translate-x-[-20rem]");
        personalSubMenu.classList.add("translate-x-[-20rem]");
        hobbiesSubMenu.classList.add("translate-x-[-20rem]");
      }

      $("#themeMain").click(function(){
        subMenuReset();
        themeSubMenu.classList.remove("translate-x-[-20rem]");
      })
      $("#portfolioMain").click(function(){
        subMenuReset();
        portfolioSubMenu.classList.remove("translate-x-[-20rem]");
      })
      $("#personalMain").click(function(){
        subMenuReset();
        personalSubMenu.classList.remove("translate-x-[-20rem]");
      })
      $("#hobbiesMain").click(function(){
        subMenuReset();
        hobbiesSubMenu.classList.remove("translate-x-[-20rem]");
      })
      $("#colourPallete").click(function(){
        if (!palleteToggle) {
          palletePopout.classList.add("translate-x-0");
          palleteToggle = true;
        } else if (palleteToggle) {
          palletePopout.classList.add("translate-x-0");
          palleteToggle = false;
        }
      })
  });

  return (
    <div id="body" className="flex justify-center items-center h-screen w-screen bg-white shadow-inner">

      {/* Navigation Items */}
      <div className="w-max relative top-0 left-0 flex justify-end">
        <div className="container font-['DM_Serif_Display'] text-[2rem] w-[15rem]">
          <div id="themeMain" className="link link-underline-25 link-overline-25 link-emphasis group">
              Themes
              <span className="dot-to-arrow"></span>
          </div>
          <div id="portfolioMain" className="link link-underline-25 link-emphasis group">
              Portfolio
              <span className="dot-to-arrow"></span>
          </div>
          <div id="personalMain" className="link link-underline-25 link-emphasis group">
              Personal
              <span className="dot-to-arrow"></span>
          </div>
          <div id="hobbiesMain" className="link link-underline-25 link-emphasis group">
              Hobbies
              <span className="dot-to-arrow"></span>
          </div>
          <div className="text-black/[0.5] w-max">
              Coming Soon
          </div>
        </div>
        <div className="container font-['DM_Serif_Display'] text-[2rem] w-[15rem] overflow-hidden relative">
          <div id="tempSubMenu" className="text-white absolute top-0 ">Sub-menu placeholder</div>
          <div id="themeSubMenu" className="flex flex-col link delay-100 translate-x-[-20rem] absolute top-0 ml-8">
            <a className="link link-underline-25 link-emphasis" href="/xp">Windows Xp</a>
            <a className="link link-underline-25 link-emphasis" href="/mac">GlassOS</a>
          </div>
          <div id="portfolioSubMenu" className="flex flex-col link delay-100 translate-x-[-20rem] absolute top-0 ml-8">
            <a className="link" href="#">Portfolio SubMenu</a>
          </div>
          <div id="personalSubMenu" className="flex flex-col link delay-100 translate-x-[-20rem] absolute top-0 ml-8">
            <a className="link" href="#">Personal SubMenu</a>
          </div>
          <div id="hobbiesSubMenu" className="flex flex-col link delay-100 translate-x-[-20rem] absolute top-0 ml-8">
            <a className="link" href="#">Hobbies SubMenu</a>
          </div>
        </div>
      </div>
      {/*End of Navigation Items*/}

      {/*Image Overlay*/}
      <div className="">

      </div>
      {/*End of Image Overlay*/}

      {/*Bottom Icons*/}
      <div className="fixed bottom-0 right-0 flex m-5">
        <a alt="Personal Codepen" href="https://codepen.io/geo1baker" target="_blank" className="p-2"><img className="w-[40px] h-auto link link-emphasis" alt="Codepen Logo" src="https://cdn-icons-png.flaticon.com/512/2111/2111501.png"/></a>
        <a alt="Personal Github" href="https://github.com/Geolbaker" target="_blank" className="p-2"><img className="w-[40px] h-auto link link-emphasis" alt="Github Logo" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"/></a>
      </div>
      {/*End of Bottom Icons*/}

      {/*Colour Pallete*/}
      <div className="fixed top-0 right-0 flex m-8">
        <div id="colourPallete" className="absolute top-[-7px] left-[-4px] w-[25px] h-[30px] hover:cursor-pointer z-20 peer"></div>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-droplet-half scale-[170%] link peer-hover:scale-[200%]" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10c0 0 2.5 1.5 5 .5s5-.5 5-.5c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"/>
          <path fillRule="evenodd" d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z"/>
        </svg>
      </div>
      {/*End of Colour Pallete*/}

      {/*Colour Pallete Popout*/}
      <div className="fixed top-0 right-6 flex m-8 overflow-hidden">
        <div id="palletePopout" className="translate-x-[10rem] transition-all duration-500">
          <div className="">

          </div>
        </div>
      </div>
      {/*End of Colour Pallete Popout*/}


    </div>

  );

}



export default Body;
