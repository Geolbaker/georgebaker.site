import {useEffect} from 'react';
import $ from 'jquery';

import WorkBackground from '../../../../../src/assets/homepage/work-background.jpeg';
import SkillsBackground from '../../../../../src/assets/homepage/skills-background.jpeg';
import HobbiesBackground from '../../../../../src/assets/homepage/hobbies-background.jpeg';

function NewHomepage() {

  useEffect(()=>{
    $('.new-homepage-links').on( 'mouseenter mouseleave', function(event) {
      let type = $(event.currentTarget).data('id');

      if (type == 'work') {
        $( '.work-block' ).toggleClass('opacity-[0.0001%]');
        $( '.text-wrapper-1' ).toggleClass('opacity-[0.0001%]');
        $( '.text-wrapper-2' ).toggleClass('opacity-[0.0001%]');
      } else if (type == 'skills') {
        $( '.skills-block' ).toggleClass('opacity-[0.0001%]');
      } else if (type == 'hobbies') {
        $( '.hobbies-block' ).toggleClass('opacity-[0.0001%]');
      }
    });

    let clients_str = 'Lincoln Student Lettings, Lincoln Students Union, SUMS, University of Nottingham SU, Kent Union, Hull University Union, University of York Students Union, York St Johns Students’ Union, Northampton Student’s Union, Brookes Union, Loughborough Students’ Union, University of Westminster Students’ Union, University of Manchester Students’ Union, Northumbria Students’ Union, Bath Spa Students’ Union, Lincoln BIG, World Energy Council, Branston, APSS, LNAA, World Obesity Federation, AWID, SSBC, Coveris, World Obesity Day, INNES England, Optima';
    let clients_arr = clients_str.split(', ');
    let alreadyChosenClients = [];
    shuffle(clients_arr);

    // get window width and height
    var winWidth = window.innerWidth;
    var winHeight = window.innerHeight;

    $( document ).ready(getWorkText());

    //init for work text
    function getWorkText() {
      for (let i = 0; i < clients_arr.length; i++) {
        $( '.text-wrapper-1' ).append( `<div class="scrolling-text">` + clients_arr[i] + `</div>` );
        $( '.text-wrapper-2' ).append( `<div class="scrolling-text">` + clients_arr[i] + `</div>` );
      }
    }

    function shuffle(array) {
      let currentIndex = array.length,  randomIndex;

      // While there remain elements to shuffle.
      while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }

      return array;
    }

  });

  return (
      <div className="h-screen w-screen">
          <div className="w-screen h-screen flex flex-col justify-center items-center px-12 grid grid-cols-2 overflow-hidden">
            <div className="group">
              <div className="new-homepage-links" data-id="work">Who I've Worked With</div>
              <div className="new-homepage-links" data-id="skills">Skills</div>
              <div className="new-homepage-links" data-id="hobbies">Hobbies</div>
            </div>
            <div className="marquee-wrapper">
              <div className="text-wrapper opacity-[0.0001%] text-wrapper-1">
              </div>
              <div className="text-wrapper opacity-[0.0001%] text-wrapper-2 ">
              </div>
            </div>
          </div>
        <div className="text-background opacity-[0.0001%] work-block">
          <img className="new-homepage-bg-img" src={WorkBackground} loading="lazy" />
        </div>
        <div className="text-background opacity-[0.0001%] skills-block">
          <img className="new-homepage-bg-img" src={SkillsBackground} loading="lazy" />
        </div>
        <div className="text-background opacity-[0.0001%] hobbies-block">
          <img className="new-homepage-bg-img" src={HobbiesBackground} loading="lazy" />
        </div>
      </div>

  );
}


export default NewHomepage;
