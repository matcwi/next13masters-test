import { type ProductItemType } from "@/ui/types";

type ProductResponseItem = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: {
		rate: number;
		count: number;
	};
	image: string;
	longDescription: string;
};

export const getProductsList = async (offset = 0) => {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products?take=20&offset=${offset}`);
	const productsResponse = (await res.json()) as ProductResponseItem[];
	const products = productsResponse.map(productResponeItemToItemType);

	return products;
};

export const getProductById = async (id: ProductResponseItem["id"]) => {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
	const productsResponse = (await res.json()) as ProductResponseItem;
	const product = productResponeItemToItemType(productsResponse);

	return product;
};

const productResponeItemToItemType = (
	productResponseItem: ProductResponseItem,
): ProductItemType => ({
	id: productResponseItem.id,
	name: productResponseItem.title,
	category: productResponseItem.category,
	coverImage: {
		alt: productResponseItem.title,
		src: productResponseItem.image,
	},
	price: productResponseItem.price,
	description: productResponseItem.description,
});
