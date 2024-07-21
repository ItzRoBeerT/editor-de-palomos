import PigeonInfo from '@/components/info/pigeon/index';
import { getPigeon } from '@/lib/pigeon';
import { getPigeons, getUser } from '@/lib/user';
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
	const user = await getUser(token);
	const pigeon = await getPigeon(token, ring);
	const { pigeons } = await getPigeons(token);

	return (
		<main>
			<PigeonInfo pigeon={pigeon} user={user} pigeons={pigeons} token={token} />
		</main>
	);
}
