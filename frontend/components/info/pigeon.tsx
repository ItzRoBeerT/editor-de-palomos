import { Pigeon, User } from '@/types/request';
import Card from '../containers/card';
import Image from 'next/image';
import moment from 'moment';

export interface Props {
	pigeon: Pigeon;
	user: User;
}
export default function PigeonInfo(props: Props) {
	const { pigeon, user } = props;
	const pigeonName = pigeon.name ? pigeon.name : pigeon.ring;

	return (
		<div className="gap-4 grid">
			<Card className="flex items-start text-center">
				{pigeon.gender === 'male' ? (
					<Image src="/male.svg" alt="male" width={32} height={32} />
				) : (
					<Image src="/female.svg" alt="female" width={32} height={32} />
				)}
				<h1 className="text-4xl w-full">
					{pigeonName} de {user.name}
				</h1>
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
				<Card className="text-center">
					{pigeon.father ? <p>Padre: {pigeon.father}</p> : <p>Sin padre</p>}
				</Card>
				<Card className="text-center">
					{pigeon.mother ? <p>Madre: {pigeon.mother}</p> : <p>Sin madre</p>}
				</Card>
			</div>
		</div>
	);
}
