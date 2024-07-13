import { Metadata } from 'next';
import PigeonForm from '@/components/forms/pigeonForm';
import Card from '@/components/containers/card';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
	title: 'Agrega un nuevo palomo',
	description: 'Bienvenido al formulario de palomos, donde puedes agregar nuevos palomos',
};

export default async function PigeonFormPage() {
	const token = cookies().get('token')?.value || '';

	return (
		<main className="container mx-auto max-w-4xl p-4 md:p-8">
			<Card className="mb-4">
				<h1 className="text-3xl text-center">Añade un nuevo palomo</h1>
			</Card>
			<PigeonForm token={token} />
		</main>
	);
}
