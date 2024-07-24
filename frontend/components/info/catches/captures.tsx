import Card from '@/components/containers/card';
import { Capture } from '@/types/request';
import moment from 'moment';
import RemoveCapture from './remove-capture';

interface CapturesProps {
	captures: Capture[];
}
export default function Captures(props: CapturesProps) {
	const { captures } = props;
	return (
		<div>
			{captures.map((capture) => (
				<Card key={capture._id}>
					<div className="flex justify-end">
						<RemoveCapture />
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
