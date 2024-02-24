import { executeGraphql } from "@/api/graphql/lib";
import { CollectionGetBySlugDocument, CollectionsGetListDocument } from "@/gql/graphql";

export const getCollectionsList = async () => {
	const gqlResponse = await executeGraphql({ query: CollectionsGetListDocument });

	return gqlResponse.collections.data;
};

export const getCollectionBySlug = async (slug: string) => {
	const gqlResponse = await executeGraphql({
		query: CollectionGetBySlugDocument,
		variables: { slug: slug },
	});

	return gqlResponse.collection;
};
