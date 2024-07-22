import { Pigeon, User } from '@/types/request';
import Card from '../../containers/card';
import Image from 'next/image';
import moment from 'moment';
import FormDelete from '@/components/forms/form-delete';
import Switch from '@/components/ui/switch';

export interface Props {
	pigeon: Pigeon;
	user: User;
	token: string;
	onHandleMode: () => void;
}

export default function ViewPigeon(props: Props) {
	const { pigeon, user, onHandleMode, token } = props;
	const pigeonName = pigeon.name ? pigeon.name : pigeon.ring;

	function handleMode() {
		onHandleMode();
	}
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
				<Card className="text-center" href={pigeon.father ? pigeon.father : ''}>
					{pigeon.father ? <p>Padre: {pigeon.father}</p> : <p>Sin padre</p>}
				</Card>
				<Card className="text-center" href={pigeon.mother ? pigeon.mother : ''}>
					{pigeon.mother ? <p>Madre: {pigeon.mother}</p> : <p>Sin madre</p>}
				</Card>
			</div>
			<Switch token={token} pigeon={pigeon}/>
			<FormDelete pigeon={pigeon} token={token} />
		</div>
	);
}
