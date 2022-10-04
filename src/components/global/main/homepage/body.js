import $ from 'jquery';

import {useEffect} from 'react';

function Body() {

  useEffect(()=>{

      var themeSubMenu = document.getElementById("themeSubMenu");
      var portfolioSubMenu = document.getElementById("portfolioSubMenu");
      var personalSubMenu = document.getElementById("personalSubMenu");
      var hobbiesSubMenu = document.getElementById("hobbiesSubMenu");
      var palletePopout = document.getElementById("palletePopout");
      var palleteToggle = 1;

      //Menu SubMenu Controller
      function subMenuReset() {
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

      //Colour Pallete Rotate
      //--colorPallete-homepage-bg
      //--colorPallete-homepage-text
      //--colorPallete-homepage-alt
      $("#colourPallete").click(function(){
        if (palleteToggle == 0) {
          document.documentElement.style.setProperty("--colorPallete-homepage-bg", 'rgb(255 255 255)');
          document.documentElement.style.setProperty("--colorPallete-homepage-text", 'rgb(0 0 0)');
          document.documentElement.style.setProperty("--colorPallete-homepage-alt", 'rgb(221 221 221)');
          palleteToggle++;
        } else if (palleteToggle == 1) {
          document.documentElement.style.setProperty("--colorPallete-homepage-bg", 'rgb(0 0 0)');
          document.documentElement.style.setProperty("--colorPallete-homepage-text", 'rgb(255 255 255)');
          document.documentElement.style.setProperty("--colorPallete-homepage-alt", 'rgb(100 100 100)');
          palleteToggle++;
        } else if (palleteToggle == 2) {
          document.documentElement.style.setProperty("--colorPallete-homepage-bg", 'rgb(173 166 194)');
          document.documentElement.style.setProperty("--colorPallete-homepage-text", 'rgb(250 250 250)');
          document.documentElement.style.setProperty("--colorPallete-homepage-alt", 'rgb(114 94 141)');
          palleteToggle++;
        } else if (palleteToggle == 3) {
          document.documentElement.style.setProperty("--colorPallete-homepage-bg", 'rgb(255 250 243)');
          document.documentElement.style.setProperty("--colorPallete-homepage-text", 'rgb(86 148 159)');
          document.documentElement.style.setProperty("--colorPallete-homepage-alt", 'rgb(240 233 223)');
          palleteToggle++;
        }
      })
  });

  return (
    <div id="HomepageBody" className="flex justify-center items-center h-screen w-screen shadow-inner bg-homepage-bg text-homepage-text" >

      {/* Navigation Items */}
      <div className="w-max relative top-0 left-0 flex justify-end">
        <div className="container font-['DM_Serif_Display'] text-[2rem] w-[15rem]">
          <div id="themeMain" className="link link-underline-25 link-emphasis group">
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
          <div className="text-homepage-alt w-max">
              Coming Soon
          </div>
        </div>
        <div className="container font-['DM_Serif_Display'] text-[2rem] w-[15rem] overflow-hidden relative">
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
        <a alt="Personal Codepen" href="https://codepen.io/geo1baker" target="_blank" className="p-5">
          <svg width="16" height="16" class="bi bi-code-slash link scale-[200%] hover:scale-[230%] fill-homepage-text" viewBox="0 0 16 16">
            <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
          </svg>
        </a>
        <a alt="Personal Github" href="https://github.com/Geolbaker" target="_blank" className="p-5">
          <svg width="16" height="16" class="bi bi-github link scale-[200%] hover:scale-[230%] fill-homepage-text" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
          </svg>
        </a>
      </div>
      {/*End of Bottom Icons*/}

      {/*Colour Pallete*/}
      <div className="fixed top-0 right-0 flex m-8">
        <div id="colourPallete" className="absolute top-[-7px] left-[-4px] w-[25px] h-[30px] hover:cursor-pointer z-20 peer"></div>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-droplet-half scale-[170%] link peer-hover:scale-[200%] fill-homepage-text" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10c0 0 2.5 1.5 5 .5s5-.5 5-.5c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"/>
          <path fillRule="evenodd" d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z"/>
        </svg>
      </div>
      {/*End of Colour Pallete*/}


    </div>

  );

}


//IDEA FOR OPENING ANIMATION
//all elements are invisible/opacity-0 overflow-hidden and translate-y-[10rem]
//run a search through number of classnames i++ etc with example-1, example-2, etc, and set to collection1, collection2, etc,
//until find no more entries in the list then carry on
//const collection = document.getElementsByClassName("example");
//collection[0].innerHTML = "Hello World!";
//with all the collections, on each loop, edit classNames to create the intial animation with a specific delay between each interpretation
//finish with every collection being reset to allow for normal non-loader animations


export default Body;
