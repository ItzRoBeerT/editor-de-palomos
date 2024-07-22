'use client';
import { login } from '@/actions/user';
import Card from '@/components/containers/card';
import { useFormState } from 'react-dom';
import FormSubmit from './form-submit';

export default function AuthForm() {
	const [state, formAction] = useFormState(login, { errors: {} });

	return (
		<Card>
			<form className="max-w-sm mx-auto" action={formAction}>
				<h2 className="text-3xl text-center mb-6">Inicio de sesión</h2>
				<div className="mb-5">
					<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
						Tu email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="name@flowbite.com"
						required
					/>
				</div>
				<div className="mb-5">
					<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
						Tu contraseña
					</label>
					<input
						type="password"
						id="password"
						name="password"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						required
					/>
				</div>
				<div className="flex items-start mb-5">
					<div className="flex items-center h-5">
						<input
							id="remember"
							type="checkbox"
							value=""
							className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
						/>
					</div>
					<label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
						Recordar usuario
					</label>
				</div>
				<FormSubmit text="Iniciar Sesión" />
			</form>
		</Card>
	);
}
