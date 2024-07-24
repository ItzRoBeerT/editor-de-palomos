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
		const { captures } = await getCaptures(token, pigeonId, year);
		setCaptures(captures);
	}

	return (
		<div>
			<YearSelect years={years} onSetYear={setYear} />
			<Captures captures={captures} />
		</div>
	);
}
