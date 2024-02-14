import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { type ProductItemType } from "@/ui/types";
import { formatMoney } from "@/utils";

type ProductListItemProps = {
	product: ProductItemType;
};

export const ProductItem = ({ product }: ProductListItemProps) => {
	const { name, category, price } = product;
	return (
		<article className="mx-w-xs">
			<ProductCoverImage {...product.coverImage} />
			<div className="mt-2 flex justify-between">
				<div className="text-sm font-semibold text-gray-700">
					<h1 className="mt-2 text-2xl text-gray-800">{name}</h1>
					<p className="text-sm text-gray-500">
						<span className="sr-only">Kategoria:</span>
						{category}
					</p>
				</div>
				<p className="text-sm font-medium text-gray-900">
					<span className="sr-only">Cena:</span>
					{formatMoney(price / 100)}
				</p>
			</div>
		</article>
	);
};
