interface CardProps {
	children: React.ReactNode;
	className?: string;
}

export default function Card(props: CardProps) {
	const baseClassName = 'bg-gray-800 p-4 rounded-2xl border border-gray-800';
	const combinedClassName = props.className
		? `${baseClassName} ${props.className}`
		: baseClassName;

	return <div className={combinedClassName}>{props.children}</div>;
}
