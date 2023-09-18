import React from 'react';
import './Tools.scss';
import classNames from 'classnames';

interface ToolsProps {
  NextLink?: any,
  title: string,
  subtitle: string,
  gtmClassName?: string,
  calculatorArticles: [
    {
      title: string,
      slug: string,
    }
  ],
  onBtnClick: Function
}

export const Tools = (props: ToolsProps) => {
  const { title, subtitle, calculatorArticles, onBtnClick, NextLink, gtmClassName } = props;

  return (
    <div className="tools">
      <div className="tools__title">{title}</div>
      <div className="tools__subtitle">
        {subtitle}
      </div>

      {calculatorArticles && (
        <div className="tools__list">
          {calculatorArticles.map((article) =>
            NextLink ?
              <NextLink href={article.slug} >
                <a
                  className={classNames("tools__link", gtmClassName ? gtmClassName : "")}
                  key={article.title}
                  title={article.title}

                  onClick={() => onBtnClick()}
                >
                  {article.title}
                </a>
              </NextLink> :
              <a
                className={classNames("tools__link", gtmClassName ? gtmClassName : "")}
                key={article.title}
                title={article.title}
                href={article.slug}
                onClick={() => onBtnClick()}
              >
                {article.title}
              </a>
          )}
        </div>
      )}
    </div>
  );
};
