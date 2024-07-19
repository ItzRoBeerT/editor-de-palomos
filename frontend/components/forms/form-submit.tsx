'use client';
import { useFormStatus } from 'react-dom';

export interface Props {
	text?: string;
	loadingText?: string;
	type?: 'submit' | 'delete';
}
export default function FormSubmit(props: Props) {
	const { text, loadingText, type = 'submit' } = props;
	const status = useFormStatus();
	const loadingString = loadingText ? loadingText : 'Cargando';

	if (status.pending) {
		return <p>{loadingString}</p>;
	}

	return type === 'submit' ? (
		<button
			type="submit"
			className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
		>
			{text ? text : 'Enviar'}
		</button>
	) : (
		<button
			type="submit"
			className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
		>
			{text ? text : 'Enviar'}
		</button>
	);
}
