import Link from "next/link";
import { getCollectionsList } from "@/api/collections";

export const CollectionsList = async () => {
	const collections = await getCollectionsList();

	return (
		<section>
			<h2 className="mb-8">Collections</h2>
			<div className="flex flex-col gap-4">
				{collections.map((collection) => (
					<Link href={`/collections/${collection.slug}`} key={collection.name}>
						{collection.name}
					</Link>
				))}
			</div>
		</section>
	);
};
