import React from 'react';

import './Label.scss';

interface LabelProps {
	labelName?: string;
	id?: string;
};

export const Label = ({ labelName, id }: LabelProps) => (
	<label className="lp-label heading-sm-r" htmlFor={id}>{labelName}</label>
);
