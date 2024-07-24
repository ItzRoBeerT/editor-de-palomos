'use server';
import { addNewCapture, addPigeon, deletePigeon, handleCatching, updatePigeon } from '@/lib/pigeon';
import { Capture, Pigeon } from '@/types/request';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

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
	const gender = formData.get('gender');

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

	if (!gender) {
		errors.gender = 'El campo género es obligatorio';
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
		gender: gender as string,
		mother: mother as string,
	};

	try {
		await addPigeon(newPigeon, token);
	} catch (error) {
		console.error('Error adding pigeon:', error);
		errors.response = 'Error al añadir el palomo';
		return { errors };
	}

	revalidatePath('/', 'layout');
	return { success: true };
}

export async function modifyPigeon(token: string, prevState: any, formData: FormData) {
	const name = formData.get('name');
	const ring = formData.get('ring');
	const feather = formData.get('feather');
	const birthday = formData.get('birthday');
	const father = formData.get('father');
	const mother = formData.get('mother');
	const gender = formData.get('gender');

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

	if (!gender) {
		errors.gender = 'El campo género es obligatorio';
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
		gender: gender as string,
		mother: mother as string,
	};

	try {
		await updatePigeon(newPigeon, token);
	} catch (error) {
		console.error('Error adding pigeon:', error);
	}

	revalidatePath('/', 'layout');
}

export async function removePigeon(token: string, ring: string) {
	const errors: Errors = {};
	try {
		await deletePigeon(token, ring);
	} catch (error) {
		console.error('Error adding pigeon:', error);
		errors.response = 'Error al añadir el palomo';
		return { errors };
	}
	revalidatePath('/');
	redirect('/profile/pigeons');
}

export async function addCapture(
	token: string,
	pigeonId: string,
	prevState: any,
	formData: FormData
) {
	const owner = formData.get('owner');
	const ring = formData.get('ring');
	const feather = formData.get('feather');
	const date = formData.get('date');

	let errors: Errors = {};
	if (!ring) {
		errors.ring = 'La anilla es obligatoria';
	}

	if (!feather) {
		errors.ring = 'La pluma es obligatoria';
	}

	if (!date) {
		errors.date = 'La fecha es obligatoria';
	}

	if (!owner) {
		errors.owner = 'El propietario es obligatorio';
	}

	if (Object.keys(errors).length > 0) {
		return { errors };
	}

	const newCapture: Capture = {
		owner: owner as string,
		date: date as string,
		feather: feather as string,
		ring: ring as string,
	};

	try {
		await addNewCapture(token, pigeonId, newCapture);
	} catch (error) {
		console.error('Error adding pigeon:', error);
		errors.response = 'Error al añadir captura';
		return { errors };
	}

	revalidatePath('/', 'layout');
	return { success: true };
}

export async function toogleCatches(token: string, pigeon: Pigeon) {
	const { isCatching } = pigeon;
	if (isCatching) {
		try {
			await handleCatching(token, pigeon);
			revalidatePath('/', 'layout');
			return { success: 'Palomo añadido a hembreo!' };
		} catch (error) {
			console.error(error);
			return { error: 'No se ha podido actualizar el palomo' };
		}
	} else {
		try {
			await handleCatching(token, pigeon);
			revalidatePath('/', 'layout');
			return { success: 'Palomo eliminado de hembreo!' };
		} catch (error) {
			console.error(error);
			return { error: 'No se ha podido actualizar el palomo' };
		}
	}
}
