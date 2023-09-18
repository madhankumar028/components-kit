import React from "react";
import FooterNavigation from "./FooterNavigation/FooterNavigation";
import { canUseWebp } from '../../utils/hooks/canUseWebp';
import './BottomNavigation.scss';

interface BottomNavigationProps {
  NextLink?: any,
  isLoggedIn: boolean,
  activePath: string; //just pass "/" or "/asuransi" without the basePath
  normalMenu: [
    {
      id: number,
      icon: 'explore' | 'insurance' | 'profile' | 'tools',
      text: string,
      gtmClassName?: string,
    }
  ]
  loginMenu: [{
    title: string,
    link: string,
    icon: 'home' | 'application' | 'policy' | 'help' | 'profile',
  }];
  accountProps: {
    title: string,
    subtitle: string,
    imgSrc: string,
  },
  insuranceLinks: [
    {
      id: string,
      link: string,
      text: string,
      gtmClassName?: string
    }
  ],
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
  },
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

export const BottomNavigation = (props: BottomNavigationProps) => {
  const { isLoggedIn, activePath, normalMenu, loginMenu, accountProps, insuranceLinks, toolsProps, exploreProps, NextLink } = props;

  const LoginNavigation = () => {
    return (
      <div className="loginNavigation">
        {loginMenu && loginMenu.map((menu) =>
          NextLink ?
            <NextLink href={menu.link}>
              <a title={menu.title} className={activePath === menu.link ? 'loginNavigation--buttonActive' : 'loginNavigation--button'}>
                <div className={`
            loginNavigation__icon${canUseWebp ? '--webp' : ""} 
            loginNavigation__icon${canUseWebp ? '--webp' : ""}--${menu.icon}${activePath === menu.link ? '--active' : ""}`}
                />
                <span>{menu.title}</span>
              </a>
            </NextLink> :
            <a href={menu.link} title={menu.title} className={activePath === menu.link ? 'loginNavigation--buttonActive' : 'loginNavigation--button'}>
              <div className={`
            loginNavigation__icon${canUseWebp ? '--webp' : ""} 
            loginNavigation__icon${canUseWebp ? '--webp' : ""}--${menu.icon}${activePath === menu.link ? '--active' : ""}`}
              />
              <span>{menu.title}</span>
            </a>
        )}
      </div>
    );
  }


  return (
    isLoggedIn ? <LoginNavigation /> :
      <FooterNavigation
        NextLink={NextLink}
        menuItems={normalMenu}
        accountProps={accountProps}
        insuranceLinks={insuranceLinks}
        toolsProps={toolsProps}
        exploreProps={exploreProps}
      />
  )
}
