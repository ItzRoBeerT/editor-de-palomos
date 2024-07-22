import { Pigeon } from '@/types/request';
import Pigeons from './pigeons';

export interface CatchesProps {
	pigeons: Pigeon[];
}

export default function Catches(props: CatchesProps) {
	const { pigeons } = props;
	return (
		<>
			<h1>Bienvenido a la página de cpaturas</h1>˝{' '}
			<p>Esta página se encuentra todavía en desarrollo!!!</p>
			{pigeons.length > 0 ? (
				<Pigeons pigeons={pigeons} />
			) : (
				<p>Todavia no tienes palomos en embreo</p>
			)}
		</>
	);
}
