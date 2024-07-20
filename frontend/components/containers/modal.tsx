'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type ModalProps = {
	isOpen: boolean;
	title: string;
	onClose?: () => void;
	children: React.ReactNode;
};

export default function Modal({ isOpen, title, onClose = () => {}, children }: ModalProps) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	if (!isOpen || !mounted) {
		return null;
	}

	return createPortal(
		<div className="fixed  inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 text-black text-center">
			<div className="bg-white rounded-lg shadow-lg max-w-sm lg:max-w-lg p-6">
				<div className="flex justify-between items-center border-b pb-3">
					<h2 className="text-xl font-semibold">{title}</h2>
					<button onClick={onClose} className="text-gray-500 hover:text-gray-700">
						&times;
					</button>
				</div>
				<div className="mt-4">{children}</div>
			</div>
		</div>,
		document.body
	);
}