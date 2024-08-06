'use client';
import Card from '../containers/card';
import { useState } from 'react';
import { Pigeon } from '@/types/request';
import SearchInput from '../ui/searchInput';
import Pill from '../ui/pill';

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
					<Card key={pigeon._id} href={`pigeons/${pigeon._id}`}>
						<div className='flex justify-between items-center'>
							<div>
								{pigeon.name ? (
									<p>Nombre: {pigeon.name}</p>
								) : (
									<p>Pluma: {pigeon.feather}</p>
								)}
								<p>Anilla: {pigeon.ring}</p>
							</div>
							{pigeon?.isCatching && <Pill text="Hembreo" />}
						</div>
					</Card>
				))
			) : (
				<p>Todavia no tienes palomos agregados</p>
			)}
		</>
	);
}
