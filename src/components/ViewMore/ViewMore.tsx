import classNames from 'classnames';
import React, { useState } from 'react';
import { Icon } from '../Icon/Icon';
import { Explore } from '../BottomNavigation/FooterNavigation/Explore/Explore';
import { Tools } from '../BottomNavigation/FooterNavigation/Tools/Tools';
import { Insurance } from '../BottomNavigation/FooterNavigation/Insurance/Insurance';
import { canUseWebp } from '../../utils/hooks/canUseWebp';
import './ViewMore.scss';

interface ViewMoreProps {
  menu: [
    {
      id: 1 | 2 | 3;
      title: 'Explore' | 'Tools' | 'Asuransi';
      spriteSelector: '--explore' | '--tools' | '--insurance';
    }
  ];
  exploreProps: {
    category: {
      name: string;
      description: string;
    };
    relatedPosts: [
      {
        title: string;
        slug: string;
      }
    ];
  };
  toolsProps: {
    title: string;
    subtitle: string;
    calculatorArticles: [
      {
        title: string;
        slug: string;
      }
    ];
  };
  insuranceLinks: [
    {
      id: string;
      link: string;
      text: string;
      gtmClassName: string;
    }
  ];
}

export const ViewMore = (props: ViewMoreProps) => {
  const { menu, exploreProps, toolsProps, insuranceLinks } = props;
  const [isOpen, setOpen] = useState(false);
  const [activeId, setActiveId] = useState(0);

  const loadContentComponent = (id) => {
    switch (id) {
      case 1:
        return (
          <Explore
            category={exploreProps.category}
            relatedPosts={exploreProps.relatedPosts}
            onBtnClick={() => setActiveId(0)}
          />
        );
      case 2:
        return (
          <Tools
            title={toolsProps.title}
            subtitle={toolsProps.subtitle}
            calculatorArticles={toolsProps.calculatorArticles}
            onBtnClick={() => setActiveId(0)}
          />
        );
      case 3:
        return (
          <Insurance
            onBtnClick={() => setActiveId(0)}
            insuranceLinks={insuranceLinks}
          />
        );
    }
  };

  return (
    <div className={activeId > 0 ? 'viewMoreModal' : ''}>
      <div className="viewMoreContentWrapper">
        <div className="content">
          <button className="closeBtn" onClick={() => setActiveId(0)}>
            &#215;
          </button>

          <div>{loadContentComponent(activeId)}</div>
        </div>
      </div>

      <div className="viewMore">
        <div className={classNames('container', { '-hide': !isOpen })}>
          {menu.map((item) => (
            <div className="item">
              <Icon
                className={classNames(
                  'icon',
                  canUseWebp ? '-webp' : '-png',
                  item.spriteSelector
                )}
                onClick={() =>
                  activeId === item.id ? setActiveId(0) : setActiveId(item.id)
                }
                noContent={true}
              />
              {item.title}
            </div>
          ))}
        </div>

        <Icon
          className={classNames(
            'toggler',
            canUseWebp ? '-webp' : '-png',
            isOpen ? '--open' : '--close'
          )}
          onClick={() => {
            setOpen((isOpen) => !isOpen);
            isOpen && setActiveId(0);
          }}
          noContent={true}
        />
      </div>
    </div>
  );
};
