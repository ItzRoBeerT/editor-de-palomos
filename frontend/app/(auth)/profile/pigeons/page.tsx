import Card from '@/components/containers/card';
import { getPigeons } from '@/lib/pigeon';
import { cookies } from 'next/headers';

export default async function PigeonsPage() {
	const token = cookies().get('token')?.value || '';
	const pigeons = await getPigeons(token);

	return (
        <main>
            <h1>Mis palomos</h1>
            {
                pigeons.map(pigeon => (
                    <Card>
                        <p>Nombre: {pigeon.name}</p>
                        <p>Anilla: {pigeon.ring}</p>
                        <p>Pluma: {pigeon.feather}</p>
                        <p>Nacimiento: {pigeon.birthday}</p>
                    </Card>
                ))
            }
        </main>
    )
}
