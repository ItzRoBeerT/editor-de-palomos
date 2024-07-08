interface CardProps {
	children: React.ReactNode;
}

export default function Card(props: CardProps) {
	return <div className="bg-gray-800 p-4 rounded-2xl border border-gray-800 ">{props.children}</div>;
}
