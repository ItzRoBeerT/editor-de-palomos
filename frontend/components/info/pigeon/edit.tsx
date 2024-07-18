import { Pigeon, User } from '@/types/request';
import Card from '../../containers/card';
import Image from 'next/image';
import moment from 'moment';
import FloatingInput from '@/components/ui/floating-input';
import CustomSelect from '@/components/ui/customSelect';
import { getFemalePigeons, getMalePigeons } from '@/functions/utils';

export interface Props {
	pigeon: Pigeon;
	pigeons: Pigeon[];
	user: User;
	onHandleMode: () => void;
}

export default function EditPigeon(props: Props) {
	const { pigeon, user, pigeons, onHandleMode } = props;
	const pigeonName = pigeon.name ? pigeon.name : pigeon.ring;

	function handleMode() {
		onHandleMode();
	}
	const date = moment(pigeon.birthday).format('YYYY-MM-DD');

	return (
		<div className="gap-4 grid">
			<Card className="flex items-start text-center">
				{pigeon.gender === 'male' ? (
					<Image src="/male.svg" alt="male" width={32} height={32} />
				) : (
					<Image src="/female.svg" alt="female" width={32} height={32} />
				)}
				<h1 className="text-4xl w-full">
					{pigeonName} de {user.name}
				</h1>
				<div onClick={handleMode}>
					<Image src={'/edit.svg'} alt="edit" width={32} height={32} />
				</div>
			</Card>
			<div className="grid grid-cols-2 gap-4">
				<Card>
					<FloatingInput
						id="feather"
						name="feather"
						defaultValue={pigeon.feather}
						label="Pluma"
					/>
				</Card>
				<Card>
					<FloatingInput
						id="ring"
						name="ring"
						defaultValue={pigeon.ring}
						label="Anilla"
					/>
				</Card>
			</div>
			<Card>
				<FloatingInput
					type="date"
					id="birthday"
					name="birthday"
					defaultValue={date}
					label="Fecha de nacimiento"
				/>
			</Card>
			<div className="grid grid-cols-2 gap-4">
				<Card className="text-center">
					<CustomSelect
						options={getMalePigeons(pigeons)}
						defaultOption={'Seleccionar padre'}
						defaultValue={pigeon.father ? pigeon.father : ''}
						id="father"
						name="father"
					/>
				</Card>
				<Card className="text-center">
				<CustomSelect
						options={getFemalePigeons(pigeons)}
						defaultOption={'Seleccionar madre'}
						defaultValue={pigeon.father ? pigeon.father : ''}
						id="mother"
						name="mother"
					/>
				</Card>
			</div>
		</div>
	);
}
