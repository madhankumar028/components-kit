import React, {
  useState,
  useEffect,
  HTMLAttributes,
} from "react";
import classNames from "classnames";

import { ListItem } from "./ListItem/ListItem";
import MobileProfileIcon from "./MobileProfileIcon/MobileProfileIcon";
import MobileSidebar from "./MobileSidebar/MobileSidebar";
import { NavbarType, NavigationMenuType } from "./NavbarTypes";
import { Avatar } from "../Avatar";

import "./Navbar.scss";
import "./NavbarMobile.scss";

interface NavbarProps extends HTMLAttributes<HTMLInputElement> {
  navigationMenu: NavigationMenuType[];
  type: NavbarType;
  isAuthenticated: boolean;
  currentActivePage: string;
  isLargeScaleDisplay: boolean;
  handleLogin: () => void;
  handleLogout: () => void;
  logoPath: string;
  initialName: string;
  NextLink: any,
}

interface IMenuItem {
  item: NavigationMenuType;
  index: number;
  onClick?: () => void;
  onMouseOver?: () => void;
  isAgent: boolean,
  isSelected?: boolean;
  isChildMenu?: boolean;
  onMouseLeave?: () => void;
}

export const Navbar = ({
  navigationMenu,
  type,
  isAuthenticated,
  currentActivePage,
  isLargeScaleDisplay,
  handleLogin,
  handleLogout,
  logoPath,
  initialName,
  NextLink,
}: NavbarProps) => {

  // Get all 2nd level nav items, for caching purposes
  const getAllChildItems = () => {
    let newArr = [];
    if (navigationMenu) {
      for (let i = 0; i < navigationMenu.length; i++) {
        if (navigationMenu[i].childItems?.length > 0) {
          const childItem = navigationMenu[i].childItems;
          newArr.push(...childItem);
        }
      }
    }
    return newArr;
  }
  const allChildItems = getAllChildItems();

  const [hoveredParentMenu, setHoveredParentMenu] = useState("");
  const [selectedParentMenu, setSelectedParentMenu] = useState("");
  const [hoveredChildMenu, setHoveredChildMenu] = useState("");
  const [selectedChildMenu, setSelectedChildMenu] = useState("");
  const [childMenu, setChildMenu] = useState(allChildItems);
  const [grandChildMenu, setGrandChildMenu] = useState([]);
  const [openMobileSidebar, setOpenMobileSidebar] = useState(false);

  useEffect(() => {
    let childMenu = [];
    if (typeof window !== 'undefined') {
      const parentTitle = hoveredParentMenu || selectedParentMenu;
      const menu = navigationMenu.find((row) => row.title === parentTitle);

      if (menu && menu.childItems) {
        childMenu = menu.childItems;
      }

      setChildMenu(childMenu);
    }
  }, [hoveredParentMenu]);

  useEffect(() => {
    if (selectedParentMenu) {
      let childMenu = [];

      const menu = navigationMenu.find(
        (row) => row.title === selectedParentMenu
      );
      if (menu && menu.childItems) {
        childMenu = menu.childItems;
      }

      setChildMenu(childMenu);
    }
  }, [selectedParentMenu]);

  useEffect(() => {
    let grandChildMenu = [];

    const childTitle = hoveredChildMenu || selectedChildMenu;
    const menu = childMenu.find((row) => row.title === childTitle);

    if (menu && menu.childItems) {
      grandChildMenu = menu.childItems;
    }

    setGrandChildMenu(grandChildMenu);
  }, [hoveredChildMenu]);

  useEffect(() => {
    if (currentActivePage && navigationMenu.length) {
      preselectNavTitle();
    }
  }, [currentActivePage, navigationMenu]);

  const preselectNavTitle = () => {
    const currentPathName = currentActivePage.replace(/^\/|\/$/g, "");
    const splittedPathName = currentPathName.split("/");

    const parentPathName =
      splittedPathName && splittedPathName.length && splittedPathName[0];
    const childPathName =
      splittedPathName && splittedPathName.length > 1 && splittedPathName[1];

    switch (parentPathName) {
      case "media":
        setSelectedParentMenu("Keuangan");
        if (childPathName === "category") {
          const grandChildPathName =
            splittedPathName &&
            splittedPathName.length > 2 &&
            splittedPathName[2];

          switch (grandChildPathName) {
            case "perencanaan":
              setSelectedChildMenu("Perencanaan");
              break;
            case "tabungan":
              setSelectedChildMenu("Tabungan");
              break;
            case "kredit":
              setSelectedChildMenu("Kredit");
              break;
            case "investasi":
              setSelectedChildMenu("Investasi");
              break;
            case "administrasi":
              setSelectedChildMenu("Administrasi");
              break;
            case "kalkulator":
              setSelectedParentMenu("Konsultasi");
              setSelectedChildMenu("Kalkulator & Kuis");
              break;
            case "berita-riset":
              setSelectedParentMenu("Berita & Riset");
              setSelectedChildMenu("");
              break;
          }
        }
        break;
      case "asuransi":
        setSelectedParentMenu("Asuransi");

        switch (childPathName) {
          case "kesehatan":
            setSelectedChildMenu("Kesehatan");
            break;
          case "jiwa":
            setSelectedChildMenu("Jiwa");
            break;
          case "kendaraan":
            setSelectedChildMenu("Kendaraan");
            break;
        }
        break;
      case "penawaran":
        setSelectedParentMenu("Asuransi");
        setSelectedChildMenu("Dapatkan Penawaran");
        break;
      case "cek-keuangan":
        setSelectedParentMenu("Konsultasi");
        setSelectedChildMenu("Cek Keuangan");
        break;
      case "account":
        setSelectedParentMenu("Login");
        break;
    }
  };

  const menuItem = (props: IMenuItem) => {
    const {
      item,
      index,
      isAgent,
      isSelected,
      isChildMenu,
      onMouseOver,
      onClick,
      onMouseLeave,
    } = props;

    const handleAgentIcon = (iconName) => {
      if (iconName.includes('whatsapp')) {
        return "lifepal__icon lifepal__icon--whatsapp--white";
      } else if (iconName.includes('profile')) {
        return "lifepal__icon lifepal__icon--profile--white"
      } else {
        return iconName;
      }
    }

    const handleUserIcon = (iconName) => {
      if (iconName.includes('whatsapp')) {
        return "lifepal__icon lifepal__icon--whatsapp";
      } else if (iconName.includes('login')) {
        return "lifepal__icon lifepal__icon--login"
      } else {
        return iconName;
      }
    }

    return (
      <li
        key={index}
        className={classNames(
          item.stylingClass,
          isSelected && isAgent ? "selected--agent" : isSelected ? "selected" : "",
        )}
        onMouseOver={onMouseOver}
        onClick={onClick}
        onMouseLeave={onMouseLeave}
      >
        {item.iconName && <i className={isAgent ? handleAgentIcon(item.iconName) : handleUserIcon(item.iconName)} />}
        {isLargeScaleDisplay && item.link !== "#" ? (
          NextLink ?
            <NextLink href={item.link}>
              <a
                className={classNames("child__anchor", item.title === "Dapatkan Penawaran" ? "color__blue" : "")}
                title={item.title}
              >
                {item.title}
              </a>
            </NextLink> :
            <a
              className={classNames("child__anchor", item.title === "Dapatkan Penawaran" ? "color__blue" : "")}
              href={(item.title === 'Bantuan' && isAuthenticated) ? '/bantuan/' : item.link}
              target={item.target || ""}
              rel="noopener noreferrer"
              title={item.title}
            >
              {item.title}
            </a>
        ) : (
          <span>{item.title}</span>
        )}
        {isChildMenu &&
          isSelected &&
          grandChildMenu.length > 0 &&
          hoveredChildMenu === item.title && (
            <ul
              className="child__items"
              onMouseLeave={() => setHoveredChildMenu("")}
            >
              {grandChildMenu.map((grandChild) =>
                <ListItem item={grandChild} NextLink={NextLink} />
              )}
            </ul>
          )}
      </li>
    );
  };

  const handleMenuItemClick = (row) => {
    switch (row.title) {
      case "Login":
        handleLogin();
      case "Keluar":
        handleLogout();
      default:
        return ""
    }
  }

  return (
    <nav className={classNames("navigation", type === "agent" && "is__agent")}>
      <div className="navigation__container">
        {!isLargeScaleDisplay && (
          <div
            className="navigation__mobile--burger"
            onClick={() => setOpenMobileSidebar(true)}
          >
            <i className={`lifepal__icon lifepal__icon--burger${type === 'agent' ? "--white" : ""}`} />
          </div>
        )}
        <div className="navigation__brand">
          <a href="/">
            {type === "user" ? (
              <img
                src={logoPath}
                alt="lifepal-user-logo"
                width="91px"
                height="31px"
              />
            ) : (
              <Avatar
                src={logoPath}
                alt="lifepal-agent-logo"
                maxWidth="100%"
                maxHeight="30px"
              />
            )}
          </a>
        </div>
        {
          !isLargeScaleDisplay && (
            <MobileProfileIcon
              isAuthenticated={isAuthenticated}
              isAgent={type === "agent"}
              initialName={initialName}
              handleLogin={handleLogin}
              handleLogout={handleLogout}
              NextLink={NextLink}
            />
          )
        }
        {isLargeScaleDisplay && (
          <div
            className="navigation__menu"
            onMouseLeave={() => {
              setHoveredParentMenu("");
              setSelectedParentMenu(selectedParentMenu);
            }}
          >
            <ul className="navigation__menu--parent">
              {navigationMenu.map((row, i) =>
                menuItem({
                  item: row,
                  index: i,
                  isAgent: type === "agent",
                  isSelected: [hoveredParentMenu, selectedParentMenu].includes(
                    row.title
                  ),
                  onMouseOver: () => setHoveredParentMenu(row.title),
                  onClick: () => handleMenuItemClick(row),
                })
              )}
            </ul>
            <ul className="navigation__menu--child">
              {childMenu.map((row, i) =>
                (row.title.toLowerCase() != 'faq') &&
                menuItem({
                  item: row,
                  index: i,
                  isAgent: type === "agent",
                  isSelected: [hoveredChildMenu, selectedChildMenu].includes(
                    row.title
                  ),
                  isChildMenu: true,
                  onMouseOver: () => setHoveredChildMenu(row.title),
                  onClick: () => handleMenuItemClick(row),
                  onMouseLeave: () => setHoveredChildMenu(""),
                })
              )}
            </ul>
          </div>
        )}
      </div>

      {!isLargeScaleDisplay && openMobileSidebar &&
        <MobileSidebar
          onCloseClick={() => setOpenMobileSidebar(false)}
          logoPath={logoPath}
          navigationMenu={navigationMenu}
          childMenu={childMenu}
          grandChildMenu={grandChildMenu}
          NextLink={NextLink}
        />}
    </nav>
  );
};
