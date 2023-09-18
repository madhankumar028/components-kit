import React, { SFC } from 'react';
import classNames from 'classnames';

type groupAlignment = 'vertical' | 'horizontal';

interface RadioGroupProps {
	id?: string;
	groupAlignment: groupAlignment;
	children: React.ReactNode;
}

export const RadioGroup: SFC<RadioGroupProps> = (props) => {
	const { id, groupAlignment, children } = props;

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => event;

	return (
		<div
			id={id}
			className={
				classNames(
					'd-flex',
					[groupAlignment === 'horizontal' ? 'flex-direction-horizontal' : 'flex-direction-vertical']
				)
			}
		>
			{
				React.Children.map(children, (item: any) => {
					if (item) {
						const className = item.props.className;
						const props = { ...item.props, className: className, onChange: handleChange };
						return React.cloneElement(item, props, item.props.children);
					}
				})
			}
		</div>
	)
};
