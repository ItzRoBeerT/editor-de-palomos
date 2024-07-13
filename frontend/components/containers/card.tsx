import Link from 'next/link';

interface CardProps {
	children: React.ReactNode;
	href?: string;
	className?: string;
}

export default function Card(props: CardProps) {
	const { className, href, children } = props;
	const baseClassName = 'bg-gray-800 p-4 rounded-2xl border border-gray-800';
	const combinedClassName = className ? `${baseClassName} ${className}` : baseClassName;

	if (href) {
		return (
			<Link href={href} className={combinedClassName}>
				{children}
			</Link>
		);
	}

	return <div className={combinedClassName}>{children}</div>;
}
