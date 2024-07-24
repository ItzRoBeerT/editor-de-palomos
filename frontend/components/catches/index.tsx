'use client';
import { Pigeon } from '@/types/request';
import Pigeons from './pigeons';
import YearSelect from '@/components/ui/year-select';
import { useEffect, useState } from 'react';
import GenderSelect from './gender-select';
import { getCatchingPigeons } from '@/lib/pigeon';

export interface CatchesProps {
	token: string;
	years: number[];
}

export default function Catches(props: CatchesProps) {
	const { token, years } = props;
	const [pigeons, setPigeons] = useState<Pigeon[]>([]);
	const [year, setYear] = useState(years[years.length - 1]);
	const [gender, setGender] = useState<'male' | 'female'>('male');

	useEffect(() => {
		getPigeons();
	}, [year, gender]);

	async function getPigeons() {
		const data = await getCatchingPigeons(token, gender);
		setPigeons(data.pigeons);
	}

	return (
		<>
			<div className="flex gap-4 items-center mb-4">
				<YearSelect years={years} onSetYear={setYear} />
				<GenderSelect gender={gender} onGenderChange={setGender} />
			</div>

			{pigeons.length > 0 ? (
				<div className="grid gap-4">
					<Pigeons pigeons={pigeons} years={years} token={token} />
				</div>
			) : (
				<p>Todavia no tienes palomos en hembreo</p>
			)}
		</>
	);
}
