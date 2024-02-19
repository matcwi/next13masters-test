import { notFound } from "next/navigation";
import { executeGraphql } from "@/api/graphql/lib";
import {
	ProductGetByIdDocument,
	ProductsGetByCategorySlugDocument,
	ProductsGetListDocument,
} from "@/gql/graphql";

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

export const getProductsList = async (_offset = 0) => {
	const gqlResponse = await executeGraphql({ query: ProductsGetListDocument });

	return gqlResponse.products.data.map((p) => {
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
	});
};

export const getProductsByCategorySlug = async (slug: string) => {
	const categories = await executeGraphql({
		query: ProductsGetByCategorySlugDocument,
		variables: { slug: slug },
	});

	const products = categories.category?.products;

	if (!products) {
		throw notFound();
	}
	return products.map((p) => {
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
	});
};

export const getProductById = async (id: ProductResponseItem["id"]) => {
	const productData = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: {
			id,
		},
	});

	const product = productData.product;

	if (!product) {
		throw notFound();
	}

	return {
		id: product.id,
		category: product.categories[0].name,
		name: product.name,
		price: product.price,
		description: product.description,
		coverImage: {
			src: product.images[0].url,
			alt: product.name,
		},
	};
};
