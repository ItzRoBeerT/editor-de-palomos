'use client';
export interface YearSelect {
	years: number[];
	onSetYear: (e: any) => void;
}

export default function YearSelect(props: YearSelect) {
	const { years, onSetYear } = props;

	function onChangeYear(e: any) {
		const value = e.target.value;
		onSetYear(value);
	}
	return (
		<div>
			<select
				onChange={onChangeYear}
				className=" border text-white text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400  focus:ring-blue-500 focus:border-blue-500"
			>
				{years.map((year) => (
					<option key={year} value={year}>
						{year}
					</option>
				))}
			</select>
		</div>
	);
}
