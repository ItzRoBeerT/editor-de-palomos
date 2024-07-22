export type User = {
	name: string;
	lastName: string;
	email: string;
	password: string;
};

export type Pigeon = {
	name: string;
	ring: string;
	gender: 'male' | 'female' | string;
	feather: string;
	birthday: string;
	father?: string;
	mother?: string;
	isCatching?: boolean;
};
