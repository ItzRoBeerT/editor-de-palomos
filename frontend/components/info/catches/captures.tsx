import Card from '@/components/containers/card';
import { Capture } from '@/types/request';
import moment from 'moment';
import RemoveCapture from './remove-capture';

interface CapturesProps {
	captures: Capture[];
	pigeonId: string;
	token: string;
}
export default function Captures(props: CapturesProps) {
	const { captures, pigeonId, token } = props;
	return (
		<div>
			{captures.map((capture) => (
				<Card key={capture._id}>
					<div className="flex justify-end">
						<RemoveCapture
							token={token}
							pigeonId={pigeonId}
							captureId={capture._id || ''}
						/>
					</div>
					<div>
						<p>Propietario: {capture.owner}</p>
						<p>Anilla: {capture.ring}</p>
						<p>Pluma: {capture.feather}</p>
						<p>Fecha: {moment(capture.date).format('DD/MM/YYYY')}</p>
					</div>
				</Card>
			))}
		</div>
	);
}
