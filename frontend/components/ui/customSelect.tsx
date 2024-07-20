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
				styles={{
					control: (provided, state) => ({
						...provided,
						padding: '8px 10px',
						backgroundColor: 'transparent',
						borderColor: state.isFocused ? '#3b82f6' : '#4b5563', // blue-600 or gray-600
						borderWidth: '2px',
						borderRadius: '8px',
						color: 'white',
						boxShadow: 'none',
						'&:hover': {
							borderColor: '#3b82f6', // blue-600
						},
					}),
					singleValue: (provided) => ({
						...provided,
						color: 'white',
					}),
					menu: (provided) => ({
						...provided,
						backgroundColor: '#1f2937', // gray-800
						borderRadius: '8px',
						zIndex: 9999,
					}),
					option: (provided, state) => ({
						...provided,
						backgroundColor: state.isFocused ? '#4b5563' : '#1f2937', // gray-600 or gray-800
						color: 'white',
						'&:hover': {
							backgroundColor: '#4b5563', // gray-600
						},
						zIndex: 9999,
					}),
					placeholder: (provided) => ({
						...provided,
						color: '#9ca3af', // gray-400
					}),
					indicatorSeparator: () => ({
						display: 'none',
					}),
					dropdownIndicator: (provided, state) => ({
						...provided,
						color: state.isFocused ? '#3b82f6' : '#4b5563', // blue-600 or gray-600
						'&:hover': {
							color: '#3b82f6', // blue-600
						},
					}),
					input: (provided, state) => ({
						...provided,
						color: 'white',
					}),
				}}
			/>

			<label
				htmlFor={id}
				className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
			>
				{label ? label : 'Necesita un label'}
			</label>
		</div>
	);
}
