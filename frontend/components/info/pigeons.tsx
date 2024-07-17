'use client';
import Card from '../containers/card';
import { useState } from 'react';
import { Pigeon } from '@/types/request';
import SearchInput from '../ui/searchInput';

export interface Props {
	token: string;
	pigeons?: Pigeon[];
}

export default function PigeonsDisplay(props: Props) {
	const { token, pigeons: pigeonList = [] } = props;

	const [pigeons, setPigeons] = useState(pigeonList);

	return (
		<>
			<SearchInput token={token} updatePigeons={setPigeons} />

			{pigeons.length > 0 ? (
				pigeons.map((pigeon) => (
					<Card key={pigeon.ring} href={`pigeons/${pigeon.ring}`}>
						{pigeon.name ? (
							<p>Nombre: {pigeon.name}</p>
						) : (
							<p>Pluma: {pigeon.feather}</p>
						)}
						<p>Anilla: {pigeon.ring}</p>
					</Card>
				))
			) : (
				<p>Todavia no tienes palomos agregados</p>
			)}
		</>
	);
}
