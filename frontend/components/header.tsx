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
					<div className="bg-gray-200 p-2 rounded">
						<span>Inicio</span>
					</div>
				</Link>
				<button onClick={onClickHandler} className="bg-red-500 text-white p-2 rounded">
					Cerrar sesión
				</button>
			</Card>
		</header>
	);
}
