export interface PillProps {
	text: string;
	type?: 'warning' | 'error' | 'success';
}
export default function Pill(props: PillProps) {
	const { text, type = 'success' } = props;

	let className = 'rounded-full text-xs font-bold text-white py-1 h-fit px-2 ';

	if (type === 'success') className += 'bg-green-500';
	else if (type === 'error') className += 'bg-red-500';
	else if (type === 'warning') className += 'bg-yellow-500';

	return <button className={className}>{text}</button>;
}
