import { ProductList } from "@/ui/organisms/ProductList";
import { type ProductItemType } from "@/ui/types";

const products: ProductItemType[] = [
	{
		id: "1",
		category: "Accessories",
		name: "Basic Tee",
		price: 1200,
		coverImage: {
			alt: "",
			src: "/product_1.png",
		},
	},
	{
		id: "2",
		category: "Accessories",
		name: "Basic Tee",
		price: 1500,
		coverImage: {
			alt: "",
			src: "/product_2.png",
		},
	},
	{
		id: "3",
		category: "Accessories",
		name: "Basic Tee",
		price: 2099,
		coverImage: {
			alt: "",
			src: "/product_3.png",
		},
	},
	{
		id: "4",
		category: "Accessories",
		name: "Basic Tee",
		price: 1589,
		coverImage: {
			alt: "",
			src: "/product_4.png",
		},
	},
];

export default function Home() {
	return (
		<section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
			<ProductList products={products} />
		</section>
	);
}
