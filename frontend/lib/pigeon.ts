import { Pigeon } from '@/types/request';
import { redirect } from 'next/navigation';

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

export async function updatePigeon(pigeon: Pigeon, token: string) {
	const response = await fetch('http://localhost:4321/pigeon/update', {
		method: 'PATCH',
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ pigeon }),
	});

	if (!response.ok) {
		throw new Error(`HTTP error! Status: ${response.status}`);
	}

	return response.json();
}

export async function getPigeon(token: string, ring: string) {
	const response = await fetch('http://localhost:4321/pigeon/get', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ ring }),
	});

	if (!response.ok) {
		throw new Error(`HTTP error! Status: ${response.status}`);
	}

	const data = await response.json();
	const pigeon: Pigeon = data.pigeon;

	return pigeon;
}

export async function searchPigeon(token: string, searchValue: string) {
	const response = await fetch('http://localhost:4321/pigeon/search', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ search: searchValue }),
	});

	if (!response.ok) {
		throw new Error(`HTTP error! Status: ${response.status}`);
	}

	const data = await response.json();
	const pigeons: Pigeon[] = data.filteredPigeons;

	return pigeons;
}

export async function deletePigeon(token: string, ring: string) {
	const response = await fetch('http://localhost:4321/pigeon/delete', {
		method: 'DELETE',
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ ring }),
	});

	console.log(response);

	if (!response.ok) {
		throw new Error(`HTTP error! Status: ${response.status}`);
	}

	return response.json();
}
