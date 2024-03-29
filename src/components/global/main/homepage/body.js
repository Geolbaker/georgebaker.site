import $ from 'jquery';

import WebsiteCardComponent from './website-cards.js'

import {useEffect, useState} from 'react';

function Body() {
  const [active, setActive] = useState('Home');

  useEffect(()=>{

      //sub menus
      var themeSubMenu = document.getElementById("themeSubMenu");
      var portfolioSubMenu = document.getElementById("portfolioSubMenu");
      var personalSubMenu = document.getElementById("personalSubMenu");
      //main menu
      var themeMain = document.getElementById("themeMain");
      var portfolioMain = document.getElementById("portfolioMain");
      var personalMain = document.getElementById("personalMain");
      var comingSoon = document.getElementById("comingSoon");
      //sections
      var portfolioSection = document.getElementById("portfolioSection");
      var personalSection = document.getElementById("personalSection");
      var documentarySection = document.getElementById("documentarySection");
      //other elements
      var socialIcons = document.getElementById("socialIcons");
      var colorPalleteIcon = document.getElementById("colorPalleteIcon")
      //color pallete theme
      var homepageTheme;

      //intro animations
      introAnimation(portfolioMain, 200);
      introAnimation(themeMain, 300);
      introAnimation(personalMain, 400);
      introAnimation(socialIcons, 800);
      introAnimation(colorPalleteIcon, 800);
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
      sectionAnimation(personalSection, 0);
      sectionAnimation(documentarySection, 0);

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
            <div id="portfolioMain" className="link link-underline-25 link-emphasis group opacity-[0.0001] translate-y-[3rem] text-homepage-text">
                Portfolio
                <span className="dot-to-arrow"></span>
            </div>
            <div id="themeMain" className="link link-underline-25 link-emphasis group opacity-[0.0001] translate-y-[3rem] text-homepage-text">
                Themes
                <span className="dot-to-arrow"></span>
            </div>
            <div id="personalMain" className="link link-underline-25 link-emphasis group opacity-[0.0001] translate-y-[3rem] text-homepage-text">
                Personal
                <span className="dot-to-arrow"></span>
            </div>
          </div>
          <div className="container text-[2rem] w-[15rem] h-[10rem] md:h-auto overflow-hidden relative">
            <div id="themeSubMenu" className="flex flex-col link translate-x-[-20rem] absolute top-0 ml-8">
              <span className="relative after:text-[1rem] after:text-homepage-bg after:px-1
              after:transition-all after:duration-500
              after:absolute after:content-['Work_In_Progress'] after:top-0 after:items-center
              after:flex after:justify-center after:right-[-0.5rem] after:bg-homepage-text
              after:w-[17ch] after:h-5 after:rounded-md after:z-20"></span>
              <button className="link link-underline-25 link-emphasis text-homepage-text text-left"
              onClick={() => window.open('/xp', '_self')}>Windows Xp</button>
              <button className="link link-underline-25 link-emphasis text-homepage-text text-left"
              onClick={() => window.open('/mac', '_self')}>GlassOS</button>
            </div>
            <div id="portfolioSubMenu" className="flex flex-col link translate-x-[-20rem] absolute top-0 ml-8">
              <button onClick={() => setActive('Portfolio')} className="link link-underline-25 link-emphasis text-homepage-text text-left" href="#">Websites</button>
            </div>
            <div id="personalSubMenu" className="flex flex-col link translate-x-[-20rem] absolute top-0 ml-8">
              <button onClick={() => setActive('Personal')} className="link link-underline-25 link-emphasis text-homepage-text text-left" href="#">About Me</button>
              <button onClick={() => setActive('Documentary')} className="link link-underline-25 link-emphasis text-homepage-text text-left" href="#">Documentary</button>
              <a href="https://www.goodreads.com/geolbaker" target="_blank" rel="noreferrer" className="link link-underline-25 link-emphasis text-homepage-text text-left">
                GoodReads
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline font-[900] fill-homepage-text scale-[1.3] left-[12px] bottom-[3px] relative stroke-homepage-text link" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                  <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                </svg>
              </a>

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
      <div className="bottom-[12vh] right-[200px] flex absolute z-30">
        <div id="socialIcons" className="fixed flex m-5 transition-all duration-500 opacity-[0.0001]">
          <a alt="Personal Codepen" href="https://codepen.io/geo1baker" target="_blank" rel="noreferrer" className="p-5">
            <svg width="16" height="16" className="bi bi-code-slash link scale-[200%] hover:scale-[230%] fill-homepage-text" viewBox="0 0 16 16">
              <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
            </svg>
          </a>
          <a alt="Personal Github" href="https://github.com/Geolbaker" target="_blank" rel="noreferrer" className="p-5">
            <svg width="16" height="16" className="bi bi-github link scale-[200%] hover:scale-[230%] fill-homepage-text" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
          </a>
          <a alt="Personal YouTube" href="https://youtube.com/@geolbaker" target="_blank" rel="noreferrer" className="p-5">
            <svg width="16" height="16" className="bi bi-youtube link scale-[200%] hover:scale-[230%] fill-homepage-text" viewBox="0 0 16 16">
              <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
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
      <div className={`${active === 'Portfolio' ? "translate-y-0 opacity-[100] pt-12 sm:pt-24 h-[20rem]" : "h-[0.0001rem] opacity-[0.0001] translate-y-[100vh] overflow-hidden"} relative top-0 z-10 w-screen flex justify-center transition-all duration-[1s] `}>
        <div id="portfolioSection" className=" transition-all duration-500 opacity-[0.0001] ">
          <div className="container flex justify-center items-center flex-col text-homepage-text p-4 sm:p-12 mb-12 sm:mb-4">
            <span className="text-[4rem] sm:text-[6rem] lg:text-[9rem] text-center relative after:content-[''] after:top-[3.5rem] sm:after:top-[5.5rem] lg:after:top-[8.5rem] after:left-0 after:w-full after:h-[4rem]
            after:bg-homepage-bg after:border-t-2 after:opacity-[85%] after:border-homepage-alt after:absolute after:transition-all after:duration-500
            transition-all duration-500">Websites</span>
            <div className="w-full md:w-[90%] h-full gap-8 flex flex-col text-[1.3rem] !font-sans justify-center text-left pb-12 text-homepage-text ">

              <div className="w-full h-full gap-8 flex pt-4 flex-col text-[1.3rem] !font-sans justify-center text-left pb-4 text-homepage-text ">
                <p className="text-homepage-text">
                  I've worked with various clients, businesses and charities over the years of me being a Web Designer and Web Developer. You can see some of them below.
                </p>
              </div>

              <div className="w-full h-full gap-8 flex pt-2 flex-col text-[2rem] !font-['DM_Serif_Display'] justify-center text-left text-homepage-text ">
                <p className="text-homepage-text">
                  Optima Graphic Design
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

                <WebsiteCardComponent name="World Energy Council" tags={["Expression Engine", "Large Developments", "General Maintenance"]} link=""/>
                <WebsiteCardComponent name="World Heart Federation" tags={["Wordpress", "Large Developments", "General Maintenance"]} link=""/>
                <WebsiteCardComponent name="World Obesity Federation" tags={["Expression Engine", "General Maintenance"]} link=""/>
                <WebsiteCardComponent name="Nottingham City Council Early Help" tags={["Expression Engine", "Full Site Development"]} link=""/>
                <WebsiteCardComponent name="Hobson Industries" tags={["Shopify", "Full Site Development"]} link=""/>
                <WebsiteCardComponent name="Whisby Garden Centre" tags={["Wordpress", "Full Site Development", "PENDING"]} link=""/>
                <WebsiteCardComponent name="ATC Instillations" tags={["Wordpress", "Full Site Development", "PENDING"]} link=""/>
                <WebsiteCardComponent name="Batemans Brewery" tags={["Wordpress", "Full Site Development", "PENDING"]} link=""/>
                <WebsiteCardComponent name="General Chiropractor Council" tags={["Expression Engine", "Large Developments", "General Maintenance"]} link=""/>
                <WebsiteCardComponent name="Coveris" tags={["Expression Engine", "General Maintenance"]} link=""/>
                <WebsiteCardComponent name="LNAA" tags={["Wordpress", "Partial Full Site Development"]} link=""/>
                <WebsiteCardComponent name="APSS" tags={["Expression Engine", "Large Developments", "General Maintenance"]} link=""/>
                <WebsiteCardComponent name="World Obesity Day" tags={["Expression Engine", "General Maintenance"]} link=""/>
                <WebsiteCardComponent name="Inzpire" tags={["Expression Engine", "General Maintenance"]} link=""/>
                <WebsiteCardComponent name="HPV Campaign" tags={["Expression Engine", "Large Developments", "General Maintenance"]} link=""/>
                <WebsiteCardComponent name="Uni Global Union" tags={["Wordpress", "Full Micro-Site Development"]} link=""/>
                <WebsiteCardComponent name="Optima Graphic Design" tags={["Expression Engine", "Large Developments"]} link=""/>
                <WebsiteCardComponent name="Lincoln BIG" tags={["Expression Engine", "General Maintenance"]} link=""/>
                <WebsiteCardComponent name="Branston" tags={["Expression Engine", "Large Developments"]} link=""/>
                <WebsiteCardComponent name="Lindum Group" tags={["Wordpress", "General Maintenance"]} link=""/>
                <WebsiteCardComponent name="INNES England" tags={["Expression Engine", "General Maintenance"]} link=""/>
                <WebsiteCardComponent name="IUF" tags={["Wordpress", "General Maintenance"]} link=""/>
                <WebsiteCardComponent name="Lincoln College" tags={["Expression Engine", "General Maintenance"]} link=""/>
                <WebsiteCardComponent name="World Stroke Organisation" tags={["Expression Engine", "General Maintenance"]} link=""/>
                <WebsiteCardComponent name="World Stroke Academy" tags={["Wordpress", "General Maintenance"]} link=""/>
                <WebsiteCardComponent name="St Hughs School" tags={["Expression Engine", "General Maintenance"]} link=""/>
                <WebsiteCardComponent name="Gissing" tags={["Expression Engine", "General Maintenance"]} link=""/>
                <WebsiteCardComponent name="MicronClean" tags={["Expression Engine", "General Maintenance"]} link=""/>
                <WebsiteCardComponent name="Lincolnshire Music Services" tags={["Expression Engine", "General Maintenance"]} link=""/>
                <WebsiteCardComponent name="KBSA" tags={["Expression Engine", "General Maintenance"]} link=""/>
                <WebsiteCardComponent name="England Golf" tags={["Wordpress", "Large Developments", "General Maintenance"]} link=""/>
                <WebsiteCardComponent name="Hutchinsons" tags={["Wordpress", "General Maintenance"]} link=""/>
                <WebsiteCardComponent name="Cooke and Arkwright" tags={["Expression Engine", "General Maintenance"]} link=""/>
                <WebsiteCardComponent name="Allen Signs" tags={["Expression Engine", "Full Site Rebrand"]} link=""/>
                <WebsiteCardComponent name="The Collection/Lincoln Museum" tags={["Expression Engine", "Full Site Rebrand"]} link=""/>
                <WebsiteCardComponent name="Great Wood Farm" tags={["Expression Engine", "General Maintenance"]} link=""/>
                <WebsiteCardComponent name="Nerve Tumors" tags={["Expression Engine", "Large Development", "General Maintenance"]} link=""/>
                <WebsiteCardComponent name="Equidem" tags={["Expression Engine", "General Maintenance"]} link=""/>
                <WebsiteCardComponent name="Delta Simons" tags={["Expression Engine", "General Maintenance"]} link=""/>
                <WebsiteCardComponent name="Rulac" tags={["Expression Engine", "General Maintenance"]} link=""/>

              </div>

              <div className="w-full h-full gap-8 flex pt-2 flex-col text-[2rem] !font-['DM_Serif_Display'] justify-center text-left text-homepage-text ">
                <p className="text-homepage-text">
                  SUMS
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

                <WebsiteCardComponent name="Lincoln Student Lettings" tags={["SUMS", "Full Site Development"]} link=""/>
                <WebsiteCardComponent name="Lincoln Students’ Union" tags={["SUMS", "Main InHouse Site", "Large Developments", "General Maintenance"]} link=""/>
                <WebsiteCardComponent name="SUMS" tags={["SUMS", "Secondary InHouse Site", "General Maintenance"]} link=""/>
                <WebsiteCardComponent name="Northumbria Students’ Union" tags={["SUMS", "Full Site Development", "General Maintenance"]} link=""/>
                <WebsiteCardComponent name="York St John Students’ Union" tags={["SUMS", "Large Developments", "General Maintenance"]} link=""/>
                <WebsiteCardComponent name="Northampton Student’s Union" tags={["SUMS", "Partial Full Site Development", "General Maintenance"]} link=""/>
                <WebsiteCardComponent name="Bath Spa Students’ Union" tags={["SUMS", "Large Developments", "General Maintenance"]} link=""/>
                <WebsiteCardComponent name="University of Nottingham Students’ Union" tags={["SUMS", "General Maintenance"]} link=""/>
                <WebsiteCardComponent name="Kent Union" tags={["SUMS", "General Maintenance"]} link=""/>
                <WebsiteCardComponent name="Hull University Union" tags={["SUMS", "General Maintenance"]} link=""/>
                <WebsiteCardComponent name="University of York Students’ Union" tags={["SUMS", "General Maintenance"]} link=""/>
                <WebsiteCardComponent name="Brookes Union" tags={["SUMS", "General Maintenance"]} link=""/>
                <WebsiteCardComponent name="Loughborough Students’ Union" tags={["SUMS", "General Maintenance"]} link=""/>
                <WebsiteCardComponent name="University of Westminster Students’ Union" tags={["SUMS", "General Maintenance"]} link=""/>
                <WebsiteCardComponent name="University of Manchester Students’ Union" tags={["SUMS", "General Maintenance"]} link=""/>


              </div>

            </div>

          </div>
        </div>
      </div>
      {/*End of Portfolio Section*/}

      {/*Personal Section*/}
      <div className={`${active === 'Personal' ? "translate-y-0 opacity-[100] pt-12 sm:pt-24 h-[20rem]" : "h-[0.0001rem] opacity-[0.0001] translate-y-[100vh] overflow-hidden h-0"} relative top-0 z-10 w-screen flex justify-center transition-all duration-[1s] `}>
        <div id="personalSection" className=" transition-all duration-500 opacity-[0.0001] ">
          <div className="container flex justify-center items-center flex-col text-homepage-text p-4 sm:p-6 mb-12 sm:mb-4">
            <span className="text-[4rem] sm:text-[6rem] lg:text-[9rem] text-center relative after:content-[''] after:top-[3.5rem] sm:after:top-[5.5rem] lg:after:top-[8.5rem] after:left-0 after:w-full after:h-[4rem]
            after:bg-homepage-bg after:border-t-2 after:opacity-[85%] after:border-homepage-alt after:absolute after:transition-all after:duration-500
            transition-all duration-500">About Me</span>
            <div className="w-full md:w-[90%] h-full gap-8 flex pt-4 flex-col text-[1.3rem] !font-sans justify-center text-left pb-12 text-homepage-text ">
              <p className="text-homepage-text">
                I'm George Baker.
                I'm a web developer, currently specialising in Wordpress, Expression Engine and Shopify.
              </p>
              <p className="text-homepage-text">
                My spare time is spent tinkering with too many projects that are <span className="!text-[0.8rem]">(finally)</span> starting to see the light of day.
              </p>
              <p className="text-homepage-text text-[2rem] !font-['DM_Serif_Display']">My Hobbies:</p>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 !text-[1.2rem]">

                <p className="text-homepage-text p-2 pl-6 relative
                 after:content-[''] after:top-[17px] after:left-[3px] after:rounded-[1px] after:h-[8px] after:w-[8px]
                 after:bg-homepage-text after:rotate-[45deg] after:absolute">Mechanical Keyboards</p>

                <p className="text-homepage-text p-2 pl-6 relative
                 after:content-[''] after:top-[17px] after:left-[3px] after:rounded-[1px] after:h-[8px] after:w-[8px]
                 after:bg-homepage-text after:rotate-[45deg] after:absolute">Piano, Guitar and Music</p>

                <p className="text-homepage-text p-2 pl-6 relative
                 after:content-[''] after:top-[17px] after:left-[3px] after:rounded-[1px] after:h-[8px] after:w-[8px]
                 after:bg-homepage-text after:rotate-[45deg] after:absolute">Youtube</p>

                <p className="text-homepage-text p-2 pl-6 relative
                 after:content-[''] after:top-[17px] after:left-[3px] after:rounded-[1px] after:h-[8px] after:w-[8px]
                 after:bg-homepage-text after:rotate-[45deg] after:absolute">Reading</p>

                <p className="text-homepage-text p-2 pl-6 relative
                 after:content-[''] after:top-[17px] after:left-[3px] after:rounded-[1px] after:h-[8px] after:w-[8px]
                 after:bg-homepage-text after:rotate-[45deg] after:absolute">Fitness & Nutrition</p>

                <p className="text-homepage-text p-2 pl-6 relative
                 after:content-[''] after:top-[17px] after:left-[3px] after:rounded-[1px] after:h-[8px] after:w-[8px]
                 after:bg-homepage-text after:rotate-[45deg] after:absolute">Gardening & DIY</p>

              </div>


              <p id="mechanical-keyboards" className="text-homepage-text text-[2rem] !font-['DM_Serif_Display'] pt-[45px]">
               Mechanical Keyboards
              </p>
              <p className="text-homepage-text">

              </p>

              <p id="youtube" className="text-homepage-text text-[2rem] !font-['DM_Serif_Display'] pt-[45px]">
               YouTube
              </p>
              <p className="text-homepage-text">

              </p>

              <p id="fitness-nutrition" className="text-homepage-text text-[2rem] !font-['DM_Serif_Display'] pt-[45px]">
               Fitness & Nutrition
              </p>
              <p className="text-homepage-text">

              </p>

              <p id="piano-guitar-music" className="text-homepage-text text-[2rem] !font-['DM_Serif_Display'] pt-[45px]">
               Piano, Guitar and Music
              </p>
              <p className="text-homepage-text">

              </p>

              <p id="reading" className="text-homepage-text text-[2rem] !font-['DM_Serif_Display'] pt-[45px]">
               Reading
              </p>
              <p className="text-homepage-text">

              </p>

              <p id="gardening-diy" className="text-homepage-text text-[2rem] !font-['DM_Serif_Display'] pt-[45px]">
               Gardening & DIY
              </p>
              <p className="text-homepage-text">

              </p>


            </div>

          </div>
        </div>
      </div>
      {/*End of Personal Section*/}

      {/*Personal Section*/}
      <div className={`${active === 'Documentary' ? "translate-y-0 opacity-[100] pt-12 sm:pt-24 h-[20rem]" : "h-[0.0001rem] opacity-[0.0001] translate-y-[100vh] overflow-hidden h-0"} relative top-0 z-10 w-screen flex justify-center transition-all duration-[1s] `}>
        <div id="documentarySection" className=" transition-all duration-500 opacity-[0.0001] ">
          <div className="container flex justify-center items-center flex-col text-homepage-text p-4 sm:p-12 mb-12 sm:mb-4">
            <span className="text-[4rem] sm:text-[6rem] lg:text-[9rem] text-center relative after:content-[''] after:top-[3.5rem] sm:after:top-[5.5rem] lg:after:top-[8.5rem] after:left-0 after:w-full after:h-[4rem]
            after:bg-homepage-bg after:border-t-2 after:opacity-[85%] after:border-homepage-alt after:absolute after:transition-all after:duration-500
            transition-all duration-500">Documentary</span>


            <div className="w-full md:w-[90%] h-full gap-8 flex pt-4 flex-col text-[1.3rem] !font-sans justify-center text-left pb-8 text-homepage-text ">
              <p className="text-homepage-text">
                Over the course of a good many months, I filmed footage and worked with my good friend Paice Lees to film a documentary about my experiences with Rooftopping and Urbex (Urban Exploration).
              </p>
            </div>
            <div className="w-full md:w-[75%] h-full gap-8 flex flex-col items-center text-[2rem] justify-center text-center pb-12 text-homepage-text ">
              <iframe width="100%" height="500px" src="https://www.youtube.com/embed/X6_IaHQpMD0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>

          </div>
        </div>
      </div>
      {/*End of Personal Section*/}


    </div>

  );

}



export default Body;
