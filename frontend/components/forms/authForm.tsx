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
					<label className="block mb-2 text-sm font-medium text-white">
						Tu email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						className=" text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
						placeholder="name@flowbite.com"
						required
					/>
				</div>
				<div className="mb-5">
					<label className="block mb-2 text-sm font-medium text-white">
						Tu contraseña
					</label>
					<input
						type="password"
						id="password"
						name="password"
						className="text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
						required
					/>
				</div>
				<div className="flex items-start mb-5">
					<div className="flex items-center h-5">
						<input
							id="remember"
							type="checkbox"
							value=""
							className="w-4 h-4 border  rounded ocus:ring-3 bg-gray-700 border-gray-600 focus:ring-blue-600 ring-offset-gray-800 focus:ring-offset-gray-800"
						/>
					</div>
					<label className="ms-2 text-sm font-medium text-gray-300">
						Recordar usuario
					</label>
				</div>
				<FormSubmit text="Iniciar Sesión" />
			</form>
		</Card>
	);
}
