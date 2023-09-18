import React from "react";
import { MobileSidebarMenuProps } from "./MobileSidebarMenu";
import MobileSidebarMenu from "./MobileSidebarMenu";

import '../NavbarMobile.scss';

interface MobileSidebarProps extends MobileSidebarMenuProps {
  onCloseClick: ()=> void,
}

const MobileSidebar = (props: MobileSidebarProps) => {
  const { onCloseClick, logoPath, navigationMenu, childMenu, grandChildMenu, NextLink } = props;

  return (
    <div className="navigation__mobile--background">
      <div className="navigation__mobile">
        <div className="navigation__mobile--closeBtn">
          <span
            className="lifepal__icon lifepal__icon--close"
            onClick={onCloseClick}
          />
        </div>
        <MobileSidebarMenu
          NextLink={NextLink}
          logoPath={logoPath}
          navigationMenu={navigationMenu}
          childMenu={childMenu}
          grandChildMenu={grandChildMenu}
        />
      </div>
    </div>
  );
}

export default MobileSidebar;
