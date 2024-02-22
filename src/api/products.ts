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

	return gqlResponse.products;
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
	return products;
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

	return product;
};
