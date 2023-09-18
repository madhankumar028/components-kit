import React from 'react';
import classNames from 'classnames';
import './Explore.scss';

interface ExploreProps {
  NextLink?: any,
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
  onBtnClick: Function;
}

export const Explore = (props: ExploreProps) => {
  const { category, relatedPosts, onBtnClick, NextLink, gtmClassName } = props;

  return (
    <div className="explore">
      <div className="explore__title">{category.name}</div>
      <div className="explore__description">{category.description}</div>
      <div className="explore__lists">
        {relatedPosts.map((post) =>
        NextLink ?
        <NextLink href={post.slug}>
          <a
            className={classNames("explore__link", gtmClassName ? gtmClassName : "")}
            title={post.title}
            onClick={() => onBtnClick()}
          >
            {post.title}
          </a>
        </NextLink> :
          <a
            className={classNames("explore__link", gtmClassName ? gtmClassName : "")}
            href={post.slug}
            title={post.title}
            onClick={() => onBtnClick()}
          >
            {post.title}
          </a>
        )}
      </div>
    </div>
  );
};
