import React, { FormEvent, HTMLAttributes } from 'react';

import classNames from 'classnames';

import Loader from '../Loader';

import './Input.scss';

type InputType = 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search' | 'password';
type InputMode = 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
	id?: string;
	type: InputType;
	onChange(e: FormEvent<HTMLElement>): void;
	defaultValue?: string;
	inputMode: InputMode;
	placeholder: string;
	name: string;
	error?: string;
	className?: string;
	readonly?: boolean;
	maxLength?: number;
	minLength?: number;
	min?: number;
	pattern?: string;
	disabled?: boolean;
	size?: string;
	isLoading?: boolean;
	loaderColor?: string;
	isCurrency?: boolean;
	isRequired?: boolean;
	onBlur?(e: FormEvent<HTMLElement>): void;
	onFocus?(e: FormEvent<HTMLElement>): void;
	value?: string;
};

export const Input = (props: InputProps) => {
	const {
		id,
		type,
		onChange,
		error,
		inputMode,
		className,
		readonly,
		placeholder,
		name,
		maxLength,
		minLength,
		min,
		pattern,
		disabled,
		size,
		isLoading,
		loaderColor,
		isCurrency,
		defaultValue,
		isRequired,
		onBlur,
		onFocus,
		value,
	} = props;

	const [shouldShowPassword, setShowingPassword] = React.useState(false);

	const showPasswordHandler = () => setShowingPassword(!shouldShowPassword);

	const isNumericInput = (event) => {
		const key = event.keyCode || event.which;
		return (
			(key >= 48 && key <= 57) // Allow number line
			|| (key >= 96 && key <= 105) // Allow number pad
		);
	};

	const isModifierKey = (event) => {
		const key = event.keyCode || event.which;
		return (event.shiftKey === true || key === 35 || key === 36)  // Allow Shift, Home, End
			|| (key === 8 || key === 9 || key === 13 || key === 46) // Allow Backspace, Tab, Enter, Delete
			|| (key > 36 && key < 41) // Allow left, up, right, down
			|| (
				// Allow Ctrl/Command + A,C,V,X,Z
				(event.ctrlKey === true || event.metaKey === true)
				&& (key === 65 || key === 67 || key === 86 || key === 88 || key === 90)
			)
	};

	const enforceFormat = (event) => {
		// Input must be of a valid number format or a modifier key
		if (!isNumericInput(event) && !isModifierKey(event)) {
			event.preventDefault();
		}
	};

	const formatMobileNumber = (event) => {
		if (isModifierKey(event)) { return; }

		const target = event.target;
		const input = target.value.replace(/\D/g, '').substring(0, 12); // First twelve digits of input only
		const areaCode = input.substring(0, 3);
		const middle = input.substring(3, 7);
		const last = input.substring(7, 11);
		const optional = input.substring(11, 12);

		if (input.length > 11) {
			target.value = `${areaCode} ${middle} ${last} ${optional}`;
		} else if (input.length > 7) {
			target.value = `${areaCode} ${middle} ${last}`;
		} else if (input.length > 3) {
			target.value = `${areaCode} ${middle}`;
		}
	};

	return (
		<div className={
			classNames(
				'lp__input--group',
				className && className,
			)
		}>
			<div className={
				classNames(
					'lp__input--wrapper',
					size && size,
					(disabled || isLoading) && 'disabled',
					error && 'lp__input--error'
				)
			}>
				{
					(type === 'tel' || isCurrency) && (
						<span className="input__prefix">{isCurrency ? 'Rp' : '+62'}</span>
					)
				}
				<input
					id={id}
					className={
						classNames(
							'lp__input',
							size && `lp__input--${size}`,
						)
					}
					type={
						`${type === 'password' ? (`${shouldShowPassword ? 'text' : 'password'}`) : `${type}`}`
					}
					onChange={onChange}
					placeholder={placeholder}
					inputMode={inputMode}
					readOnly={readonly}
					name={name}
					min={min}
					minLength={minLength}
					maxLength={type === 'tel' ? 15 : maxLength}
					pattern={pattern}
					disabled={disabled}
					onKeyDown={(event) => {
						if (type !== 'tel' && type !== 'numeric') return;
						enforceFormat(event);
					}}
					onKeyUp={(event) => {
						if (type !== 'tel') return;
						formatMobileNumber(event);
					}}
					defaultValue={defaultValue}
					onBlur={onBlur}
					onFocus={onFocus}
					value={value}
				/>
				<span 
					className={classNames('lp__input--label', isRequired && 'lp__input--required')}
				>
					{placeholder}
				</span>
				{isLoading && (
					<span className="lp__input--suffix">
						<Loader loaderColor={loaderColor} spaceBtwText="30px" />
					</span>
				)
				}
				{
					(type === 'password' || shouldShowPassword) && (
						<span className="lp__input--suffix" onClick={showPasswordHandler}>
							<i className={`${shouldShowPassword ? 'ion-md-eye' : 'ion-md-eye-off'}`} />
						</span>
					)
				}
				{
					error && (
						<span className="lp__input--suffix">
							<i className="ion-md-alert" />
						</span>
					)
				}
			</div>
			{
				error && (
					<span className="lp__help">{error}</span>
				)
			}
		</div>
	)
};
