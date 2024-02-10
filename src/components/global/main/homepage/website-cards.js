// ChildComponent.js
import React from 'react';
import $ from 'jquery';

const WebsiteCardComponent = (props) => {
  const hasLink = props.link && props.link !== "";

  const mainTitle = (
    <p className="text-homepage-text mt-4 px-2 mb-3 font-[700] group-hover:underline group-hover:cursor-pointer">{props.name}</p>
  );

  const wrappedMainTitle = hasLink ? <a className="group after:content-[''] after:absolute after:top-0 after:left-0 after:h-full after:w-full hover:cursor-pointer" href={props.link} target="_blank" alt={props.name}>{mainTitle}</a> : mainTitle;


  return <div className="text-homepage-text !font-sans w-full p-4 rounded-[30px] relative flex flex-col justify-between
  before:content-[''] before:absolute before:left-[0] before:top-[0] before:w-full before:h-full before:rounded-[10px] before:bg-homepage-alt before:opacity-40">
    <div className="text-homepage-text text-[0.9rem] relative flex flex-wrap gap-2 mt-2">
      {props.tags.map((text, index) => (
        <div className="p-1 px-4 bg-homepage-bg w-fit font-[300] rounded-full">{text}</div>
      ))}
    </div>
    {wrappedMainTitle}
  </div>;
};

export default WebsiteCardComponent;
