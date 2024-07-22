import { Pigeon } from '@/types/request';
import Pigeons from './pigeons';
import { getYears } from '@/functions/utils';
import YearSelect from '@/components/ui/year-select';
export interface CatchesProps {
	pigeons: Pigeon[];
	token: string;
}

export default async function Catches(props: CatchesProps) {
	const { pigeons, token } = props;
	const years = await getYears(token);

	return (
		<>
			<div className="mb-4">
				<YearSelect years={years} />
			</div>

			{pigeons.length > 0 ? (
				<div className="grid gap-4">
					<Pigeons pigeons={pigeons} years={years} />
				</div>
			) : (
				<p>Todavia no tienes palomos en embreo</p>
			)}
		</>
	);
}
