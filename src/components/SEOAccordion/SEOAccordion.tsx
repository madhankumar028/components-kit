import React from 'react';
import classNames from 'classnames';
import './SEOAccordion.scss';

interface ISEOAccordion {
  isMultipleOpen?: boolean;
  accordionList: Array<ISEOAccordionItem>;
  hasBorder: boolean;
  arrowPosition: "left" | "right"
};

interface ISEOAccordionItem {
  id: string;
  title: string;
  body: Function;
  hasFaqSchema?: boolean,
  isH3?: boolean,
}

export const SEOAccordion = (props: ISEOAccordion) => {
  const { isMultipleOpen,
    accordionList,
    hasBorder,
    arrowPosition
  } = props;

  return (
    <div className="seo__accordion">
      {
        accordionList.map(({ id, title, body, hasFaqSchema, isH3 }, index) => {
          const randomID = Math.random() * 100;
          return (
            <div
              className={classNames("seo__accordion--item", hasBorder && "seo__accordion--item__border")}
              key={id}
              itemScope={hasFaqSchema}
              itemProp={hasFaqSchema ? 'mainEntity' : ''}
              itemType={hasFaqSchema ? 'https://schema.org/Question' : ''}
            >
              <input type={isMultipleOpen ? "checkbox" : "radio"} id={`accordion__${id}_${index}_${randomID}`} name="accordion__group" />
              <label htmlFor={`accordion__${id}_${index}_${randomID}`}
                className={classNames("seo__accordion--item--label", arrowPosition === "left" ? "arrow--left" : "arrow--right")} >
                {isH3 ? <h3> {title}</h3> : title}
              </label>
              <div className="seo__accordion--item--body"
                itemScope={hasFaqSchema}
                itemProp={hasFaqSchema ? 'acceptedAnswer' : ''}
                itemType={hasFaqSchema ? 'https://schema.org/Answer' : ''}
              >
                {body()}
              </div>
            </div>
          )
        })
      }
    </div>
  )
};
