import Card from '@/components/containers/card';
import SearchInput from '@/components/ui/searchInput';
import { getPigeons } from '@/lib/user';
import { Metadata } from 'next';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
	title: 'Mis palomos',
	description:
		'Aquí encontrarás todos los palomos que has registrado en tu cuenta de usuario. ¡Prueba a filtrar para conseguir una búsqueda más rapida!',
};

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
