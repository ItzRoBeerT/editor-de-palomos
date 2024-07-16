'use client';
import { useFormState } from 'react-dom';
import Card from '../containers/card';
import { createPigeon } from '@/actions/pigeon';
import { Pigeon } from '@/types/request';
import CustomSelect from '../ui/customSelect';

interface Props {
	token: string;
	pigeons: Pigeon[];
}

export default function PigeonForm(props: Props) {
	const { token, pigeons } = props;
	const [state, formAction] = useFormState(createPigeon.bind(null, token), { errors: {} });

	const malePigeons = pigeons
		.filter((pigeon) => pigeon.gender === 'male')
		.map((pigeon) => (
			<option key={pigeon.ring} value={pigeon.ring}>
				{pigeon.name}
			</option>
		));
	const femalePigeons = pigeons
		.filter((pigeon) => pigeon.gender === 'female')
		.map((pigeon) => (
			<option key={pigeon.ring} value={pigeon.ring}>
				{pigeon.name}
			</option>
		));

	return (
		<Card>
			<form className="space-y-6 p-4" action={formAction}>
				<div>
					<label
						htmlFor="name"
						className="block text-sm font-medium text-gray-900 dark:text-white"
					>
						Nombre
					</label>
					<input
						type="text"
						id="name"
						name="name"
						className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						required
					/>
				</div>

				<div>
					<label
						htmlFor="ring"
						className="block text-sm font-medium text-gray-900 dark:text-white"
					>
						Anilla
					</label>
					<input
						type="text"
						id="ring"
						name="ring"
						className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						required
					/>
				</div>

				<div>
					<label
						htmlFor="feather"
						className="block text-sm font-medium text-gray-900 dark:text-white"
					>
						Pluma
					</label>
					<input
						type="text"
						id="feather"
						name="feather"
						className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						required
					/>
				</div>
				<select
					id="gender"
					name="gender"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				>
					<option value="">Género</option>
					<option value="male">Macho</option>
					<option value="female">Hembra</option>
				</select>

				<div>
					<label
						htmlFor="birthday"
						className="block text-sm font-medium text-gray-900 dark:text-white"
					>
						Fecha de nacimiento
					</label>
					<input
						type="date"
						id="birthday"
						name="birthday"
						className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						required
					/>
				</div>

				<div>
					<CustomSelect
						options={malePigeons}
						defaultOption={'Seleccionar padre'}
						id='father'
						name="father"
					/>
				</div>

				<div>
					<CustomSelect
						options={femalePigeons}
						defaultOption={'Seleccionar madre'}
						id='mother'
						name="mother"
					/>
				</div>

				<button
					type="submit"
					className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
				>
					Crear palomo
				</button>
			</form>
		</Card>
	);
}
