import { InputHTMLAttributes } from 'react';

export interface CustomInput extends InputHTMLAttributes<HTMLElement> {
	label: string;
}
export default function FloatingInput(props: CustomInput) {
	const { label, ...defaultAttributes } = props;
	return (
		<div className="relative">
			<input
				{...defaultAttributes}
				className="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-2 appearance-none"
			/>
		</div>
	);
}
