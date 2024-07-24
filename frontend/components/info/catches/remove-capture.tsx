'use client';
import { removeCaptureAction } from '@/actions/pigeon';
import Modal from '@/components/containers/modal';
import Image from 'next/image';
import { useState } from 'react';
import { useFormState } from 'react-dom';
import toast from 'react-hot-toast';

interface RemoveCaptureProps {
	token: string;
	pigeonId: string;
	captureId: string;
}

export default function RemoveCapture(props: RemoveCaptureProps) {
	const { token, pigeonId, captureId } = props;
	const [isOpen, setIsOpen] = useState(false);
	const [state, formAction] = useFormState(
		removeCaptureAction.bind(null, token, pigeonId, captureId),
		{
			errors: {},
		}
	);


	if (state.errors?.response) {
		toast.error(state.errors?.response, { duration: 2000 });
	}
	if (state.success) {
		toast.success(state.success, { duration: 2000 });
	}
	return (
		<>
			<button className="rounded p-2 bg-red-600" onClick={() => setIsOpen(true)}>
				<Image src={'/trash.svg'} alt="trash" width={20} height={20} priority />
			</button>

			<Modal
				title="Seguro que desea eliminar?"
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
			>
				<form className="flex gap-4 justify-center" action={formAction}>
					<button className="rounded p-2 bg-red-600 text-white" type="submit">
						eliminar
					</button>
					<button
						className="rounded p-2 bg-blue-600 text-white"
						type="button"
						onClick={() => setIsOpen(false)}
					>
						cancelar
					</button>
				</form>
			</Modal>
		</>
	);
}
