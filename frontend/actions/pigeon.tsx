import { addPigeon } from '@/lib/pigeon';
import { Pigeon } from '@/types/request';

interface Errors {
	[key: string]: string;
}

export async function createPigeon(token: string, prevState: any, formData: FormData) {
	const name = formData.get('name');
	const ring = formData.get('ring');
	const feather = formData.get('feather');
	const birthday = formData.get('birthday');
	const father = formData.get('father');
	const mother = formData.get('mother');

	let errors: Errors = {};

	if (!ring) {
		errors.ring = 'La anilla es obligatoria';
	}

	if (!feather) {
		errors.ring = 'La pluma es obligatoria';
	}

	if (!birthday) {
		errors.ring = 'La fecha de nacimiento es obligatoria';
	}

	if (Object.keys(errors).length > 0) {
		return { errors };
	}

	const newPigeon: Pigeon = {
		name: name as string,
		birthday: birthday as string,
		feather: feather as string,
		ring: ring as string,
		father: father as string,
		mother: mother as string,
	};

	try {
		await addPigeon(newPigeon, token);
	} catch (error) {
		console.error('Error adding pigeon:', error);
	}
}