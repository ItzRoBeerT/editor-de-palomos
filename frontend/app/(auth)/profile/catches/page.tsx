import Catches from '@/components/catches';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Capturas',
	description:
		'Aquí puedes ver todos tus palomos de embreo que estan concursando. Puedes filtrar por año. Además también puedes consultar la puntucación total de capturas.',
};

export default function CatchesPage() {
	return (
		<main>
			<Catches />
		</main>
	);
}
