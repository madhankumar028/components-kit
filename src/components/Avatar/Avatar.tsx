import React, { HTMLAttributes, SFC, MouseEvent } from 'react';

type ImageLoader = 'eager' | 'lazy';
interface AvatarProps extends HTMLAttributes<HTMLImageElement> {
	src: string;
	height?: string;
	maxHeight?: string;
	width?: string;
	maxWidth?: string;
	left?: string;
	right?: string;
	alt: string;
	className?: string;
	onClick?(e: MouseEvent<HTMLElement>): void;
	loading?: ImageLoader;
	size?: string;
	isCircle?: boolean;
};

export const Avatar: SFC<AvatarProps> = ({
	src,
	height,
	maxHeight,
	width,
	maxWidth,
	left,
	right,
	alt,
	className,
	onClick,
	loading,
	size,
	isCircle,
}) => (
	<img
		src={src}
		className={className ? `${className} avatar` : 'avatar'}
		alt={alt || 'avatar'}
		loading={loading || 'lazy'}
		style={{
			display: 'inline-flex',
			...(maxHeight ? { maxHeight } : { height: height || size || '30px' }),
			...(maxWidth ? { maxWidth } : { width: width || size || '30px' }),
			...(left && { left }),
			...(right && { right }),
			...(isCircle && { borderRadius: '50%' }),
		}}
		onClick={onClick}
	/>
);
