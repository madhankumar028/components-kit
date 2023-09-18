import React, { useState } from 'react';
import classNames from 'classnames';
import { Tools } from './Tools/Tools';
import { Insurance } from './Insurance/Insurance';
import { Account } from './Account/Account';
import { Explore } from './Explore/Explore';

import './FooterNavigation.scss';

interface FooterNavigationProps {
  NextLink?: any,
  menuItems: [
    {
      id: number,
      icon: 'explore' | 'insurance' | 'profile' | 'tools',
      text: string,
      gtmClassName?: string
    }
  ]
  accountProps: {
    title: string,
    subtitle: string,
    imgSrc: string,
  }
  insuranceLinks: [
    {
      id: string,
      link: string,
      text: string,
      gtmClassName?: string
    }
  ]
  toolsProps: {
    title: string,
    subtitle: string,
    gtmClassName?: string,
    calculatorArticles: [
      {
        title: string,
        slug: string,
      }
    ],
  }
  exploreProps: {
    gtmClassName?: string,
    category: {
      name: string,
      description: string
    }
    relatedPosts: [
      {
        title: string,
        slug: string,
      }
    ];
  }
}

const FooterNavigation = (props: FooterNavigationProps) => {
  const [activeId, setActiveId] = useState(0);
  const { menuItems, accountProps, insuranceLinks, toolsProps, exploreProps, NextLink } = props;

  const loadContentComponent = (id) => {
    switch (id) {
      case 1:
        return <Explore
          NextLink={NextLink}
          gtmClassName={exploreProps.gtmClassName}
          category={exploreProps.category}
          relatedPosts={exploreProps.relatedPosts}
          onBtnClick={() => setActiveId(0)}
        />;
      case 2:
        return <Tools
          NextLink={NextLink}
          title={toolsProps.title}
          subtitle={toolsProps.subtitle}
          gtmClassName={toolsProps.gtmClassName}
          calculatorArticles={toolsProps.calculatorArticles}
          onBtnClick={() => setActiveId(0)}
        />
      case 3:
        return <Insurance
          NextLink={NextLink}
          onBtnClick={() => setActiveId(0)}
          insuranceLinks={insuranceLinks}
        />
      case 4:
        return <Account
          NextLink={NextLink}
          title={accountProps.title}
          subtitle={accountProps.subtitle}
          imgSrc={accountProps.imgSrc}
          onBtnClick={() => setActiveId(0)}
        />;
    }
  };

  return (
    <div className={activeId > 0 ? 'footerNavigation__modal' : ''}>
      <div className="footerNavigation">
        <div className='footerNavigation__content'>
          <button
            className={`footerNavigation__closeBtn ${activeId > 0 ? "footerNavigation__closeBtn--active" : ""}`}
            onClick={() => setActiveId(0)}
          >
            &#215;
          </button>

          <div>
            {loadContentComponent(activeId)}
          </div>
        </div>
        <div
          className="footerNavigation__menus"
        >
          {menuItems && menuItems.map((item) =>
            <button
              key={item.id}
              className={classNames(
                "footerNavigation__menus__openBtn",
                item.id === activeId ? 'footerNavigation__menus__openBtn--active' : "",
                item.gtmClassName
              )}
              onClick={() => (activeId === item.id ? setActiveId(0) : setActiveId(item.id))}>
              <i
                className={`footerNav-icon footerNav-icon--${item.icon}${item.id === activeId ? "--active" : ""}`}
              />
              <span>{item.text}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FooterNavigation;
