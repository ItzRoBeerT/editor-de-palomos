'use client';
import { useFormState } from 'react-dom';
import Card from '../containers/card';
import { createPigeon } from '@/actions/pigeon';
import { Pigeon } from '@/types/request';
import CustomSelect from '../ui/customSelect';
import FormSubmit from './form-submit';
import { getFemalePigeons, getGenders, getMalePigeons } from '@/functions/utils';
import FloatingInput from '../ui/floating-input';

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

	return (
		<Card>
			<form className="space-y-6 p-4" action={formAction}>
				<div>
					<FloatingInput label="Nombre" type="text" id="name" name="name" />
				</div>

				<div>
					<FloatingInput label="Anilla" type="text" id="ring" name="ring" required />
				</div>

				<div>
					<FloatingInput label="Pluma" type="text" name="feather" id="feather" required />
				</div>

				<CustomSelect
					options={genders}
					label="Género"
					defaultOption="Seleccionar género"
					required
					id="gender"
					name="gender"
				/>

				<div>
					<FloatingInput
						type="date"
						id="birthday"
						name="birthday"
						label="Fecha de nacimiento"
						required
					/>
				</div>

				<div>
					<CustomSelect
						options={malePigeons}
						defaultOption={'Seleccionar padre'}
						id="father"
						name="father"
						label="Nombre - Anilla"
					/>
				</div>

				<div>
					<CustomSelect
						options={femalePigeons}
						defaultOption={'Seleccionar madre'}
						id="mother"
						name="mother"
						label="Nombre - Anilla"
					/>
				</div>

				<FormSubmit text="Crear palomo" />
			</form>
		</Card>
	);
}
