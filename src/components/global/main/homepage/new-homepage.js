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

    //where to go from here?
    //add blocks that float around with the things withing
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
        <div className="tester  work-block">
          <img className="new-homepage-bg-img" src={WorkBackground} loading="lazy" />
          <div className="">
            <div className="work-bubble">
              Lincoln Student Lettings
            </div>
            <div className="work-bubble">
              Lincoln Students Union
            </div>
            <div className="work-bubble">
              SUMS
            </div>
            <div className="work-bubble">
              University of Nottingham SU
            </div>
            <div className="work-bubble">
              Kent Union
            </div>
            <div className="work-bubble">
              Hull University Union
            </div>
            <div className="work-bubble">
              University of York Students Union
            </div>
            <div className="work-bubble">
              York St Johns Students’ Union
            </div>
            <div className="work-bubble">
              Northampton Student’s Union
            </div>
            <div className="work-bubble">
              Brookes Union
            </div>
            <div className="work-bubble">
              Loughborough Students’ Union
            </div>
            <div className="work-bubble">
              University of Westminster Students’ Union
            </div>
            <div className="work-bubble">
              University of Manchester Students’ Union
            </div>
            <div className="work-bubble">
              Northumbria Students’ Union
            </div>
            <div className="work-bubble">
              Bath Spa Students’ Union
            </div>
            <div className="work-bubble">
              Lincoln BIG
            </div>
            <div className="work-bubble">
              World Energy Council
            </div>
            <div className="work-bubble">
              Branston
            </div>
            <div className="work-bubble">
              APSS
            </div>
            <div className="work-bubble">
              LNAA
            </div>
            <div className="work-bubble">
              World Obesity Federation
            </div>
            <div className="work-bubble">
              AWID
            </div>
            <div className="work-bubble">
              SSBC
            </div>
            <div className="work-bubble">
              Coveris
            </div>
            <div className="work-bubble">
              World Obesity Day
            </div>
            <div className="work-bubble">
              INNES England
            </div>
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
