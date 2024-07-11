import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Agrega un nuevo palomo',
	description: 'Bienvenido al formulario de palomos, donde puedes agregar nuevos palomos',
};

export default async function PigeonFormPage() {
	return (
		<main>
			<h1>Añade un nuevo palomo</h1>
		</main>
	);
}
