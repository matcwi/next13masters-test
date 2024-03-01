import { getProductById, getProductsList } from "@/api/products";

import { ProductItem } from "@/ui/molecules/ProductItem";
import { SuggestedProductsList } from "@/ui/organisms/SuggestedProducts";
import { addProductToCartAction } from "@/api/actions";

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
	const quantity = 1;
	async function addToCartAction(_form: FormData) {
		"use server";
		await addProductToCartAction(product.id, quantity);
	}
	return (
		<>
			<ProductItem product={product} />
			<form action={addToCartAction}>
				<button type="submit" className="rounded-sm bg-slate-400 p-4">
					Add to cart
				</button>
			</form>
			<SuggestedProductsList />
		</>
	);
}
