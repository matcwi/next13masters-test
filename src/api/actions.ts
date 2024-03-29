"use server";
import { cookies } from "next/headers";
import { revalidatePath, revalidateTag } from "next/cache";
import Stripe from "stripe";
import { redirect } from "next/navigation";
import { getCart, addProductToCart, createCart, removeProductFromCart } from "@/api/cart";
import { executeGraphql } from "@/api/graphql/lib";
import { ProductGetByIdDocument, ReviewCreateDocument } from "@/gql/graphql";

export const addProductToCartAction = async (productId: string, quantity: number) => {
	const cartId = cookies().get("cartId")?.value;
	if (cartId) {
		const cart = await getCart(cartId);
		if (cart) {
			const updatedCart = addProductToCart(cart.id, productId, quantity);
			revalidateTag("cart");
			return updatedCart;
		}
	}
	const newCart = await createCart(productId, quantity);
	revalidateTag("cart");
	cookies().set("cartId", newCart.id);
	return newCart;
};

export const removeProductFromCartAction = async (cartId: string, productId: string) => {
	await removeProductFromCart(cartId, productId);
	revalidateTag("cart");
};

export const handleStripePaymentAction = async () => {
	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Missing STRIPE_SECRET_KEY env variable");
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-10-16",
		typescript: true,
	});

	const cartId = cookies().get("cartId")?.value;
	if (!cartId) {
		return;
	}
	const cart = await getCart(cartId);
	if (!cart) {
		return;
	}

	const lineItems = cart.items.map((item) => {
		return {
			price_data: {
				currency: "pln",
				product_data: {
					name: item.product.name,
					description: item.product.description,
					images: item.product.images.map((image) => image.url),
				},
				unit_amount: item.product.price,
			},
			quantity: item.quantity,
		};
	});

	const session = await stripe.checkout.sessions.create({
		metadata: {
			cartId: cart.id,
		},
		line_items: lineItems,
		mode: "payment",
		success_url: `http://localhost:3000/cart/success?session_id={CHECKOUT_SESSION_ID}`,
		cancel_url: `http://localhost:3000/cart/canceled`,
	});
	if (session.url) {
		cookies().set("cartId", "");
		redirect(session.url);
	}
};

export const createReviewAction = async ({
	productId,
	rating,
	description,
	email,
	author,
	title,
}: {
	productId: string;
	rating: number;
	description: string;
	email: string;
	author: string;
	title: string;
}) => {
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
		query: ReviewCreateDocument,
		variables: {
			productId,
			rating,
			description,
			email,
			author,
			title,
		},
	});

	revalidatePath("/product");
};
