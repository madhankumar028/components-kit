import React, { ChangeEventHandler } from 'react';
import classNames from 'classnames';

import './Radio.scss';

interface RadioProps {
	labelName?: string;
	className?: string;
	value?: any;
	name: string;
	isChecked?: boolean;
	isDisabled?: boolean;
	id: any;
	hideLabel?: boolean;
	handleOnChange(event: ChangeEventHandler, name: string, value: string): void;
};

export const Radio = (props: RadioProps) => {
	const {
		id,
		labelName,
		className,
		value,
		isChecked,
		handleOnChange,
		name,
		isDisabled,
		hideLabel,
	} = props;

	const handleChange = (event: any) => {
		event.persist();
		handleOnChange(event, name, event.target.value);
	};

	return (
		<div className="lp-radio__wrapper">
			<label>
				<input
					id={id}
					className={classNames('lp__radio', className)}
					type="radio"
					checked={isChecked}
					onChange={handleChange}
					name={name}
					disabled={isDisabled}
					value={value}
				/>
				{
					!hideLabel && labelName
				}
			</label>
		</div>
	)
};
