'use client';
import { Pigeon } from '@/types/request';
import Pigeons from './pigeons';
import YearSelect from '@/components/ui/year-select';
import { useState } from 'react';
export interface CatchesProps {
	pigeons: Pigeon[];
	token: string;
	years: number[];
}

export default function Catches(props: CatchesProps) {
	const { pigeons, token, years } = props;
	const [year, setYear] = useState(years[years.length - 1]);
	console.log(pigeons);

	return (
		<>
			<div className="mb-4">
				<YearSelect years={years} onSetYear={setYear} />
			</div>

			{pigeons.length > 0 ? (
				<div className="grid gap-4">
					<Pigeons pigeons={pigeons} years={years} token={token} />
				</div>
			) : (
				<p>Todavia no tienes palomos en embreo</p>
			)}
		</>
	);
}
