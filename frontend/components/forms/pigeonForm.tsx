'use client';
import { useFormState } from 'react-dom';
import Card from '../containers/card';
import { createPigeon } from '@/actions/pigeon';
import { Pigeon } from '@/types/request';
import CustomSelect from '../ui/customSelect';
import FormSubmit from './form-submit';
import { getFemalePigeons, getGenders, getMalePigeons } from '@/functions/utils';
import FloatingInput from '../ui/floating-input';
import toast from 'react-hot-toast';

interface Props {
	token: string;
	pigeons: Pigeon[];
}

export default function PigeonForm(props: Props) {
	const { token, pigeons } = props;
	const [state, formAction] = useFormState(createPigeon.bind(null, token), { errors: {} });

	const malePigeons = getMalePigeons(pigeons);
	const femalePigeons = getFemalePigeons(pigeons);
	const genders = getGenders();

	if (state?.errors?.response) {
		toast.error(state.errors.response, {
			duration: 2000,
		});
	}

	if (state?.success) {
		toast.success('Palomo creado correctamente', {
			duration: 2000,
		});
	}

	return (
		<Card>
			<form className="space-y-6 p-4" action={formAction}>
				<div>
					<FloatingInput label="Nombre" type="text" id="name" name="name" placeholder='nombre'/>
				</div>

				<div>
					<FloatingInput label="Anilla" type="text" id="ring" name="ring" placeholder='Anilla' required />
				</div>

				<div>
					<FloatingInput label="Pluma" type="text" name="feather" id="feather" placeholder='Pluma' required />
				</div>

				<CustomSelect
					options={genders}
					label="Género"
					required
					placeHolder="Género"
					id="gender"
					name="gender"
				/>

				<div>
					<label>Fecha de nacimiento</label>
					<FloatingInput
						type="date"
						id="birthday"
						name="birthday"
						label="Fecha de nacimiento"
						required
					/>
				</div>

				<div>
				<label>Nombre - Anilla</label>
					<CustomSelect
						options={malePigeons}
						id="father"
						name="father"
						placeHolder="Padre"
						label="Nombre - Anilla"
					/>
				</div>

				<div>
				<label>Nombre - Anilla</label>
					<CustomSelect
						options={femalePigeons}
						id="mother"
						placeHolder="Madre"
						name="mother"
						label="Nombre - Anilla"
					/>
				</div>

				<FormSubmit text="Crear palomo" />
			</form>
		</Card>
	);
}
