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
		<Card key={pigeon._id} className="grid grid-cols-2 items-center">
			<div className="flex flex-col gap-4 text-xs">
				<p>Anilla: {pigeon.ring}</p>
				<p>Nombre: {pigeon.name ? pigeon.name : pigeon.feather}</p>
				<p>Capturas: {pigeon.captures?.length}</p>
			</div>
			<AddCatchButton pigeonId={pigeon._id || ''} token={token} />
		</Card>
	));
}
