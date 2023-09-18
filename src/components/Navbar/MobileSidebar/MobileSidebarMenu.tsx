import React, { useState } from 'react';
import { ListItem } from '../ListItem/ListItem';
import { NavigationMenuType } from '../NavbarTypes';
import '../NavbarMobile.scss';

export interface MobileSidebarMenuProps {
  logoPath: string,
  navigationMenu: NavigationMenuType[],
  childMenu: NavigationMenuType[],
  grandChildMenu: NavigationMenuType[],
  NextLink: any,
}

const MobileSidebarMenu = (props: MobileSidebarMenuProps) => {
  const { logoPath, navigationMenu, childMenu, grandChildMenu, NextLink } = props;
  const [collapsingItem, setCollapsingItem] = useState([]); // list of collapsing menu on mobile sidebar

  const menuItem = (item, title) => {
    const toggleCollapse = (item) => {
      if (!collapsingItem.includes(item.title)) {
        const collapsingMenu = [...collapsingItem];
        collapsingMenu.push(item.title);
        setCollapsingItem(collapsingMenu);
      } else {
        const collapsingMenu = collapsingItem.filter(
          (menu) => menu !== item.title
        );
        setCollapsingItem(collapsingMenu);
      }
    };

    const toggleArrowIcon = (item) => {
      return (
        <span>
          <i className={`lifepal__icon lifepal__icon--${collapsingItem.includes(item.title) ? "arrow-up-small" : "arrow-down-small"}`} />
        </span>
      );
    };

    const showChildItem = (item) => {
      return (
        <ul className="child">
          {item.childItems && item.childItems.map((child) => child.title.toLowerCase() !== 'faq' &&
            <li key={child.title}>
              {setLinkComponent(child)}
              {child.childItems && child.childItems.length > 0 && collapsingItem.includes(child.title) &&
                <ul className="grandchild">
                  {child.childItems.map((item, index) =>
                    <ListItem item={item} NextLink={NextLink} />
                  )}
                </ul>}
            </li>
          )}
        </ul>
      );
    };

    const hasChildItem = item.childItems && item.childItems.length > 0;

    const setLinkComponent = (item) => {
      const hasChild = item.childItems && item.childItems.length > 0;
      if (hasChild) {
        return <a
          title={item.title}
          onClick={() => toggleCollapse(item)}
        >
          <span>{item.title}</span>
          {toggleArrowIcon(item)}
        </a>
      } else if (NextLink) {
        return <NextLink href={item.link}>
          <a
            title={item.title}
            className={item.title === "Dapatkan Penawaran" ? "color__blue" : ""}
          >
            <span>{item.title}</span>
          </a>
        </NextLink>
      } else return <a
        href={item.link}
        title={item.title}
        className={item.title === "Dapatkan Penawaran" ? "color__blue" : ""}
      >
        <span>{item.title}</span>
      </a>
    }

    return (
      <li key={title}>
        {setLinkComponent(item)}
        {hasChildItem && collapsingItem.includes(item.title) && showChildItem(item)}
      </li>
    );
  };

  return (
    <div className="navigation__mobile--menu">
      <img
        src={"https://lifepal.tech/static/images/lifepal-logo.png"}
        alt="Lifepal Logo"
        width="91px"
        height="31px"
      />
      <ul>
        {navigationMenu
          .filter(
            (item) =>
              item.title === "Bantuan" ||
              item.stylingClass !== "pull-right"
          )
          .map((item) => menuItem(item, item.title))}
      </ul>
    </div>
  );
}

export default MobileSidebarMenu;
