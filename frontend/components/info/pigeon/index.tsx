'use client';
import { Pigeon, User } from '@/types/request';
import { useState } from 'react';
import ViewPigeon from './view';
import EditPigeon from './edit';

export interface Props {
	pigeon: Pigeon;
	token: string;
	pigeons: Pigeon[];
	user: User;
}
export default function PigeonInfo(props: Props) {
	const { pigeon, user, pigeons, token } = props;
	const pigeonName = pigeon.name ? pigeon.name : pigeon.ring;
	const [mode, setMode] = useState<'view' | 'edit'>('view');

	function handleMode() {
		if (mode === 'view') setMode('edit');
		else setMode('view');
	}
	return mode === 'view' ? (
		<ViewPigeon pigeon={pigeon} user={user} onHandleMode={handleMode} token={token}/>
	) : (
		<EditPigeon
			token={token}
			pigeon={pigeon}
			user={user}
			onHandleMode={handleMode}
			pigeons={pigeons}
		/>
	);
}
