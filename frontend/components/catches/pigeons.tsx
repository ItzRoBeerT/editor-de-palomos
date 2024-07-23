'use client';
import Card from '@/components/containers/card';
import { Pigeon } from '@/types/request';
import AddCatchButton from './add-catch-button';

interface PigeonsProps {
	pigeons: Pigeon[];
	years: number[];
	token: string;
}
export default function Pigeons(props: PigeonsProps) {
	const { pigeons, years, token } = props;

	return pigeons.map((pigeon) => (
		<Card key={pigeon._id} className="grid grid-cols-3 items-center">
			<div>
				<p>Anilla: {pigeon.ring}</p>
			</div>
			<p>Capturas: {pigeon.captures?.length}</p>
			<AddCatchButton pigeonId={pigeon._id || ''} token={token} />
		</Card>
	));
}
