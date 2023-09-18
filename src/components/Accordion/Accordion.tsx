import React, { useState } from 'react';
import classNames from 'classnames';

import './Accordion.scss';

interface AccordionProps {
  className?: string;
  title?: string;
  content?: string;
}

export const Accordion = ({ title, content }: AccordionProps) => {
  const [collapse, setCollapse] = useState(false);

  return (
    <div className='accordion' >
      <div className='accordion__head' >
        <div
          className='accordion__title'
          onClick={() => setCollapse(!collapse)}
        >
          <i
            className={classNames('mr-2 icon', `${collapse ? 'lifepal-arrow-up' : 'lifepal-arrow-down'}`)}
          />
          <div>{title}</div>
        </div>
      </div>
      <div className='accordion__body'>
        <div
          className={classNames(collapse ? 'accordion__content--show' : '', 'accordion__content')}
        > {content} </div>
      </div>
    </div>
  );
};
