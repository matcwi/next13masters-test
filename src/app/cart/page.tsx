import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { getCart } from "@/api/cart";
import { formatMoney } from "@/utils";
import { ChangeQuantity } from "@/ui/atoms/ChangeQuantity";
import { RemoveFromCartButton } from "@/ui/atoms/RemoveFromCartButton";

import { handleStripePaymentAction } from "@/api/actions";

export default async function CartPage() {
	const cartId = cookies().get("cartId")?.value;
	if (!cartId) {
		notFound();
	}
	const cart = await getCart(cartId);

	if (!cart) {
		notFound();
	}
	return (
		<div className="container mx-auto">
			<h1 className="mb-4 text-2xl font-bold">Twój koszyk</h1>

			<table className="min-w-full border border-gray-300 bg-white">
				<thead>
					<tr>
						<th className="border-b px-4 py-2">Produkt</th>
						<th className="border-b px-4 py-2">Cena</th>
						<th className="border-b px-4 py-2">Ilość</th>
					</tr>
				</thead>
				<tbody>
					{cart.items.map((item) => (
						<tr key={item.product.id}>
							<td className="border-b px-4 py-2">{item.product.name}</td>
							<td className="border-b px-4 py-2">{formatMoney(item.product.price / 100)}</td>
							<td className="border-b px-4 py-2">
								<ChangeQuantity
									cartId={cartId}
									productId={item.product.id}
									quantity={item.quantity}
								/>

								<RemoveFromCartButton productId={item.product.id} cartId={cartId} />
							</td>
						</tr>
					))}
				</tbody>
			</table>

			<form action={handleStripePaymentAction}>
				<button
					className="text-orange-400-300 mt-2 max-w-sm rounded-sm border bg-green-300 p-2"
					type="submit"
				>
					Pay
				</button>
			</form>
		</div>
	);
}
