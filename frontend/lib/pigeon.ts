import { Pigeon } from '@/types/request';

export async function getPigeons(token: string) {
	const response = await fetch('http://localhost:4321/pigeon/get', {
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
	const pigeons: Pigeon[] = data.pigeons;

	return pigeons;
}

export async function addPigeon(pigeon: Pigeon, token: string) {
	const response = await fetch('http://localhost:4321/pigeon/add', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(pigeon),
	});

	if (!response.ok) {
		throw new Error(`HTTP error! Status: ${response.status}`);
	}

	const data = await response.json();
	return data;
}
