import { executeGraphql } from "@/api/graphql/lib";
import { getProductById } from "@/api/products";
import {
	CartGetByIdDocument,
	CartCreateDocument,
	ProductGetByIdDocument,
	CartAddItemDocument,
	CartChangeItemQuantityDocument,
	CartRemoveProductDocument,
} from "@/gql/graphql";

export async function getCart(id: string) {
	const { cart } = await executeGraphql({
		query: CartGetByIdDocument,
		variables: {
			id,
		},
		cache: "no-cache",
	});
	if (cart) {
		return cart;
	}
}

export const createCart = async (productId: string, quantity: number) => {
	const { cartFindOrCreate: newCart } = await executeGraphql({
		query: CartCreateDocument,
		variables: {
			productId,
			quantity,
		},
		next: {
			tags: ["cart"],
		},
	});
	if (!newCart) {
		throw new Error("Failed to create cart");
	}

	return newCart;
};

export const addProductToCart = async (cartId: string, productId: string, quantity: number) => {
	const cart = await getCart(cartId);
	if (!cart) {
		throw new Error(`Cart with id ${cartId} not found`);
	}

	const { product } = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: {
			id: productId,
		},
	});
	if (!product) {
		throw new Error(`Product with id ${productId} not found`);
	}

	const alreadyAddedItem = cart.items.find((item) => item.product.id === productId);
	if (alreadyAddedItem) {
		await changeQuantity(cartId, productId, alreadyAddedItem.quantity + 1);
	} else {
		await executeGraphql({
			query: CartAddItemDocument,
			variables: {
				cartId,
				productId,
				quantity,
			},
			cache: "no-cache",
			next: {
				tags: ["cart"],
			},
		});
	}

	return cart;
};

export const changeQuantity = async (cartId: string, productId: string, quantity: number) => {
	const cart = await getCart(cartId);
	if (!cart) {
		throw new Error(`Cart with id ${cartId} not found`);
	}

	const product = await getProductById(productId);

	if (!product) {
		throw new Error("no product");
	}

	await executeGraphql({
		query: CartChangeItemQuantityDocument,
		variables: {
			cartId,
			productId,
			quantity,
		},
		cache: "no-cache",
	});

	return cart;
};

export const removeProductFromCart = async (cartId: string, productId: string) => {
	const cart = await getCart(cartId);
	if (!cart) {
		throw new Error(`Cart with id ${cartId} not found`);
	}

	const { product } = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: {
			id: productId,
		},
	});
	if (!product) {
		throw new Error(`Product with id ${productId} not found`);
	}

	await executeGraphql({
		query: CartRemoveProductDocument,
		variables: {
			cartId,
			productId,
		},
		cache: "no-cache",
		next: {
			tags: ["cart"],
		},
	});

	return cart;
};
