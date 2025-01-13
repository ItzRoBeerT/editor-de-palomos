type Gender = 'male' | 'female';

export interface GenderSelectProps {
	gender: Gender;
	onGenderChange: (gender: Gender) => void;
}
export default function GenderSelect(props: GenderSelectProps) {
	const { gender = 'male', onGenderChange } = props;

	return (
		<div>
			<button
				onClick={() => onGenderChange('male')}
				className={`rounded-l p-2 ${gender === 'male' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
			>
				Macho
			</button>
			<button
				onClick={() => onGenderChange('female')}
				className={`rounded-r p-2 ${gender === 'female' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
			>
				Hembra
			</button>
		</div>
	);
}
