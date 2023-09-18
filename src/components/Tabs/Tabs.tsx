import React, { RefObject } from 'react';

import { Tab } from './Tab';

export const Tabs = ({ children }) => {

  const [activeTab, setActiveTab] = React.useState(children[0].props.label);
  const scrollRef: RefObject<any> = React.useRef();

  const onClickTabItem = (tab) => {
    setActiveTab(tab);
  };

  const arrowClickHandler = (position) => {
    const currentPosition = scrollRef.current.scrollLeft;
    position === 'right'
      ? scrollRef.current.scrollTo({top: 0, left: currentPosition + 25, behaviour: 'smooth'})
      : scrollRef.current.scrollTo({top: 0, left: currentPosition - 25, behaviour: 'smooth'});
  };

  return (
    <div className="lp__tabs--wrapper">
      <ol className="lp__tab--list">
        {/* TODO: this needs to replace with the icon font */}
        <div className="lp__tabs--arrow left__arrow" onClick={() => arrowClickHandler('left')}>&lt;</div>
        <div className="lp__tab--group" ref={scrollRef}>
          {children.map((child) => {
            const { label } = child.props;
            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </div>
        {/* TODO: this needs to replace with the icon font */}
        <div className="lp__tabs--arrow right__arrow" onClick={() => arrowClickHandler('right')}>&gt;</div>
      </ol>
      <div className="lp__tab--content">
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </div>
  );
}
