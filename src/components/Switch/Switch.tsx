import React, { useState } from 'react';

import './Switch.scss';

interface ISwitchProps {
	id?: string,
	showText: boolean,
	textPair: {
		on: String,
		off: String,
	},
	emitSwitchStatus: Function,
	defaultStatus: boolean,
};

export const Switch = ({
	id,
	showText,
	textPair,
	emitSwitchStatus,
	defaultStatus,
}: ISwitchProps) => {

	const [switchStatus, setSwitchStatus] = useState(defaultStatus || false);

	return (
		<div className="switch__wrapper">
			<div className={`switch ${switchStatus ? 'switch-on' : 'switch-off'}`}>
				<input
					id={id}
					type="checkbox"
					checked={switchStatus}
					onChange={(event) => {
						event.persist();
						setSwitchStatus(event.target.checked);
						emitSwitchStatus(event.target.checked);
					}}
				/>
				<label htmlFor="switch__checkbox" className="switch__label">  
					<span className="switch__circle"></span>
				</label>
			</div>
			{
				showText
					&& (
						<span className="switch__text heading-sm-r">
							{ switchStatus ? `${textPair.on}` : `${textPair.off}` }
						</span>
					)
			}
		</div>
	)
};
