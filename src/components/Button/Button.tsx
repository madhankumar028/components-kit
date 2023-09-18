import React, { MouseEvent, SFC, HTMLAttributes } from 'react';
import classNames from 'classnames';

import Icon from '../Icon';
import Loader from '../Loader';

import './Button.scss';

type ButtonSize = 'small' | 'large' | 'medium';
type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost' | 'default';
type ButtonType = 'button' | 'submit' | 'reset';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	size?: ButtonSize;
	variant?: ButtonVariant;
	type?: ButtonType;
	disabled?: boolean;
	className?: string;
	onClick(e: MouseEvent<HTMLElement>): void;
	hasIcon?: boolean;
	isBlock?: boolean;
	isLoading?: boolean;
	loaderColor?: string;
};

const PlainButton: SFC<ButtonProps> = ({
	size,
	variant,
	type,
	onClick,
	disabled,
	className,
	hasIcon,
	isBlock,
	isLoading,
	children,
	loaderColor,
	...props
}) => (
	<button
		className={
			classNames(
				'heading-sm-r',
				[size && `lp-button-${size}`,
					variant && `lp-button-${variant}`,
					className && `${className}`,
					isBlock && `lp-button-block`,
					isLoading && 'lp-button-loading',
				]
			)
		}
		onClick={(event) => onClick(event)}
		disabled={(disabled || isLoading) ? true : false}
		{...props}
	>
		{children}
		{ isLoading ? <Loader loaderColor={loaderColor} size={size} spaceBtwText="30px" /> : <></> }
	</button>
)

export const Button: SFC<ButtonProps> = ({
	size,
	variant,
	type,
	onClick,
	disabled,
	className,
	hasIcon,
	children,
	...props
}) => {
	if (hasIcon) {
		return (
			<>
				<Icon
					variant={variant}
					tabIndex={1}
					onClick={(event) => onClick(event)}
					disabled={disabled}
				/>
			</>
		)
	}
  return (
		<>
			{ PlainButton({
					size,
					variant,
					type,
					onClick,
					disabled,
					className,
					hasIcon,
					children,
					...props
				})
			}
		</>
	)
};
