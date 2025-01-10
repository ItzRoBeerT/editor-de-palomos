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
		<div className="flex gap-4 items-center">
			Año:
			<select
				onChange={onChangeYear}
				className="w-fit borde text-sm rounded-lg block p-2 bg-slate-200 "
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
