import { getAvailableYears } from '@/lib/pigeon';
import { Pigeon } from '@/types/request';
import moment from 'moment';

export function getMalePigeons(pigeons: Pigeon[]) {
	return pigeons
		.filter((pigeon) => pigeon.gender === 'male')
		.map((pigeon) => ({ value: pigeon._id, label: `${pigeon.name} - ${pigeon.ring}` }));
}
export function getFemalePigeons(pigeons: Pigeon[]) {
	return pigeons
		.filter((pigeon) => pigeon.gender === 'female')
		.map((pigeon) => ({ value: pigeon._id, label: `${pigeon.name} - ${pigeon.ring}` }));
}

export function getGenders() {
	return [
		{ value: 'male', label: 'Macho' },
		{ value: 'female', label: 'Hembra' },
	];
}

export async function getYears(token: string) {
	const currentYear = moment().year();
	const years = await getAvailableYears(token);

	if (years.includes(currentYear)) {
		return years;
	} else {
		years.push(currentYear);
		return years;
	}
}

export function getUri() {
	if (process.env.NEXT_PUBLIC_ENV === 'DEVELOP') {
		console.log('DEVELOP MODE');
		return process.env.NEXT_PUBLIC_API_URL_DEVELOP;
	} else {
		return process.env.NEXT_PUBLIC_API_URL;
	}
}
