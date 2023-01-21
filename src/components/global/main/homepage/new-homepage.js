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
      } else if (type == 'skills') {
        $( '.skills-block' ).toggleClass('opacity-[0.0001%]');
      } else if (type == 'hobbies') {
        $( '.hobbies-block' ).toggleClass('opacity-[0.0001%]');
      }
    });

    let clients_str = 'Lincoln Student Lettings, Lincoln Students Union, SUMS, University of Nottingham SU, Kent Union, Hull University Union, University of York Students Union, York St Johns Students’ Union, Northampton Student’s Union, Brookes Union, Loughborough Students’ Union, University of Westminster Students’ Union, University of Manchester Students’ Union, Northumbria Students’ Union, Bath Spa Students’ Union, Lincoln BIG, World Energy Council, Branston, APSS, LNAA, World Obesity Federation, AWID, SSBC, Coveris, World Obesity Day, INNES England, Optima';
    let clients_arr = clients_str.split(', ');
    shuffle(clients_arr);

    // get window width and height
    var winWidth = window.innerWidth;
    var winHeight = window.innerHeight;

    $( document ).ready(getBubbles());
    $( '.new-homepage-links' ).on( "mouseenter mouseleave", getBubbles());

    function getBubbles() {
      for ( var i=0; i < 5; i++ ) {

          let randomTop = getRandomNumber(0, winHeight);
          let randomLeft = getRandomNumber(0, winWidth);

          $( '.work-bubbles-init' ).append( `<div class="work-bubble work-bubble-` + i + `">` + clients_arr[i] + `</div>` );

          $( '.work-bubble-' + i ).css('top', randomTop + 'px');
          $( '.work-bubble-' + i ).css('left', randomLeft + 'px');

      }
    }

    function getRandomNumber(min, max) {
      return Math.random() * (max - min) + min;
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


    //where to go from here?
    //add blocks that float around with the things within
    //add a ripplying background that changes colour and is interactible with the mouse
    //have fun

  });

  return (
      <div className="h-screen w-screen">
        <div className="w-screen h-screen flex flex-col justify-center items-start px-12">
          <div className="group">
            <div className="new-homepage-links" data-id="work">Who I've Worked With</div>
            <div className="new-homepage-links" data-id="skills">Skills</div>
            <div className="new-homepage-links" data-id="hobbies">Hobbies</div>
          </div>
        </div>
        <div className="tester  work-block overflow-hidden">
          <img className="new-homepage-bg-img" src={WorkBackground} loading="lazy" />
          <div className="work-bubbles-init">

          </div>
        </div>
        <div className="tester opacity-[0.0001%] skills-block">
          <img className="new-homepage-bg-img" src={SkillsBackground} loading="lazy" />
        </div>
        <div className="tester opacity-[0.0001%] hobbies-block">
          <img className="new-homepage-bg-img" src={HobbiesBackground} loading="lazy" />
        </div>
      </div>

  );
}


export default NewHomepage;
