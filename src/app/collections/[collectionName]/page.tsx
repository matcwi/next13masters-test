export default async function CollectionPage({ params }: { params: { collectionName: string } }) {
	return <div>{decodeURIComponent(params.collectionName)}</div>;
}
