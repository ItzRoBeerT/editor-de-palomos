import Header from '@/components/header';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default function AuthRootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const token = cookies().get('token')?.value;
	if (!token) {
		return redirect('/');
	}

	return (
		<>
			<Header />
			{children}
		</>
	);
}
