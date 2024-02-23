import Link from "next/link";
import { getCollectionsList } from "@/api/collections";

export default async function CollectionsListPage() {
	const collections = await getCollectionsList();
	return (
		<section>
			<h1>Collections</h1>
			<ul>
				{collections.map((collection) => (
					<li key={collection.name}>
						<Link href={`/collections/${encodeURIComponent(collection.name)}`}>
							{collection.name}
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
}
