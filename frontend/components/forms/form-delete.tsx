'use client';
import { Pigeon } from '@/types/request';
import FormSubmit from './form-submit';
import { useFormState } from 'react-dom';
import { modifyPigeon, removePigeon } from '@/actions/pigeon';

export interface Props {
	pigeon: Pigeon;
	token: string;
}

export default function FormDelete(props: Props) {
	const { token, pigeon } = props;

	const [state, formAction] = useFormState(removePigeon.bind(null, token, pigeon.ring), {});
	return (
		<form action={formAction}>
			<FormSubmit text="Eliminar" type="delete" />
		</form>
	);
}
