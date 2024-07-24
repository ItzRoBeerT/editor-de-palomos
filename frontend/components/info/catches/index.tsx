'use client';
import { useEffect, useState } from 'react';
import YearSelect from '@/components/ui/year-select';
import { Capture } from '@/types/request';
import { getCaptures } from '@/lib/pigeon';
import Captures from './captures';

export interface CatchesProps {
	token: string;
	years: number[];
	pigeonId: string;
}
export default function Catches(props: CatchesProps) {
	const { token, years, pigeonId } = props;
	const [captures, setCaptures] = useState<Capture[]>([]);
	const [year, setYear] = useState(years[years.length - 1]);

	useEffect(() => {
		getPigeonCaptures();
	}, [year]);

	async function getPigeonCaptures() {
		const { captures: newCaptures } = await getCaptures(token, pigeonId, year);
		setCaptures(newCaptures);
	}

	return (
		<div>
			<div className="mb-4">
				<YearSelect years={years} onSetYear={setYear} />
			</div>
			{captures.length > 0 ? (
				<Captures captures={captures} pigeonId={pigeonId} token={token} />
			) : (
				<p>Todavaía no has añadido capturas</p>
			)}
		</div>
	);
}
