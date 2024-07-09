import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

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
			<body className={`${inter.className} bg-gray-900 text-white`}>{children}</body>
		</html>
	);
}
