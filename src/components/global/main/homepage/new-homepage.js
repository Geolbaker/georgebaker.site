import {useEffect} from 'react';
import $ from 'jquery';

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
          <div className="new-homepage-links" data-id="work">Who I've Worked With</div>
          <div className="new-homepage-links" data-id="skills">Skills</div>
          <div className="new-homepage-links" data-id="hobbies">Hobbies</div>
        </div>
        <div className="tester opacity-[0.0001%] right-24 top-12 work-block">Work</div>
        <div className="tester opacity-[0.0001%] right-12 top-[50%] skills-block">Skills</div>
        <div className="tester opacity-[0.0001%] right-4 bottom-12 hobbies-block">Hobbies</div>
      </div>

  );
}


export default NewHomepage;
