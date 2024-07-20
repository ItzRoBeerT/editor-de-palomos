import { Pigeon } from '@/types/request';

export function getMalePigeons(pigeons: Pigeon[]) {
	return pigeons
		.filter((pigeon) => pigeon.gender === 'male')
		.map((pigeon) => (
			<option key={pigeon.ring} value={pigeon.ring}>
				{pigeon.name ? `${pigeon.name} - ${pigeon.ring}` : pigeon.ring}
			</option>
		));
}

export function getFemalePigeons(pigeons: Pigeon[]) {
	return pigeons
		.filter((pigeon) => pigeon.gender === 'female')
		.map((pigeon) => (
			<option key={pigeon.ring} value={pigeon.ring}>
				{pigeon.name ? `${pigeon.name} - ${pigeon.ring}` : pigeon.ring}
			</option>
		));
}

export function getGenders() {
	return [
		<option key={'male'} value={'male'}>Macho</option>,
		<option key={'female'} value={'female'}>Hembra</option>
	]
}

export function getUri() {
	if (process.env.NEXT_PUBLIC_ENV === 'DEVELOP') {
		console.log('DEVELOP MODE');
		return process.env.NEXT_PUBLIC_API_URL_DEVELOP;
	} else {
		return process.env.NEXT_PUBLIC_API_URL;
	}
}
