import Card from '@/components/containers/card';
import AuthForm from '@/components/forms/authForm';
import { cookies } from 'next/headers';
import Image from 'next/image';
import { redirect } from 'next/navigation';

export default function Home() {
	if (cookies().get('token')?.value) {
		redirect('/profile');
	}

	return (
		<main className="flex flex-col items-center justify-center min-h-screen">
			<Card className='mb-4'>
				<h1 className="text-4xl text-center ">Bienvenidos al editor de palomos</h1>
			</Card>
			<Image
				alt="colombicultura"
				src="/colombicultura.png"
				width={200}
				height={200}
				priority
			/>
			<div className="container m-4">
				<div className="max-w-3xl w-full mx-auto ">
					<AuthForm />
				</div>
			</div>
		</main>
	);
}
