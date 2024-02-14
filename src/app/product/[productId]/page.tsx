import { getProductById, getProductsList } from "@/api/products";

import { ProductItem } from "@/ui/molecules/ProductItem";

export const generateStaticParams = async () => {
	const products = await getProductsList();

	return products
		.map((product) => ({
			productId: product.id,
		}))
		.slice(0, 2);
};

export const generateMetadata = async ({ params }: { params: { productId: string } }) => {
	const product = await getProductById(params.productId);
	return {
		title: `${product.name}`,
		decription: product.description,
		openGraph: {
			title: `${product.name}`,
			decription: product.description,
			//gdy wyslemy link to ten obrazek bedzie widoczny np na facebooku
			images: [product.coverImage.src],
		},
	};
};

export default async function SingleProductPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);
	return (
		<>
			<ProductItem product={product} />
		</>
	);
}
