import Card from '@/components/containers/card';
import { getUser } from '@/lib/user';
import { cookies } from 'next/headers';

export async function generateMetadata() {
	const token = cookies().get('token')?.value || '';
	const user = await getUser(token);

	if (user) {
		return {
			title: `¡Bienvenido, ${user.name}!`,
			description: `Bienvenido a tu perfil ${user.name} ${user.lastName}`,
		};
	}
}

export default async function ProfilePage() {
	const token = cookies().get('token')?.value || '';
	const user = await getUser(token);

	return (
		<main className="min-h-screen">
			<div className="grid gap-4 grid-cols-1">
				<Card>
					<h1 className="text-4xl">Bienvenido, {user.name}!</h1>
				</Card>
				<div className="grid grid-cols-12 gap-4">
					<div className="col-span-12 sm:col-span-4">
						<Card href="/profile/pigeons">
							<p>Mis palomos</p>
						</Card>
					</div>
					<div className="col-span-12 sm:col-span-4">
						<Card href="/profile/catches">
							<p>Capturas</p>
						</Card>
					</div>
					<div className="col-span-12 sm:col-span-4">
						<Card href={'/profile/pigeon-form'}>
							<p>Agregar nuevo palomo</p>
						</Card>
					</div>
				</div>
			</div>
		</main>
	);
}
