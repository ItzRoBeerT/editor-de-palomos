'use client';

import { toogleCatches } from '@/actions/pigeon';
import { Pigeon } from '@/types/request';
import toast from 'react-hot-toast';

export interface SwitchProps {
	token: string;
	pigeon: Pigeon;
}

export default function Switch(props: SwitchProps) {
	const { token, pigeon } = props;

	const defaultChecked = pigeon.isCatching;
	async function onChangeHandler(e: any) {
		const isChecked = e.target.checked;

		const updatedPigeon = {
			...pigeon,
			isCatching: isChecked,
		};

		const res = await toogleCatches(token, updatedPigeon);

		if (res.success) {
			toast.success(res.success, {
				duration: 2000,
			});
		} else if (res.error) {
			toast.error(res.error, {
				duration: 2000,
			});
		}
	}

	return (
		<label className="inline-flex items-center cursor-pointer">
			<input type="checkbox" defaultChecked={defaultChecked} className="sr-only peer" onChange={onChangeHandler} />
			<div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
			<span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
				Hembreo
			</span>
		</label>
	);
}
