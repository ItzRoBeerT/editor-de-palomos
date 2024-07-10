'use server';
import { cookies } from 'next/headers';
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

	const userCredentials = {
		email,
		password,
	};

	try {
		const response = await fetch('http://localhost:4321/user/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(userCredentials),
		});

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
		const data = await response.json();
		cookies().set('token', data.token);
	} catch (error) {
		console.error('Error fetching data:', error);
	}
	redirect('/profile');
}