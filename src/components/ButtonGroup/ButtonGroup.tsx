/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { MouseEvent, SFC } from 'react';
import classNames from 'classnames';

import './ButtonGroup.scss';

export interface IButtonGroupProps {
  uncompressed?: boolean // Make Buttons stick to each other
	children?: React.ReactNode,
	filled?: boolean,
};

export interface Item {
	props: object;
};

export const ButtonGroup: SFC<IButtonGroupProps> = ({
	children,
	uncompressed,
	filled,
}) => {
	const handleChange = (event: MouseEvent):void => {
		Array.from(document.getElementsByClassName('lp-button__group--item'))
			.forEach(element => {
				element.classList.remove('active');
			});;

		event.currentTarget.classList.add('active');
	}
	return (
		<div
			className={
				classNames('lp-button__group', [uncompressed && `lp-button__group--uncompressed`, !filled && `lp-button__group--filled`])
			}
		>
			{
				React.Children.map(children, (item: any) => {
					if (item) {
						const className = item.props.className;
						const props = { ...item.props, className: className, onClick: handleChange };
						return React.cloneElement(item, props, item.props.children);
					}
				})
			}
		</div>
	)
};
