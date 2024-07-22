import Catches from '@/components/catches';
import { getPigeons } from '@/lib/user';
import { Metadata } from 'next';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
	title: 'Capturas',
	description:
		'Aquí puedes ver todos tus palomos de embreo que estan concursando. Puedes filtrar por año. Además también puedes consultar la puntucación total de capturas.',
};

export default async function CatchesPage() {
	const token = cookies().get('token')?.value || '';
	const { isCatchingPigeons } = await getPigeons(token);

	return (
		<main>
			<Catches pigeons={isCatchingPigeons} token={token} />
		</main>
	);
}
