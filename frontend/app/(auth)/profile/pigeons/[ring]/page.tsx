import Card from '@/components/containers/card';
import { getPigeon } from '@/lib/pigeon';
import { cookies } from 'next/headers';

interface Props {
	params: {
		ring: string;
	};
}

export default async function Pigeon(props: Props) {
	const { params } = props;
	const ring = params.ring;
	const token = cookies().get('token')?.value || '';
	const pigeon = await getPigeon(token, ring);

	return (
		<main>
			<Card>
				<h1>{pigeon.name} de </h1>
			</Card>
			<p>{pigeon.feather}</p>
			<p>{pigeon.birthday}</p>
			<p>{pigeon.ring}</p>
			<p>test</p>
		</main>
	);
}
