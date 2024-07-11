'use server';
import { loginUser } from '@/lib/user';
import { redirect } from 'next/navigation';

interface Errors {
	[key: string]: string;
}

export async function login(prevState: any, formData: FormData) {
	const email = formData.get('email');
	const password = formData.get('password');

	let errors: Errors = {};
	if (!email || (typeof email === 'string' && !email.includes('@'))) {
		errors.email = 'Introduzca un email válido.';
	}

	if (!password || (typeof password === 'string' && password.length < 7)) {
		errors.password = 'La contraseña debe tener al menos 7 carácteres.';
	}

	if (Object.keys(errors).length > 0) {
		return { errors };
	}

	try {
		await loginUser(email as string, password as string);
	} catch (error) {
		console.error('Error fetching data:', error);
	}
	redirect('/profile');
}
