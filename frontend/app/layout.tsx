import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Inicio de sesión',
	description: 'Inicia sesión para acceder a tu cuenta de editor y gestión de palomos',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<body className={`${inter.className} bg-gray-900 text-white m-4 md:m-6 lg:m-8 xl:m-10`}>
				{children}
				<Toaster />
			</body>
		</html>
	);
}
