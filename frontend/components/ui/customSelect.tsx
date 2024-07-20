import { SelectHTMLAttributes } from 'react';

export interface Select extends SelectHTMLAttributes<HTMLSelectElement> {
	options: JSX.Element[];
	defaultOption: string;
	label: string;
}

export default function CustomSelect(props: Select) {
	const { options, defaultOption, label, ...defaultProps } = props;

	return (
		<div className='relative'>
			<select
				{...defaultProps}
				className="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-2 appearance-none text-white border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"

			>
				<option value={''}>{defaultOption}</option>
				{options && options.length > 0 && options.map((option) => option)}
			</select>
			<label
				htmlFor={defaultProps.id}
				className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
			>
				{label ? label : 'Necesita un label'}
			</label>
		</div>
	);
}
