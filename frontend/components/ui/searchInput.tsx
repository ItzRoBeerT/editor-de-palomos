'use client';
import { searchPigeon } from '@/lib/pigeon';
import { Pigeon } from '@/types/request';
import Image from 'next/image';

export interface Props {
	token: string;
	updatePigeons: (e: Pigeon[]) => void;
}

export default function SearchInput(props: Props) {
	const { token, updatePigeons } = props;
	let timeout: any = null;

	async function onHandleChange(e: any) {
		const searchValue = e.target.value;

		if (timeout) {
			clearTimeout(timeout);
		}

		timeout = setTimeout(async () => {
			const filteredPigeons = await searchPigeon(token, searchValue);
			updatePigeons(filteredPigeons);
		}, 1000);
	}

	return (
		<div className="relative w-full">
			<input
				onChange={onHandleChange}
				type="text"
				id="search-pigeon"
				placeholder="Buscar por nombre, anilla..."
				className="block rounded-lg p-2.5 w-full z-20 text-sm bg-gray-100  rounded-e-lg"
			/>
			<button className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full bg-blue-700 rounded-e-lg border">
				<Image src="/search.svg" alt="search-icon" width={20} height={20} />
			</button>
		</div>
	);
}
