import { getUri } from '@/functions/utils';
import { Capture, Pigeon } from '@/types/request';

const URI = getUri();

export async function addPigeon(pigeon: Pigeon, token: string) {
	const response = await fetch(URI + 'pigeon/add', {
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
	const response = await fetch(URI + 'pigeon/update', {
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
	const response = await fetch(URI + 'pigeon/get', {
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
	const response = await fetch(URI + 'pigeon/search', {
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
	const response = await fetch(URI + 'pigeon/delete', {
		method: 'DELETE',
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ ring }),
	});

	if (!response.ok) {
		throw new Error(`HTTP error! Status: ${response.status}`);
	}

	return response.json();
}

export async function handleCatching(token: string, pigeon: Pigeon) {
	const response = await fetch(URI + 'pigeon/update', {
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

export async function addNewCapture(token: string, pigeonId: string, capture: Capture) {
	const response = await fetch(URI + 'pigeon/capture', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ pigeonId, capture }),
	});

	if (!response.ok) {
		throw new Error(`HTTP error! Status: ${response.status}`);
	}

	return response.json();
}

export async function getAvailableYears(token: string) {
	const response = await fetch(URI + 'pigeon/years', {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json',
		},
	});

	if (!response.ok) {
		throw new Error(`HTTP error! Status: ${response.status}`);
	}

	interface data {
		years: number[];
	}
	const data: data = await response.json();
	return data.years;
}
