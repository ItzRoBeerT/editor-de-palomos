'use client';

import { useState } from 'react';
import Modal from '../containers/modal';
import FloatingInput from '../ui/floating-input';
import FormSubmit from '../forms/form-submit';
import { useFormState } from 'react-dom';
import { addCapture } from '@/actions/pigeon';
import toast from 'react-hot-toast';

export interface AddCatchButtonProps {
	token: string;
	pigeonId: string;
}
export default function AddCatchButton(props: AddCatchButtonProps) {
	const { token, pigeonId } = props;
	const [isOpen, setIsOpen] = useState(false);
	const [state, formAction] = useFormState(addCapture.bind(null, token, pigeonId), {
		errors: {},
	});

	if (state?.errors?.response) {
		toast.error(state.errors.response, {
			duration: 2000,
		});
	}

	if (state?.success) {
		toast.success('Captura añadida', {
			duration: 2000,
		});
	}

	function onOpenModal() {
		setIsOpen(true);
	}

	function onCloseModal() {
		setIsOpen(false);
	}

	return (
		<>
			<button onClick={onOpenModal} className="rounded bg-green-600 p-2">
				Añadir captura
			</button>
			<Modal mode="dark" isOpen={isOpen} onClose={onCloseModal} title="Añadir nueva captura">
				<form className="grid gap-4" action={formAction}>
					<FloatingInput type="text" label="Propietario" required name="owner" />
					<FloatingInput type="text" label="Anilla" required name="ring" />
					<FloatingInput type="text" label="Pluma" required name="feather" />
					<FloatingInput type="date" label="Fecha" required name="date" />
					<FormSubmit />
				</form>
			</Modal>
		</>
	);
}
