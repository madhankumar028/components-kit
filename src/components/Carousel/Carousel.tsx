import React, { ReactElement, useState, useEffect } from 'react';

import classNames from 'classnames';
import {
  CarouselProvider,
  Slider,
  DotGroup,
  ButtonBack,
  ButtonNext,
  Slide,
} from 'pure-react-carousel';

import { useMediaQuery } from "../../utils/hooks/useMediaQuery";
import { BREAK_POINTS } from "../../utils/breakpoint";

import './Carousel.scss';
import 'pure-react-carousel/dist/react-carousel.es.css';

type Item = {
  id: number;
  name: string;
  review: string;
};
interface ICarousel {
  title: string;
  titleH2?: string;
  items: Item[];
  slides: (items: Item[]) => ReactElement;
  dotGroup: boolean;
  isPlaying?: boolean;
  infinite?: boolean;
  defaultVisibleSlide?: number;
  titlePosition?: 'center' | 'left' | 'right';
  currentSlide?: number;
  className: string;
  interval?: number;
  naturalSlideHeight?: number;
  naturalSlideWidth?: number;
  step?: number;
  centerMode?: boolean;
  showArrow?: boolean;
  changeSlide?: (currentSlide: number) => void;
  dotGroupClassName?: string;
  trayTag?: string;
}

export const Carousel: React.FunctionComponent<ICarousel> = (props) => {
  const [visibleSlides, setVisibleSlides] = useState(4);

  const isDesktop = useMediaQuery(BREAK_POINTS.desktop);
  const isTablet = useMediaQuery(BREAK_POINTS.tablet);

  // when user resizes the window it's equivalent effect on visible slides
  useEffect(() => {
    if (isDesktop) {
      setVisibleSlides(props.defaultVisibleSlide);
    } else if (isTablet) {
      setVisibleSlides(2);
    } else {
      setVisibleSlides(0.8);
    }
  }, [isTablet, isDesktop]);

  const classSliderCenterMode = props.centerMode ? 'center-mode' : '';

  useEffect(() => {
    if (props.defaultVisibleSlide) {
      setVisibleSlides(props.defaultVisibleSlide);
    }
  }, [props.defaultVisibleSlide]);

  return (
    <div className={`lp__carousel ${props.className}`}>
      {
        props.titleH2 ? (
          <h2 style={{ textAlign: props.titlePosition || 'left' }}>
            {props.titleH2}
          </h2>
        ) :
          props.title && (
            <h4 style={{ textAlign: props.titlePosition || 'left' }}>
              {props.title}
            </h4>
          )}
      <CarouselProvider
        totalSlides={props.items.length}
        visibleSlides={visibleSlides}
        interval={props.interval || 5000}
        isPlaying={props.isPlaying}
        infinite={props.infinite || true}
        isIntrinsicHeight
        currentSlide={props.currentSlide}
        naturalSlideHeight={props.naturalSlideHeight || 200}
        naturalSlideWidth={props.naturalSlideWidth || 150}
        step={props.step || 1}
      >
        <Slider
          className={classSliderCenterMode}
          trayTag={props.trayTag || "ul"}
        >
          {props.slides(props.items)}
        </Slider>

        {props.dotGroup &&
          props.items.length > (props.defaultVisibleSlide || 4) && (
            <DotGroup
              className={props.dotGroupClassName}
              renderDots={(value: any) => {
                const { carouselStore } = value;
                const { currentSlide } = carouselStore.getStoreState();

                return [
                  ...new Array(
                    Math.round(props.items.length - props.defaultVisibleSlide) +
                    1
                  ),
                ].map((_, i) => (
                  <div
                    key={i}
                    className={classNames(
                      'carousel__dot carousel__single-dot',
                      currentSlide === i && 'selected'
                    )}
                    onClick={() =>
                      carouselStore.setStoreState({ currentSlide: i })
                    }
                  />
                ));
              }}
            />
          )}

        {props.showArrow && (
          <>
            <ButtonBack
              className="button__back"
              {...(props.changeSlide
                ? { onClick: () => props.changeSlide(props.currentSlide - 1) }
                : {})}
            >
              <i className="icon ion-ios-arrow-back" />
            </ButtonBack>
            <ButtonNext
              className="button__next"
              {...(props.changeSlide
                ? { onClick: () => props.changeSlide(props.currentSlide + 1) }
                : {})}
            >
              <i className="icon ion-ios-arrow-forward" />
            </ButtonNext>
          </>
        )}
      </CarouselProvider>
    </div>
  );
};

export const CarouselSlide: React.FunctionComponent<{
  index: number;
  key: any;
  className: string;
  tag?: string;
  children: ReactElement;
}> = (props) => {
  return (
    <Slide
      index={props.index}
      className={props.className}
      tag={props.tag || "li"}
    >
      {props.children}
    </Slide>
  );
};
