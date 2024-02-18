/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ProductsGetListDocument } from "@/gql/graphql";
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

const executeGraphql = async (query, variables) => {
	if (!process.env.GRAPHQL_URL) {
		throw TypeError("GQL is not defined");
	}
	const res = await fetch(process.env.GRAPHQL_URL, {
		method: "POST",
		body: JSON.stringify({ query, variables }),
		headers: {
			"Content-Type": "application/json",
		},
	});
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const gqlResponse = await res.json();

	// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
	if (gqlResponse.errors) {
		throw TypeError("gql error");
	}

	// eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
	return gqlResponse.data;
};

export const getProductsList = async (offset = 0) => {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products?take=20&offset=${offset}`);
	const productsResponse = (await res.json()) as ProductResponseItem[];
	const products = productsResponse.map(productResponeItemToItemType);

	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const gqlResponse = await executeGraphql(ProductsGetListDocument, {});

	// eslint-disable-next-line @typescript-eslint/no-unsafe-return
	return gqlResponse.products.data.map(
		(p: { id: any; name: any; price: any; description: any; images: { url: any }[] }) => {
			return {
				id: p.id,
				category: "",
				name: p.name,
				price: p.price,
				description: p.description,
				coverImage: {
					src: p.images[0].url,
					alt: p.name,
				},
			};
		},
	);
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
