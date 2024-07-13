'use client';
import Image from 'next/image';

export default function SearchInput() {
	const onHandleChange = (e: any) => {
        const test = e.target.value
		console.log(test);
	};

	return (
		<div className="relative w-full" >
			<input
                onChange={onHandleChange}
				type="text"
				id="search-pigeon"
                placeholder='Buscar por nombre, anilla...'
				className="block rounded-lg p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
			/>
			<button className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
				<Image src="/search.svg" alt="search-icon" width={20} height={20} />
			</button>
		</div>
	);
}
