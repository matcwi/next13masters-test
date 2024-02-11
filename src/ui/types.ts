export type ProductItemType = {
	id: string;
	category: string;
	name: string;
	price: number;
	coverImage: {
		src: string;
		alt: string;
	};
	description: string;
};

export type ProductListItemProps = {
	product: ProductItemType;
};
