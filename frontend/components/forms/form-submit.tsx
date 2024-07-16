'use client';
import { useFormStatus } from 'react-dom';

export interface Props {
	text?: string;
}
export default function FormSubmit(props: Props) {
	const { text } = props;

	const status = useFormStatus();

	if (status.pending) {
		return <p>Creando Palomo...</p>;
	}

	return (
		<button
			type="submit"
			className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
		>
			{text ? text : 'Enviar'}
		</button>
	);
}
