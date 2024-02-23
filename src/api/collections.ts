import { executeGraphql } from "@/api/graphql/lib";
import { CollectionsGetListDocument } from "@/gql/graphql";

export const getCollectionsList = async (_offset = 0) => {
	const gqlResponse = await executeGraphql({ query: CollectionsGetListDocument });

	return gqlResponse.collections.data;
};
