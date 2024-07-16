import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default function AuthRootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const token = cookies().get('token')?.value;
	console.log({ token });
	if (!token) {
		return redirect('/');
	}

	return <>{children}</>;
}
