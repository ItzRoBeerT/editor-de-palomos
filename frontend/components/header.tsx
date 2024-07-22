'use client';
import Link from 'next/link';
import Card from './containers/card';
import { logout } from '@/actions/user';

export default function Header() {
	async function onClickHandler() {
		logout();
	}

	return (
		<header>
			<Card className="flex justify-between text-center mb-4">
				<Link href={'/profile'}>
					<div className="bg-gray-500 p-4 rounded">
						<p>Inicio</p>
					</div>
				</Link>
				<button onClick={onClickHandler} className="bg-red-700 p-4 rounded">
					<p>Cerrar sesión</p>
				</button>
			</Card>
		</header>
	);
}
