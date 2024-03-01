/// <reference types="stripe-event-types" />

import { type NextRequest } from "next/server";
import Stripe from "stripe";

export async function POST(req: NextRequest): Promise<Response> {
	const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
	if (!webhookSecret) {
		return new Response("No webhook secret", { status: 500 });
	}

	if (!process.env.STRIPE_SECRET_KEY) {
		return new Response("No Stripe secret key", { status: 500 });
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-10-16",
		typescript: true,
	});

	const signature = req.headers.get("stripe-signature");
	if (!signature) {
		return new Response("No signature", { status: 400 });
	}

	const event = stripe.webhooks.constructEvent(
		await req.text(),
		signature,
		webhookSecret,
	) as Stripe.DiscriminatedEvent;

	switch (event.type) {
		case "checkout.session.completed": {
			event.data.object.metadata?.cartId;
		}
		case "checkout.session.async_payment_failed": {
			console.log("Payment failed", event.data.object.metadata?.cartId);
		}
		case "checkout.session.async_payment_succeeded": {
			console.log("Payment succeeded", event.data.object.metadata?.cartId);
		}
		case "checkout.session.expired": {
			console.log("Session expired", event.data.object.metadata?.cartId);
		}
		default: {
			console.log(`Unhandled event type: ${event.type}`);
		}
	}

	return new Response(null, { status: 204 });
}
