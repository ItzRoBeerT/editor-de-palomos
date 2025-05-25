import PigeonInfo from '@/components/info/pigeon/index';
import { getPigeon } from '@/lib/pigeon';
import { getPigeons, getUser } from '@/lib/user';
import { cookies } from 'next/headers';

interface Props {
	params: {
		id: string;
	};
}

export default async function Pigeon(props: Props) {
	const { params } = props;
	const id = params.id;

	const token = cookies().get('token')?.value || '';
	const user = await getUser(token);
	const pigeon = await getPigeon(token, id);
	const { pigeons } = await getPigeons(token);

	console.log({ pigeon });

	if (!pigeon)
		return (
			<main>
				<p>Palomo no encontrado</p>
			</main>
		);
	return (
		<main>
			<PigeonInfo pigeon={pigeon} user={user} pigeons={pigeons} token={token} />
		</main>
	);
}
