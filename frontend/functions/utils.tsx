import { Pigeon } from '@/types/request';

export function getMalePigeons(pigeons: Pigeon[]) {
	return pigeons
		.filter((pigeon) => pigeon.gender === 'male')
		.map((pigeon) => ({ value: pigeon.ring, label: `${pigeon.name} - ${pigeon.ring}` }));
}
export function getFemalePigeons(pigeons: Pigeon[]) {
	return pigeons
		.filter((pigeon) => pigeon.gender === 'female')
		.map((pigeon) => ({ value: pigeon.ring, label: `${pigeon.name} - ${pigeon.ring}` }));
}

export function getGenders() {
	return [
		{ value: 'male', label: 'Macho' },
		{ value: 'female', label: 'Hembra' },
	];
}

export function getUri() {
	if (process.env.NEXT_PUBLIC_ENV === 'DEVELOP') {
		console.log('DEVELOP MODE');
		return process.env.NEXT_PUBLIC_API_URL_DEVELOP;
	} else {
		return process.env.NEXT_PUBLIC_API_URL;
	}
}
