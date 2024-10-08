import { getUri } from '@/functions/utils';
import { Pigeon, User } from '@/types/request';
import { cookies } from 'next/headers';

let URI = getUri();

export async function loginUser(email: string, password: string) {
	const userCredentials = {
		email,
		password,
	};

	const response = await fetch(URI + 'user/login', {
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
}

export async function logoutUser(token: string) {
	const response = await fetch(URI + 'user/logout', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json',
		},
	});

	if (!response.ok) {
		throw new Error(`HTTP error! Status: ${response.status}`);
	}

	return true;
}

export async function getUser(token: string) {
	const response = await fetch(URI + 'user/me', {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json',
		},
	});

	if (!response.ok) {
		throw new Error(`HTTP error! Status: ${response.status}`);
	}

	const data = await response.json();
	const foundUser: User = data.user;

	if (!foundUser) throw new Error(`User not found!`);
	return foundUser;
}

export async function getPigeons(token: string) {
	const response = await fetch(URI + 'user/getPigeons', {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json',
		},
	});

	if (!response.ok) {
		throw new Error(`HTTP error! Status: ${response.status}`);
	}

	interface DataResponse {
		pigeons: Pigeon[];
		total: number;
		isCatchingPigeons: Pigeon[];
		isCatchingTotal: number;
	}

	const data: DataResponse = await response.json();

	return data;
}


