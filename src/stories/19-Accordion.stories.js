import React from 'react';
import {Accordion} from '../components/Accordion';

export default {
  title: "Accordion",
};


export const accordion = (props) => {
  const paragraph = {
    title: "Click this!",
    content: "It turns out that you need to import the lifepal icons to show the arrow icon"
  }


  return (
    <div >
      <Accordion title={paragraph.title} content={paragraph.content}/>
    </div>
  )
}