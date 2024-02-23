import { executeGraphql } from "@/api/graphql/lib";
import { CategoriesGetListDocument } from "@/gql/graphql";

export const getCategoriesList = async () => {
	const graphqlResponse = await executeGraphql({ query: CategoriesGetListDocument });

	return graphqlResponse.categories.data;
};
