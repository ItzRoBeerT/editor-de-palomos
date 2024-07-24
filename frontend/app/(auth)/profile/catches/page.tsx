import Catches from '@/components/catches';
import Card from '@/components/containers/card';
import { getYears } from '@/functions/utils';
import { Metadata } from 'next';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
	title: 'Capturas',
	description:
		'Aquí puedes ver todos tus palomos de hembreo que estan concursando. Puedes filtrar por año. Además también puedes consultar la puntucación total de capturas.',
};

export default async function CatchesPage() {
	const token = cookies().get('token')?.value || '';
	const years = await getYears(token);

	return (
		<main>
			<Card className="mb-4">
				<h1 className="text-4xl text-center">Capturas</h1>
			</Card>
			<Catches token={token} years={years} />
		</main>
	);
}
