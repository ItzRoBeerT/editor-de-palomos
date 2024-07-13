'use client';
import { useFormState } from 'react-dom';
import Card from '../containers/card';
import { createPigeon } from '@/actions/pigeon';

interface Props {
	token: string;
}

export default function PigeonForm(props: Props) {
	const { token } = props;
	const [state, formAction] = useFormState(createPigeon.bind(null, token), { errors: {} });

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
					<label
						htmlFor="father"
						className="block text-sm font-medium text-gray-900 dark:text-white"
					>
						Padre
					</label>
					<input
						type="text"
						id="father"
						name="father"
						className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					/>
				</div>

				<div>
					<label
						htmlFor="mother"
						className="block text-sm font-medium text-gray-900 dark:text-white"
					>
						Madre
					</label>
					<input
						type="text"
						id="mother"
						name="mother"
						className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
