'use client';
import { Pigeon } from '@/types/request';
import FormSubmit from './form-submit';
import { useFormState } from 'react-dom';
import { modifyPigeon, removePigeon } from '@/actions/pigeon';
import { useState } from 'react';
import Modal from '../containers/modal';

export interface Props {
	pigeon: Pigeon;
	token: string;
}

export default function FormDelete(props: Props) {
	const { token, pigeon } = props;
	const [state, formAction] = useFormState(removePigeon.bind(null, token, pigeon.ring), {});
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<Modal
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
				title="¿Estás seguro de que quieres eliminar este palomo?"
			>
				<div className="grid grid-cols-2 gap-4">
					<form action={formAction}>
						<FormSubmit text="Eliminar" type="delete" />
					</form>
					<button
						onClick={() => setIsOpen(false)}
						className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
					>
						Cerrar
					</button>
				</div>
			</Modal>
			<button
				onClick={() => setIsOpen(true)}
				className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
			>
				Eliminar
			</button>
		</>
	);
}
