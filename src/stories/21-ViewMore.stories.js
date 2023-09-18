import React from 'react';
import { ViewMore } from '../components/ViewMore';

export default {
  title: 'View More',
};

const menu = [
  {
    id: 3,
    title: 'Asuransi',
    spriteSelector: '--insurance',
  },
  {
    id: 2,
    title: 'Tools',
    spriteSelector: '--tools',
  },
  {
    id: 1,
    title: 'Explore',
    spriteSelector: '--explore',
  },
];

const insuranceLinks = [
  {
    id: 'health',
    link: `/promo/kesehatan/`,
    text: 'Asuransi Kesehatan',
  },
  {
    id: 'auto',
    link: `/promo/mobil/`,
    text: 'Asuransi Mobil',
  },
  {
    id: 'life',
    link: `/promo/jiwa/`,
    text: 'Asuransi Jiwa',
  },
];

const toolsProps = {
  title: 'Kalkulator Keuangan',
  subtitle:
    'Gunakan kalkulator kami untuk membantu menyelesaikan beragam kebutuhan perencanaan keuanganmu. Hitung dan simulasikan berbagai skenario sesuai kondisi pribadi dan keuanganmu',
  calculatorArticles: [
    {
      title: 'Kalkulator A',
      slug: '/media/kalkulator-angsuran-kredit-mobil/',
    },
    {
      title: 'Kalkulator B',
      slug: '/media/rasio-keuangan-2',
    },
  ],
};

const exploreProps = {
  category: {
    name: 'Layanan Asuransi',
    description: 'Tips and trik ttg asuransi',
  },
  relatedPosts: [
    {
      title: 'Tarik tunai',
      slug: '/media/tarik-tunai-linkaja/',
    },
    {
      title: 'RTGS',
      slug: '/media/rtgs-real-time-gross-settlement/',
    },
  ],
};

export const viewMore = () => {
  return (
    <div>
      <h3>The View More Button</h3>

      <ViewMore
        menu={menu}
        insuranceLinks={insuranceLinks}
        toolsProps={toolsProps}
        exploreProps={exploreProps}
      />
    </div>
  );
};
