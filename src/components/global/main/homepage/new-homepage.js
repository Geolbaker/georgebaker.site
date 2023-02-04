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
        $( '.marquee-wrapper__work' ).toggleClass('opacity-[0.0001%]');
      } else if (type == 'skills') {
        $( '.skills-block' ).toggleClass('opacity-[0.0001%]');
        $( '.marquee-wrapper__skills' ).toggleClass('opacity-[0.0001%]');
      } else if (type == 'hobbies') {
        $( '.hobbies-block' ).toggleClass('opacity-[0.0001%]');
        $( '.marquee-wrapper__hobbies' ).toggleClass('opacity-[0.0001%]');
      }
    });

    let work_str = 'Lincoln Student Lettings, Lincoln Students Union, SUMS, University of Nottingham SU, Kent Union, Hull University Union, University of York Students Union, York St Johns Students’ Union, Northampton Student’s Union, Brookes Union, Loughborough Students’ Union, University of Westminster Students’ Union, University of Manchester Students’ Union, Northumbria Students’ Union, Bath Spa Students’ Union, Lincoln BIG, World Energy Council, Branston, APSS, LNAA, World Obesity Federation, AWID, SSBC, Coveris, World Obesity Day, INNES England, Optima';
    let skills_str = 'Wordpress, React, HTML, CSS, SASS, jQuery, PHP, Javascript, Tailwind, Bootstrap 5, Photoshop, YAML, Blade, Laravel, SEO, Expression Engine, Typescript';
    let hobbies_str = 'Drawing, Mechanical Keyboards, Custom PC builds, Piano, Guitar, Reading, Coding, Weightlifting, Nutrition, Gardening, DIY, Architecture, Youtube';



    let work_arr = createArrFromString(work_str);
    let skills_arr = createArrFromString(skills_str);
    let hobbies_arr = createArrFromString(hobbies_str);

    shuffle(work_arr);
    shuffle(skills_arr);
    shuffle(hobbies_arr);

    $( document ).ready(getWorkText());
    $( document ).ready(getSkillsText());
    $( document ).ready(getHobbiesText());

    //init for work text
    function getWorkText(type) {
      for (let i = 0; i < work_arr.length; i++) {
        $( '.work-1' ).append( `<div class="scrolling-text">` + work_arr[i] + `</div>` );
        $( '.work-2' ).append( `<div class="scrolling-text">` + work_arr[i] + `</div>` );
      }
    }
    //init for skills text
    function getSkillsText(type) {
      for (let i = 0; i < skills_arr.length; i++) {
        $( '.skills-1' ).append( `<div class="scrolling-text">` + skills_arr[i] + `</div>` );
        $( '.skills-2' ).append( `<div class="scrolling-text">` + skills_arr[i] + `</div>` );
      }
    }
    //init for hobbies text
    function getHobbiesText(type) {
      for (let i = 0; i < hobbies_arr.length; i++) {
        $( '.hobbies-1' ).append( `<div class="scrolling-text">` + hobbies_arr[i] + `</div>` );
        $( '.hobbies-2' ).append( `<div class="scrolling-text">` + hobbies_arr[i] + `</div>` );
      }
    }

    function createArrFromString(string) {
      return string.split(', ');
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
            <div className="marquee-wrapper marquee-wrapper__work opacity-[0.0001%]">
              <div className="text-wrapper work-1">
              </div>
              <div className="text-wrapper work-2">
              </div>
            </div>

            <div className="marquee-wrapper marquee-wrapper__skills opacity-[0.0001%]">
              <div className="text-wrapper skills-1">
              </div>
              <div className="text-wrapper skills-2">
              </div>
            </div>

            <div className="marquee-wrapper marquee-wrapper__hobbies opacity-[0.0001%]">
              <div className="text-wrapper hobbies-1">
              </div>
              <div className="text-wrapper hobbies-2">
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
