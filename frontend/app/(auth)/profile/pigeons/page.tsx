import Card from '@/components/containers/card';
import SearchInput from '@/components/ui/searchInput';
import { getPigeons } from '@/lib/pigeon';
import { cookies } from 'next/headers';

export default async function PigeonsPage() {
	const token = cookies().get('token')?.value || '';
	const pigeons = await getPigeons(token);

	return (
		<main>
			<h1 className="text-center text-4xl">Mis palomos</h1>
			<div className="flex flex-col gap-3 mt-3">
				<SearchInput />
				{pigeons.map((pigeon) => (
					<Card key={pigeon.ring} href={`pigeons/${pigeon.ring}`}>
						{pigeon.name ? (
							<p>Nombre: {pigeon.name}</p>
						) : (
							<p>Pluma: {pigeon.feather}</p>
						)}
						<p>Anilla: {pigeon.ring}</p>
					</Card>
				))}
			</div>
		</main>
	);
}
