import React from 'react';

export const ListItem = (props) => {
  const { item, NextLink } = props;

  return (
    <li key={item.title}>
      {NextLink ?
        <NextLink href={item.link}>
          <a title={item.title}>
            {item.title}
          </a>
        </NextLink> :
        <a href={item.link} title={item.title}>
          {item.title}
        </a>
      }
    </li>
  );
};
