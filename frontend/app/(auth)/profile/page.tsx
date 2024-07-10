import Card from '@/components/containers/card';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Palomar El Cata",
    description: "Gestor de Palomos para El Palomar El Cata",
};

export default function ProfilePage() {
	return (
		<main className="flex flex-col items-center justify-center min-h-screen">
			<div className="container m-4">
				<div className="max-w-3xl w-full mx-auto grid gap-4 grid-cols-1">
					<Card>
						<h1 className="text-4xl">Palomar El Cata</h1>
					</Card>
					<div className="grid grid-cols-12 gap-4">
						<div className="col-span-12 sm:col-span-4">
							<Card>
								<p>Estadisticas</p>
							</Card>
						</div>
						<div className="col-span-12 sm:col-span-4">
							<Card>
								<p>Palomos</p>
							</Card>
						</div>
						<div className="col-span-12 sm:col-span-4">
							<Card>
								<p>Logros</p>
							</Card>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
