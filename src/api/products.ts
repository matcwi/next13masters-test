import { notFound } from "next/navigation";
import { executeGraphql } from "@/api/graphql/lib";
import {
	type InputMaybe,
	ProductGetByIdDocument,
	ProductsGetByCategorySlugDocument,
	ProductsGetBySearchDocument,
	ProductsGetListDocument,
	SuggestedProductsGetListDocument,
	type SortDirection,
	type ProductSortBy,
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

export const getProductsList = async (
	take: number = 10,
	skip: number = 0,
	order: InputMaybe<SortDirection> | undefined = undefined,
	orderBy: InputMaybe<ProductSortBy> | undefined = undefined,
) => {
	console.log(take, skip, order, orderBy);
	const gqlResponse = await executeGraphql({
		query: ProductsGetListDocument,
		variables: {
			take,
			skip,
			order,
			orderBy,
		},
	});

	return gqlResponse;
};

export const getSuggestedProductsList = async () => {
	const gqlResponse = await executeGraphql({ query: SuggestedProductsGetListDocument });

	return gqlResponse.products;
};

export const getProductsByCategorySlug = async (slug: string) => {
	const categories = await executeGraphql({
		query: ProductsGetByCategorySlugDocument,
		variables: { slug: slug },
	});

	const category = categories.category;

	if (!category) {
		throw notFound();
	}
	return category;
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

export const getProductsBySearchValue = async (searchValue: string) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetBySearchDocument,
		variables: { input: searchValue },
	});

	return graphqlResponse.products.data;
};
