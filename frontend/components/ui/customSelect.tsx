'use client';

import { useState } from 'react';
import Select from 'react-select';

export interface CustomSelectProps {
	options: any;
	defaultOption?: string;
	label: string;
	name: string;
	id?: string;
	placeHolder: string;
	required?: boolean;
	defaultValue?: string;
}

export default function CustomSelect(props: CustomSelectProps) {
	const { options, defaultOption, name, id, required, label, placeHolder, defaultValue } = props;
	const [selectedOption, setSelectedOption] = useState(null) as any;

	let defaultVal = '';
	if (defaultValue) {
		const index = options.findIndex(
			(option: { value: string }) => option.value === defaultValue
		);
		defaultVal = options[index];
	}
	return (
		<div className="relative">
			<Select
				defaultValue={defaultVal}
				isClearable
				placeholder={placeHolder}
				name={name}
				id={id}
				required={required}
				onChange={setSelectedOption}
				options={options}
			/>
		</div>
	);
}
