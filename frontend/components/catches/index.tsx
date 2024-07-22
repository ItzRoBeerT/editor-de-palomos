import { Pigeon } from '@/types/request';
import Pigeons from './pigeons';
import { getYears } from '@/functions/utils';

export interface CatchesProps {
	pigeons: Pigeon[];
	token: string;
}

export default async function Catches(props: CatchesProps) {
	const { pigeons, token } = props;
	const years = await getYears(token);

	return (
		<>
			<select></select>

			{pigeons.length > 0 ? (
				<Pigeons pigeons={pigeons} years={years} />
			) : (
				<p>Todavia no tienes palomos en embreo</p>
			)}
		</>
	);
}
