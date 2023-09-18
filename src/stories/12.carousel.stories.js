import React from "react";

import { text, select, withKnobs, boolean } from "@storybook/addon-knobs";

import { Carousel, CarouselSlide } from "../components/Carousel";
import { Avatar } from '../components/Avatar';

export default {
  title: "Carousel",
  decorators: [withKnobs],
};

const slides = (items) => {
  return items.map((item) => (
    <CarouselSlide
      index={item.id}
      key={item.id}
      className="Carousel--card customer__review--card"
    >
      <a
        className="product__slides-wrapper"
        href={item.url ? item.url : '#'}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          flexDirection: 'column',
          marginTop: '12px'
        }}
      >
        <Avatar
          className="image__container"
          src={`https://lifepal.co.id${item.imgUrl}`}
          height={item.scale ? '50px' : '30px'}
          width="150px"
          loading="lazy"
          alt="insurance__brands"
        />
      </a>
    </CarouselSlide>
  ));
};

const items = [
  {
    imgUrl: "/static/images/brands/manulife.svg",
    id: 2,
    className: 'manulife',
    alt: "manulife",
    title: "Manulife",
    star: "4.4",
    url: "/asuransi/manulife/"
  },
  {
    imgUrl: '/static/images/brands/axamandiri.svg',
    id: 23,
    alt: 'axamandiri',
    title: 'Axamandiri',
    star: '4.8',
    url: '/asuransi/axa-mandiri/',
  },
  {
    imgUrl: "/static/images/brands/bnilife.svg",
    id: 3,
    alt: 'bnilife',
    title: 'BNI Life',
    star: '4.3',
    url: '/asuransi/bni-life/',
  },
  {
    imgUrl: '/static/images/brands/jasindo.svg',
    id: 4,
    alt: 'jasindo',
    title: 'Jasindo',
    star: '4.5',
    url: '/asuransi/jasindo/',
  },
  {
    imgUrl: '/static/images/brands/mandiriinhealth.svg',
    id: 5,
    alt: 'mandiriinhealth',
    title: 'Mandiri Inhealth',
    star: '4.6',
    url: '/asuransi/mandiri-inhealth/',
  },
  // {
  //   imgUrl: '/static/images/brands/sinarmasmsiglife.png',
  //   id: 6,
  //   alt: 'sinarmasmsiglife',
  //   title: 'Sinarmas Msig Life',
  //   star: '4.5',
  //   url: '/asuransi/sinarmas-msig-life/',
  // },
  {
    imgUrl: '/static/images/brands/car.svg',
    id: 7,
    alt: 'centralasiaraya',
    title: 'CAR',
    star: '4.4',
    url: '/asuransi/car-life/',
  },
  {
    imgUrl: "/static/images/brands/prudential.svg",
    id: 1,
    alt: 'prudential',
    title: 'Prudential',
    star: '4.6',
    url: '/asuransi/prudential/',
  },
  {
    imgUrl: '/static/images/brands/brilife.svg',
    id: 8,
    alt: 'brilife',
    title: 'BRI Life',
    star: '4.0',
    url: '/asuransi/bri-life/',
  },
  {
    imgUrl: '/static/images/brands/cigna.svg',
    id: 9,
    alt: 'cigna',
    title: 'Cigna',
    star: '4.2',
    scale: '1',
    url: '/asuransi/cigna/',
  },
  {
    imgUrl: '/static/images/brands/sequislife.svg',
    id: 10,
    alt: 'sequislife',
    title: 'Sequis Life',
    star: '4.8',
    url: '/asuransi/sequis-financial/',
  },
  {
    imgUrl: '/static/images/brands/aca.svg',
    id: 12,
    alt: 'aca',
    title: 'ACA',
    star: '4.2',
    url: '/asuransi/aca/',
  },
  {
    imgUrl: '/static/images/brands/takaful.svg',
    id: 13,
    alt: 'takaful',
    title: 'Takaful',
    star: '4.3',
    url: '/asuransi/takaful-keluarga/',
    scale: '1.5',
  },
  {
    imgUrl: '/static/images/brands/aia.svg',
    id: 15,
    alt: 'aia',
    title: 'AIA',
    star: '4.5',
    url: '/asuransi/aia/',
  },
  {
    imgUrl: '/static/images/brands/adira.svg',
    id: 16,
    alt: 'adiradinamika',
    title: 'Adira Dinamika',
    star: '4.3',
    url: '/asuransi/adira/',
  },
  {
    imgUrl: '/static/images/brands/lippoinsurance.svg',
    id: 17,
    alt: 'lippolife',
    title: 'Lippo Insurance',
    star: '4.0',
    url: '/asuransi/lippo-life/',
  },
  {
    imgUrl: '/static/images/brands/ciputralife.svg',
    id: 18,
    alt: 'ciputralife',
    title: 'Ciputra',
    star: '4.5',
    url: '/asuransi/ciputra-life/',
  },
  {
    imgUrl: '/static/images/brands/simasjiwa.svg',
    id: 19,
    alt: 'simasjiwa',
    title: 'Simas Jiwa',
    star: '4.6',
    url: '/asuransi/simas-jiwa/',
  },
  {
    imgUrl: '/static/images/brands/equitylife.svg',
    id: 20,
    alt: 'equitylife',
    title: 'Equity Life',
    star: '4.0',
    url: '/asuransi/equity-life/',
  },
  {
    imgUrl: '/static/images/brands/pacific_9060.svg',
    id: 21,
    alt: 'pacific',
    title: 'Pacific',
    star: '4.0',
    url: '/asuransi/pacific-life/',
  },
];

export const carousel = () => {
  const title = text("Title", "Carousel Title");
  const titlePosition = select(
    "Title Position",
    {
      Left: "left",
      Center: "center",
      Right: "right",
    },
    "center"
  );

  const isPlaying = boolean("isPlaying", true);
  const infinite = boolean("infinite", true);
  const dotGroup = boolean("dotGroup", true);
  const centerMode = boolean("centerMode", true);
  const defaultVisibleSlide = select(
    "Visible Slides",
    {
      1: 1,
      2: 2,
      3: 3,
      4: 4,
    },
    6
  );
  const showArrow = boolean('showArrow', false);

  return (
    <Carousel
      title={title}
      titleH2="Hey Jude"
      titlePosition={titlePosition}
      items={items}
      slides={slides}
      isPlaying={isPlaying}
      infinite={infinite}
      dotGroup={dotGroup}
      defaultVisibleSlide={defaultVisibleSlide}
      className="storiesCarousel"
      centerMode={centerMode}
      showArrow={showArrow}
      dotGroupClassName="dotGroupClass"
    />
  );
};
