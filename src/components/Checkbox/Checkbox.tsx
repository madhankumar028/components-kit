/* eslint-disable jsx-a11y/no-redundant-roles */
import React, {
	useState,
	ChangeEventHandler,
} from 'react';

import classNames from 'classnames';

import { Label } from '../Label';

import './Checkbox.scss';

interface CheckboxProps {
	checked?: boolean;
	labelName?: string;
	labelHidden: boolean;
	id?: string;
	disabled?: boolean;
	value?: string;
	onChange(event: ChangeEventHandler, value: string): any;
	onFocus?(): void;
	onBlur?(): void;
};

export const Checkbox = ({
	labelName,
	labelHidden,
	value,
	checked,
	disabled,
	id,
	onChange,
	onFocus,
	onBlur,
}: CheckboxProps) => {

	const [isChecked, setChecked] = useState(checked);

	const handleChange = (event: any) => {
		event.persist();
		setChecked(event.target.checked);
		onChange(event, event.target.value);
	}

	return (
		<div className={classNames("lp-checkbox__wrapper", [disabled && 'lp-disabled'])} tabIndex={1}>
			<input
				type="checkbox"
				className="lp-checkbox"
				id={id}
				checked={isChecked}
				disabled={disabled}
				onFocus={onFocus}
				onBlur={onBlur}
				value={value}
				onChange={handleChange}
				role="checkbox"
			/>
			{!labelHidden && <Label labelName={labelName} id={id} />}
		</div>
	)
};
