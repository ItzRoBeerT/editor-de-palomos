import { SelectHTMLAttributes } from 'react';

export interface Select extends SelectHTMLAttributes<HTMLSelectElement> {
	options: JSX.Element[];
	defaultOption: string;
}

export default function CustomSelect(props: Select) {
	const { options, defaultOption, ...defaultProps } = props;

	return (
		<select
			{...defaultProps}
			className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
		>
			<option value={''}>{defaultOption}</option>
			{options && options.length > 0 && options.map((option) => option)}
		</select>
	);
}
