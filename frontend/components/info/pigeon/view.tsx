import { Pigeon, User } from '@/types/request';
import Card from '../../containers/card';
import Image from 'next/image';
import moment from 'moment';
import FormDelete from '@/components/forms/form-delete';
import Switch from '@/components/ui/switch';
import Link from 'next/link';
import { getPigeon } from '@/lib/pigeon';
import { useEffect, useState } from 'react';

export interface Props {
	pigeon: Pigeon;
	user: User;
	token: string;
	onHandleMode: () => void;
}

export default function ViewPigeon(props: Props) {
	const { pigeon, user, onHandleMode, token } = props;
	const pigeonName = pigeon.name ? pigeon.name : pigeon.ring;
	const [father, setFather] = useState<Pigeon>();
	const [mother, setMother] = useState<Pigeon>();

	function handleMode() {
		onHandleMode();
	}

	useEffect(() => {
		if (pigeon.father) getPigeon(token, pigeon.father || '').then((data) => setFather(data));
		if (pigeon.mother) getPigeon(token, pigeon.mother || '').then((data) => setMother(data));
	}, []);

	console.log({ father, mother });
	
	
	return (
		<div className="gap-4 grid">
			<Card className="flex items-start text-center">
				{pigeon.gender === 'male' ? (
					<Image src="/male.svg" alt="male" width={32} height={32} />
				) : (
					<Image src="/female.svg" alt="female" width={32} height={32} />
				)}
				<h1 className="text-4xl w-full">{pigeonName}</h1>
				<div onClick={handleMode}>
					<Image src={'/edit.svg'} alt="edit" width={32} height={32} />
				</div>
			</Card>
			<div className="grid grid-cols-2 gap-4">
				<Card>
					<p className="text-center">Pluma: {pigeon.feather}</p>
				</Card>
				<Card>
					<p className="text-center">Anilla: {pigeon.ring}</p>
				</Card>
			</div>
			<Card>
				<p className="text-center">
					Fecha de nacimiento: {moment(pigeon.birthday).format('DD/MM/YYYY')}
				</p>
			</Card>
			<div className="grid grid-cols-2 gap-4">
				<Card className="text-center relative" href={pigeon.father ? pigeon.father : ''}>
					{pigeon.father && !father && (
						<p className="text-xs bg-red-400 w-fit p-1 rounded absolute top-0 right-0">
							Revisión
						</p>
					)}
					{father?._id ? <p>Padre: {father?.name}</p> : <p>{pigeon.father}</p>}
				</Card>
				<Card className="text-center relative" href={pigeon.mother ? pigeon.mother : ''}>
					{pigeon.mother && !mother && (
						<p className="text-xs bg-red-400 w-fit p-1 rounded absolute top-0 right-0">
							Revisión
						</p>
					)}
					{mother?._id ? <p>Madre: {mother?.name}</p> : <p>{pigeon.mother}</p>}
				</Card>
			</div>
			<div className="flex gap-4">
				<Switch token={token} pigeon={pigeon} />
				{pigeon?.isCatching && (
					<Link href={`${pigeon.ring}/catches`} className="rounded p-2 bg-blue-600 text-white">
						Ver capturas
					</Link>
				)}
			</div>
			<FormDelete pigeon={pigeon} token={token} />
		</div>
	);
}
