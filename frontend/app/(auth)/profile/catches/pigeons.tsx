'use client';

import Card from '@/components/containers/card';
import { Pigeon } from '@/types/request';

interface PigeonsProps {
	pigeons: Pigeon[];
}
export default function Pigeons(props: PigeonsProps) {
	const { pigeons } = props;

	console.log({ pigeons });

	return pigeons.map((pigeon) => (
		<Card>
			<p>{pigeon.name ? pigeon.name : pigeon.ring} </p>
		</Card>
	));
}
