import Card from '@/components/containers/card';
import { getPigeon } from '@/lib/pigeon';
import { getUser } from '@/lib/user';
import moment from 'moment';
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

	return (
		<main>
			<Card>
				<h1 className="text-4xl text-center">
					{pigeon.name} de {user.name}
				</h1>
			</Card>
			<p>{pigeon.feather}</p>
			<p>{moment(pigeon.birthday).format('DD/MM/YYYY')}</p>
			<p>{pigeon.ring}</p>
			<p>test</p>
		</main>
	);
}
