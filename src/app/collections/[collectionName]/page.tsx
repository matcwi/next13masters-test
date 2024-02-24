import { notFound } from "next/navigation";
import { getCollectionBySlug } from "@/api/collections";

import { ProductList } from "@/ui/organisms/ProductList";

export const generateMetadata = async ({ params }: { params: { collectionName: string } }) => {
	const collection = await getCollectionBySlug(params.collectionName);
	return {
		title: collection?.name,
	};
};

export default async function CollectionPage({ params }: { params: { collectionName: string } }) {
	const collection = await getCollectionBySlug(params.collectionName);

	if (!collection) {
		throw notFound();
	}

	return (
		<section>
			<h1 className="text-bold">{collection.name}</h1>
			<div>
				<ProductList products={collection.products} />
			</div>
		</section>
	);
}
