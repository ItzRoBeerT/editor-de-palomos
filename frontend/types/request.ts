export type User = {
	name: string;
	lastName: string;
	email: string;
	password: string;
};

export type Pigeon = {
	_id?: string;
	name: string;
	ring: string;
	gender: 'male' | 'female' | string;
	feather: string;
	birthday: string;
	father?: string;
	mother?: string;
	isCatching?: boolean;
	captures?: Capture[];
};

export type Capture = {
	_id?: string;
	date: string;
	owner: string;
	feather: string;
	ring: string;
};
