import { getProductById, getProductsList } from "@/api/products";

import { ProductItem } from "@/ui/molecules/ProductItem";
import { SuggestedProductsList } from "@/ui/organisms/SuggestedProducts";

export const generateStaticParams = async () => {
	const products = await getProductsList();

	return products.products.data
		.map((product) => ({
			productId: product.id,
		}))
		.slice(0, 2);
};

export const generateMetadata = async ({ params }: { params: { productId: string } }) => {
	const product = await getProductById(params.productId);
	return {
		title: `${product.name}`,
		description: product.description,
		openGraph: {
			title: `${product.name}`,
			description: product.description,
			//gdy wyslemy link to ten obrazek bedzie widoczny np na facebooku
			images: [product.images[0].url],
		},
	};
};

export default async function SingleProductPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);
	return (
		<>
			<ProductItem product={product} />
			<SuggestedProductsList />
		</>
	);
}
