import PigeonsDisplay from '@/components/info/pigeons';
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

	const { pigeons, total } = await getPigeons(token);
	return (
		<main>
			<h1 className="text-center text-4xl">Mis palomos</h1>
			<p>Palomos: {total}</p>

			<div className="flex flex-col gap-3 mt-3">
				<PigeonsDisplay token={token} pigeons={pigeons} />
			</div>
		</main>
	);
}
