import AuthForm from '@/components/forms/authForm';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default function Home() {
	if (cookies().get('token')?.value) {
		redirect('/profile');
	}

	return (
		<main className="flex flex-col items-center justify-center min-h-screen">
			<div className="container m-4">
				<div className="max-w-3xl w-full mx-auto ">
					<AuthForm />
				</div>
			</div>
		</main>
	);
}
