import $ from 'jquery';
import Website_1 from '../../../../../src/assets/websites/Website_1.webp';
import Website_2 from '../../../../../src/assets/websites/Website_2.webp';
import Website_3 from '../../../../../src/assets/websites/Website_3.webp';
import Website_4 from '../../../../../src/assets/websites/Website_4.webp';
import Website_5 from '../../../../../src/assets/websites/Website_5.webp';
import Website_6 from '../../../../../src/assets/websites/Website_6.webp';
import Website_7 from '../../../../../src/assets/websites/Website_7.webp';
import Website_8 from '../../../../../src/assets/websites/Website_8.webp';
import Website_9 from '../../../../../src/assets/websites/Website_9.webp';


import {useEffect, useState} from 'react';

function Body() {
  const [active, setActive] = useState('Home');

  useEffect(()=>{

      //sub menus
      var themeSubMenu = document.getElementById("themeSubMenu");
      var portfolioSubMenu = document.getElementById("portfolioSubMenu");
      var personalSubMenu = document.getElementById("personalSubMenu");
      var hobbiesSubMenu = document.getElementById("hobbiesSubMenu");
      //main menu
      var themeMain = document.getElementById("themeMain");
      var portfolioMain = document.getElementById("portfolioMain");
      var personalMain = document.getElementById("personalMain");
      var hobbiesMain = document.getElementById("hobbiesMain");
      var comingSoon = document.getElementById("comingSoon");
      //sections
      var portfolioSection = document.getElementById("portfolioSection");
      //other elements
      var socialIcons = document.getElementById("socialIcons");
      var colorPalleteIcon = document.getElementById("colorPalleteIcon")
      //color pallete theme
      var homepageTheme;

      //intro animations
      introAnimation(themeMain, 200);
      introAnimation(portfolioMain, 700);
      introAnimation(personalMain, 1200);
      introAnimation(hobbiesMain, 1700);
      introAnimation(comingSoon, 2200);
      introAnimation(socialIcons, 2700);
      introAnimation(colorPalleteIcon, 2700);
      //function to load each section, all run at the same time which is why individual timeouts are required
      function introAnimation(a, time){
        setTimeout(
          function(){
            a.classList.remove("opacity-[0.0001]");
            a.classList.remove("translate-y-[3rem]");
          }, time);
      }

      //section animations
      sectionAnimation(portfolioSection, 0);

      //function to run each intro animations
      function sectionAnimation(a, time){
        setTimeout(
          function(){
            a.classList.remove("opacity-[0.0001]");
          }, time);
      }


      //Menu SubMenu Controller
      //The animation for opening and closing each submenu
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

      //Colour Pallete / Theme
      //--colorPallete-homepage-bg
      //--colorPallete-homepage-text
      //--colorPallete-homepage-alt

      //check if local storage contains the homepage theme already
      if (!localStorage.getItem('homepageTheme')) {
        //if there is nothing, set the homepage theme to 0
        homepageTheme = 0;
      } else if (localStorage.getItem('homepageTheme')) {
        //if there is get it from local storage
        homepageTheme = localStorage.getItem('homepageTheme');
      }

      //run theme selector which intially sets the start theme colours
      themeSelector();
      function themeSelector(){
        if (homepageTheme == 0) {
          //sets colour of theme
          colourUpdate('rgb(255 255 255)', 'rgb(0 0 0)', 'rgb(221 221 221)');
          //resets and sets local storage of selected theme
          localStorage.removeItem('homepageTheme');
          localStorage.setItem('homepageTheme', homepageTheme);
          //temp increase theme number to display next theme on click
          homepageTheme = 1;
          //repeat for each theme type
        } else if (homepageTheme == 1) {
          colourUpdate('rgb(60 60 60)', 'rgb(255 255 255)', 'rgb(100 100 100)');
          localStorage.removeItem('homepageTheme');
          localStorage.setItem('homepageTheme', homepageTheme);
          homepageTheme = 2;
        } else if (homepageTheme == 2) {
          colourUpdate('rgb(23 63 53)', 'rgb(234 160 156)', 'rgb(64 142 123)');
          localStorage.removeItem('homepageTheme');
          localStorage.setItem('homepageTheme', homepageTheme);
          homepageTheme = 3;
        } else if (homepageTheme == 3) {
          colourUpdate('rgb(255 250 243)', 'rgb(86 148 159)', 'rgb(240 233 223)');
          localStorage.removeItem('homepageTheme');
          localStorage.setItem('homepageTheme', homepageTheme);
          homepageTheme = 4;
        } else if (homepageTheme == 4) {
          colourUpdate('rgb(123 156 152)', 'rgb(234 241 243)', 'rgb(114 144 141)');
          localStorage.removeItem('homepageTheme');
          localStorage.setItem('homepageTheme', homepageTheme);
          homepageTheme = 0;
        }
      }
      //on click cycle through next theme
      $("#colourPallete").click(function(){
        themeSelector();
      })
      //set the colour of the theme to the correct parts
      function colourUpdate(a, b, c) {
        document.documentElement.style.setProperty("--colorPallete-homepage-bg", a);
        document.documentElement.style.setProperty("--colorPallete-homepage-text", b);
        document.documentElement.style.setProperty("--colorPallete-homepage-alt", c);
      }
  });

  return (
    <div id="HomepageBody" className={`${active === 'Home' ? "h-screen" : "h-full"} font-['DM_Serif_Display'] overflow-scroll w-screen bg-homepage-bg text-homepage-text transition-all duration-500`} >
      {/* Navigation Items */}
      <div id="HomepageBody" className={`${active === 'Home' ? "h-screen" : "h-full"} absolute flex justify-center items-center w-screen transition-all duration-500`} >
        <div className={`${active === 'Home' ? "delay-[0.5s]" : "translate-x-[-80vw] opacity-[0.0001]"} w-max absolute flex-col md:flex-row flex justify-end transition-all duration-500 `}>
          <div className="container text-[2rem] w-[15rem]">
            <div id="themeMain" className="link link-underline-25 link-emphasis group opacity-[0.0001] translate-y-[3rem] text-homepage-text">
                Themes
                <span className="dot-to-arrow"></span>
            </div>
            <div id="portfolioMain" className="link link-underline-25 link-emphasis group opacity-[0.0001] translate-y-[3rem] text-homepage-text">
                Portfolio
                <span className="dot-to-arrow"></span>
            </div>
            <div id="personalMain" className="link link-underline-25 link-emphasis group opacity-[0.0001] translate-y-[3rem] text-homepage-text">
                Personal
                <span className="dot-to-arrow"></span>
            </div>
            <div id="hobbiesMain" className="link link-underline-25 link-emphasis group opacity-[0.0001] translate-y-[3rem] text-homepage-text">
                Hobbies
                <span className="dot-to-arrow"></span>
            </div>
            <div id="comingSoon" className="text-homepage-alt w-max transition-all duration-500 opacity-[0.0001] translate-y-[3rem]">
                Coming Soon
            </div>
          </div>
          <div className="container text-[2rem] w-[15rem] h-[10rem] md:h-auto overflow-hidden relative">
            <div id="themeSubMenu" className="flex flex-col link translate-x-[-20rem] absolute top-0 ml-8">
              <span className="relative after:text-[1rem] after:text-homepage-bg after:px-1
              after:transition-all after:duration-500
              after:absolute after:content-['Work_In_Progress'] after:top-0 after:items-center
              after:flex after:justify-center after:right-[-0.5rem] after:bg-homepage-text
              after:w-[17ch] after:h-5 after:rounded-md after:z-20"></span>
              <button className="link link-underline-25 link-emphasis text-homepage-text"
              onClick={() => window.open('/xp', '_self')}>Windows Xp</button>
              <button className="link link-underline-25 link-emphasis text-homepage-text text-left"
              onClick={() => window.open('/mac', '_self')}>GlassOS</button>
            </div>
            <div id="portfolioSubMenu" className="flex flex-col link translate-x-[-20rem] absolute top-0 ml-8">
              <button onClick={() => setActive('Portfolio')} className="link link-underline-25 link-emphasis text-homepage-text" href="#">Websites</button>
            </div>
            <div id="personalSubMenu" className="flex flex-col link translate-x-[-20rem] absolute top-0 ml-8">
              <button className="text-homepage-alt" href="#">Coming Soon</button>
            </div>
            <div id="hobbiesSubMenu" className="flex flex-col link translate-x-[-20rem] absolute top-0 ml-8">
              <button className="text-homepage-alt" href="#">Coming Soon</button>
            </div>
          </div>
        </div>
      </div>
      {/*End of Navigation Items*/}

      {/*Image Overlay*/}
      <div className="">

      </div>
      {/*End of Image Overlay*/}

      {/*Bottom Icons*/}
      <div className="bottom-[12vh] right-[150px] flex absolute z-30">
        <div id="socialIcons" className="fixed flex m-5 transition-all duration-500 opacity-[0.0001]">
          <a alt="Personal Codepen" href="https://codepen.io/geo1baker" target="_blank" rel="noopener" className="p-5">
            <svg width="16" height="16" className="bi bi-code-slash link scale-[200%] hover:scale-[230%] fill-homepage-text" viewBox="0 0 16 16">
              <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
            </svg>
          </a>
          <a alt="Personal Github" href="https://github.com/Geolbaker" target="_blank" rel="noopener" className="p-5">
            <svg width="16" height="16" className="bi bi-github link scale-[200%] hover:scale-[230%] fill-homepage-text" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
          </a>
        </div>
      </div>
      {/*End of Bottom Icons*/}

      {/*Colour Pallete*/}
      <div className="right-[1vw] top-7 flex absolute px-8 z-30">
        <div id="colorPalleteIcon" className="fixed transition-all duration-500 opacity-[0.0001]">
          <div id="colourPallete" className="absolute top-[-7px] left-[-4px] w-[25px] h-[30px] hover:cursor-pointer z-20 peer"></div>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-droplet-half scale-[170%] link peer-hover:scale-[200%] fill-homepage-text" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10c0 0 2.5 1.5 5 .5s5-.5 5-.5c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"/>
            <path fillRule="evenodd" d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z"/>
          </svg>
        </div>
      </div>
      {/*End of Colour Pallete*/}

      {/*Back Button*/}
      <div className={`${active === 'Home' ? "translate-x-[-20vw] opacity-[0.0001]" : "translate-x-0 opacity-100"}
      duration-500 transition-all fixed top-16 left-1 sm:left-3 z-30`}>
        <button className="link link-emphasis fixed left-4 bottom-0 pl-8 text-[1.7rem] text-homepage-text
        before:transition-all before:duration-500 after:transition-all after:duration-500 before:absolute before:content-['']
        before:bg-homepage-text before:left-0 before:top-[45%] before:rounded-full after:absolute after:content-['']
        after:bg-homepage-text after:left-0 after:top-[45%] after:rounded-full before:rotate-[45deg]
        after:rotate-[-45deg] before:translate-y-[6.2px] after:translate-y-[-6.2px] before:w-[20px]
        after:w-[20px] before:h-[3px] after:h-[3px]
        " onClick={() => setActive('Home')}>
          Back
        </button>
      </div>

      {/*End of Back Button*/}

      {/*Portfolio Section*/}
      <div className={`${active === 'Portfolio' ? "translate-y-0 opacity-[100] pt-12 sm:pt-24" : "opacity-[0.0001] translate-y-[100vh] overflow-hidden"} relative top-0 z-10 w-screen flex justify-center transition-all duration-[1s] `}>
        <div id="portfolioSection" className=" transition-all duration-500 opacity-[0.0001] ">
          <div className="container flex justify-center flex-col text-homepage-text p-4 sm:p-12 mb-12 sm:mb-4">
            <span className="text-[4rem] sm:text-[6rem] lg:text-[9rem] text-center relative after:content-[''] after:top-[3.5rem] sm:after:top-[5.5rem] lg:after:top-[8.5rem] after:left-0 after:w-full after:h-[4rem]
            after:bg-homepage-bg after:border-t-2 after:opacity-[85%] after:border-homepage-alt after:absolute after:transition-all after:duration-500
            transition-all duration-500">Websites</span>
            <div className="w-full h-full gap-8 grid grid-cols-1 sm:grid-cols-2 pb-12">
              <img onClick={() => window.open('https://lincolnsulettings.co.uk/', '_blank')}
              className="homepage-website-imgs link" src={Website_5} loading="lazy" alt=""/>
              <img onClick={() => window.open('https://lincolnsu.com/freshers', '_blank')}
              className="homepage-website-imgs link" src={Website_3} loading="lazy" alt=""/>
              <img onClick={() => window.open('https://lincolnsu.com/housingblogs', '_blank')}
              className="homepage-website-imgs link" src={Website_4} loading="lazy" alt=""/>
              <img onClick={() => window.open('https://mynsu.co.uk/', '_blank')}
              className="homepage-website-imgs link" src={Website_6} loading="lazy" alt=""/>
              <img onClick={() => window.open('https://bathspasu.co.uk/gym', '_blank')}
              className="homepage-website-imgs link" src={Website_1} loading="lazy" alt=""/>
              <img onClick={() => window.open('https://lincolnsu.com/activities/varsity', '_blank')}
              className="homepage-website-imgs link" src={Website_2} loading="lazy" alt=""/>
              <img onClick={() => window.open('https://mynsu.co.uk/freshers-22', '_blank')}
              className="homepage-website-imgs link" src={Website_7} loading="lazy" alt=""/>
              <img onClick={() => window.open('https://quacklincoln.com/', '_blank')}
              className="homepage-website-imgs link" src={Website_8} loading="lazy" alt=""/>
              <img onClick={() => window.open('https://ulsuroles.co.uk/', '_blank')}
              className="homepage-website-imgs link" src={Website_9} loading="lazy" alt=""/>
            </div>

          </div>
        </div>
      </div>
      {/*End of Portfolio Section*/}


    </div>

  );

}



export default Body;
