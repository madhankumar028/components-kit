import React from "react";
import { withKnobs, boolean } from "@storybook/addon-knobs";

import { BottomNavigation } from '../components/BottomNavigation';
import accountMenuImg from '../assets/footer_account.webp';

export default {
  title: "Bottom Navigation",
  decorators: [withKnobs],
};

export const bottomNavigation = (props) => {

  const normalMenu = [
    {
      id: 1,
      icon: 'explore',
      text: 'Explore',
      gtmClassName: 'gtm__exploreclick',
    },
    {
      id: 2,
      icon: 'tools',
      text: 'Tools',
      gtmClassName: 'gtm__footertools',
    },
    {
      id: 3,
      icon: 'insurance',
      text: 'Asuransi',
      gtmClassName: '',
    },
    {
      id: 4,
      icon: 'profile',
      text: 'My Lifepal',
      gtmClassName: '',
    },
  ];

  const loginMenu = [
    {
      title: "Home",
      link: "/",
      icon: "home"
    },
    {
      title: "Pengajuan",
      link: "/account/applications/",
      icon: "application"
    },
    {
      title: "Polis Saya",
      link: "/account/policy/",
      icon: "policy"
    },
    {
      title: "Bantuan",
      link: "/bantuan/",
      icon: "help"
    },
    {
      title: "My Lifepal",
      link: "/profile/",
      icon: "profile"
    }
  ]

  const accountProps = {
    title: "Buat Akun untuk Konsultasi Asuransi Gratis Sekarang!",
    subtitle: "Dapatkan juga tips keuangan, investasi, dan informasi promo terbaru setiap minggunya",
    imgSrc: accountMenuImg
  }

  const insuranceLinks = [
    {
      id: 'health',
      link: `/promo/kesehatan/`,
      text: 'Asuransi Kesehatan',
      gtmClassName: 'gtm__health'
    },
    {
      id: 'auto',
      link: `/promo/mobil/`,
      text: 'Asuransi Mobil',
      gtmClassName: 'gtm__auto'
    },
    {
      id: 'life',
      link: `/promo/jiwa/`,
      text: 'Asuransi Jiwa',
    },
  ]

  const toolsProps = {
    title: 'Kalkulator Keuangan',
    subtitle: 'Gunakan kalkulator kami untuk membantu menyelesaikan beragam kebutuhan perencanaan keuanganmu. Hitung dan simulasikan berbagai skenario sesuai kondisi pribadi dan keuanganmu',
    calculatorArticles: [
      {
        title: 'Kalkulator A',
        slug: '/media/kalkulator-angsuran-kredit-mobil/',
      },
      {
        title: 'Kalkulator B',
        slug: '/media/rasio-keuangan-2',
      }
    ],
  }

  const exploreProps = {
    category: {
      name: 'Layanan Asuransi',
      description: 'Tips and trik ttg asuransi'
    },
    relatedPosts: [
      {
        title: 'Tarik tunai',
        slug: '/media/tarik-tunai-linkaja/',
      },
      {
        title: 'RTGS',
        slug: '/media/rtgs-real-time-gross-settlement/',
      }
    ]
  }

  const label = 'User has logged in?';
  const defaultValue = false;
  
  const isLoggedIn = boolean(label, defaultValue);


  return (
    <div>
      <h3>The footer navigation is only for mobile view</h3>
      <h3>If user hasn't logged in it will pop from bottom</h3>
      <h3>Try using knobs to see the isLoggedIn and functionality</h3>
      <BottomNavigation
        activePath="/"
        isLoggedIn={isLoggedIn}
        normalMenu={normalMenu} //menu when user isn't logged in
        loginMenu={loginMenu}
        accountProps={accountProps} //props for Account section in normal menu
        insuranceLinks={insuranceLinks}
        toolsProps={toolsProps}
        exploreProps={exploreProps}
      />
    </div>
  );
}
