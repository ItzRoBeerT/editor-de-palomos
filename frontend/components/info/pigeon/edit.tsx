import { Pigeon, User } from '@/types/request';
import Card from '../../containers/card';
import Image from 'next/image';
import moment from 'moment';
import FloatingInput from '@/components/ui/floating-input';
import CustomSelect from '@/components/ui/customSelect';
import { getFemalePigeons, getMalePigeons } from '@/functions/utils';
import FormSubmit from '@/components/forms/form-submit';
import { useFormState } from 'react-dom';
import { modifyPigeon } from '@/actions/pigeon';
import toast from 'react-hot-toast';

export interface Props {
	pigeon: Pigeon;
	token: string;
	pigeons: Pigeon[];
	user: User;
	onHandleMode: () => void;
}

export default function EditPigeon(props: Props) {
	//#region VARIABLES
	const { pigeon, user, pigeons, token, onHandleMode } = props;
	const pigeonName = pigeon.name ? pigeon.name : pigeon.ring;
	const date = moment(pigeon.birthday).format('YYYY-MM-DD');
	const [state, formAction] = useFormState(modifyPigeon.bind(null, token, pigeon._id || ''), {
		errors: {},
	});
	//#endregion

	//#region FUNCTIONS
	function handleMode() {
		onHandleMode();
	}
	//#endregion

	if (state.errors?.response) {
		toast.error('Error al actualizar el palomo', { duration: 2000 });
	}
	if (state.success) {
		toast.success('Palomo acutalizado', { duration: 2000 });
	}

	return (
		<form className="gap-4 grid" action={formAction}>
			<Card className="flex items-start text-center">
				{pigeon.gender === 'male' ? (
					<Image src="/male.svg" alt="male" width={32} height={32} />
				) : (
					<Image src="/female.svg" alt="female" width={32} height={32} />
				)}
				<h1 className="text-4xl w-full">{pigeonName}</h1>
				<div onClick={handleMode}>
					<Image src={'/edit.svg'} alt="edit" width={32} height={32} />
				</div>
			</Card>
			<div className="grid grid-cols-2 gap-4">
				<Card>
					<select
						id="gender"
						name="gender"
						defaultValue={pigeon.gender}
						required
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					>
						<option value="">Género</option>
						<option value="male">Macho</option>
						<option value="female">Hembra</option>
					</select>
				</Card>
				<Card>
					<FloatingInput
						id="name"
						name="name"
						defaultValue={pigeon.name ? pigeon.name : ''}
						label="Nombre"
					/>
				</Card>
			</div>
			<div className="grid grid-cols-2 gap-4">
				<Card>
					<FloatingInput
						id="feather"
						name="feather"
						required
						defaultValue={pigeon.feather}
						label="Pluma"
					/>
				</Card>
				<Card>
					<FloatingInput
						id="ring"
						name="ring"
						required
						defaultValue={pigeon.ring}
						label="Anilla"
					/>
				</Card>
			</div>
			<Card>
				<FloatingInput
					type="date"
					id="birthday"
					required
					name="birthday"
					defaultValue={date}
					label="Fecha de nacimiento"
				/>
			</Card>
			<div className="grid grid-cols-2 gap-4">
				<Card className="text-center">
					<CustomSelect
						label="Nombre - Anilla"
						options={getMalePigeons(pigeons)}
						defaultValue={pigeon.father ? pigeon.father : ''}
						placeHolder="Padre"
						id="father"
						name="father"
					/>
				</Card>
				<Card className="text-center">
					<CustomSelect
						label="Nombre - Anilla"
						options={getFemalePigeons(pigeons)}
						defaultValue={pigeon.mother ? pigeon.mother : ''}
						placeHolder="Madre"
						id="mother"
						name="mother"
					/>
				</Card>
			</div>
			<FormSubmit text="Actualizar datos" />
		</form>
	);
}
