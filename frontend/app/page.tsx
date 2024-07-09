import AuthForm from '@/components/forms/authForm';

export default function Home() {
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
