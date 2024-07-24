import Catches from '@/components/info/catches';
import { getYears } from '@/functions/utils';
import { getPigeon } from '@/lib/pigeon';
import { cookies } from 'next/headers';

export default async function CatchesPage(props: any) {
	const ring = props.params.ring;
	const token = cookies().get('token')?.value || '';
	const years = await getYears(token);
	const pigeon = await getPigeon(token, ring);

	return (
		<main>
			<h1>Página de capturas</h1>
			<Catches token={token} years={years} pigeonId={pigeon._id || ''} />
		</main>
	);
}
