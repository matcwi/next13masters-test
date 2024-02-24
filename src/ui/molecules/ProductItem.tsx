import { type ProductListItemFragment } from "@/gql/graphql";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { formatMoney } from "@/utils";

type ProductListItemProps = {
	product: ProductListItemFragment;
};

export const ProductItem = ({ product }: ProductListItemProps) => {
	const { name, categories, price, description } = product;
	return (
		<article className="mx-w-xs">
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
				<ProductCoverImage {...product.images[0]} />
				<div className="mt-2 flex flex-col ">
					<div className="text-sm font-semibold text-gray-700">
						<h1 className="mt-2 text-2xl text-gray-800">{name}</h1>
						<p className="text-sm text-gray-500">
							<span className="sr-only">Kategoria:</span>
							{categories[0].name}
						</p>
					</div>
					<p>{description}</p>
					<p className="text-sm font-medium text-gray-900">
						<span className="sr-only">Cena:</span>
						{formatMoney(price / 100)}
					</p>
				</div>
			</div>
		</article>
	);
};
