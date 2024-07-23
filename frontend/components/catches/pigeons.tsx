'use client';
import Card from '@/components/containers/card';
import { Pigeon } from '@/types/request';

interface PigeonsProps {
	pigeons: Pigeon[];
	years: number[];
}
export default function Pigeons(props: PigeonsProps) {
	const { pigeons, years } = props;

	return pigeons.map((pigeon) => (
		<Card key={pigeon._id}>
			<p>{pigeon.name ? pigeon.name : pigeon.ring} </p>
		</Card>
	));
}