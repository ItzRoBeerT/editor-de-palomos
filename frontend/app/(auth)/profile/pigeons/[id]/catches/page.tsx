import Card from '@/components/containers/card';
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
			<Card className="mb-4">
				<h1 className="text-4xl text-center">Mis capturas</h1>
			</Card>
			<Catches token={token} years={years} pigeonId={pigeon?._id || ''} />
		</main>
	);
}
