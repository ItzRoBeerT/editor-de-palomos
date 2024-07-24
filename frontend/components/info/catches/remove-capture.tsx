import Image from 'next/image';

export default function RemoveCapture() {
	return (
		<>
			<button className="rounded p-2 bg-red-600">
				<Image src={'/trash.svg'} alt="trash" width={20} height={20} priority />
			</button>
		</>
	);
}
