import { type CartItemFragment } from "@/gql/graphql";

export const formatMoney = (amount: number) => {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(amount);
};

export const calculateTotal = (cart: CartItemFragment) => {
	return cart.items.reduce((acc, item) => {
		if (!item.product) {
			return acc;
		}
		return acc + item.product.price * item.quantity;
	}, 0);
};
