"use client";
import { useOptimistic } from "react";
import { type ReviewItemFragment } from "@/gql/graphql";
import { createReviewAction } from "@/api/actions";

export const ReviewsWidget = ({
	reviews,
	productId,
}: {
	reviews: ReviewItemFragment[];
	productId: string;
}) => {
	const [optimisticReviews, setOptimisticReviews] = useOptimistic(
		reviews,
		(_state, newReviews: ReviewItemFragment[]) => {
			return newReviews;
		},
	);

	return (
		<div className="flex flex-row gap-8">
			<div className="flex-1">
				<h2 className="mt-3 text-2xl font-bold">Add Review</h2>
				<form
					data-testid="add-review-form"
					className="flex flex-col gap-4"
					action={async (formData: FormData) => {
						const rating = Number(formData.get("rating") as unknown as string);
						const description = formData.get("content") as unknown as string;
						const email = formData.get("email") as unknown as string;
						const author = formData.get("name") as unknown as string;
						const title = formData.get("headline") as unknown as string;
						const optimisticReviews = [
							...reviews,
							{ id: "", rating, description, email, author, title },
						];
						setOptimisticReviews(optimisticReviews);
						await createReviewAction({
							author,
							description,
							rating,
							title,
							email,
							productId,
						});
					}}
				>
					<label htmlFor="rating" className="text-sm font-medium text-gray-600">
						Rating
					</label>
					<input
						type="number"
						id="rating"
						name="rating"
						className="rounded-md border p-2 focus:border-blue-300 focus:outline-none focus:ring"
					/>

					<label htmlFor="headline" className="text-sm font-medium text-gray-600">
						Headline
					</label>
					<input
						type="text"
						id="headline"
						name="headline"
						className="rounded-md border p-2 focus:border-blue-300 focus:outline-none focus:ring"
					/>

					<label htmlFor="name" className="text-sm font-medium text-gray-600">
						Name
					</label>
					<input
						type="text"
						id="name"
						name="name"
						className="rounded-md border p-2 focus:border-blue-300 focus:outline-none focus:ring"
					/>

					<label htmlFor="email" className="text-sm font-medium text-gray-600">
						Email
					</label>
					<input
						type="text"
						id="email"
						name="email"
						className="rounded-md border p-2 focus:border-blue-300 focus:outline-none focus:ring"
					/>

					<label htmlFor="content" className="text-sm font-medium text-gray-600">
						Content
					</label>
					<textarea
						id="content"
						name="content"
						className="rounded-md border p-2 focus:border-blue-300 focus:outline-none focus:ring"
					/>

					<button
						type="submit"
						className="mt-4 w-full rounded-md bg-blue-600 px-4 py-2 text-white transition duration-300 hover:bg-blue-300 focus:border-blue-300 focus:outline-none focus:ring"
					>
						Submit
					</button>
				</form>
			</div>

			<div className="flex-1">
				<h2 className="mt-3 text-2xl font-bold">Reviews</h2>
				{optimisticReviews.slice(-5).map((review) => (
					<div key={review.id} className="my-4 rounded-md border p-4">
						<div className="flex items-center gap-3">
							<p className="text-lg font-bold">{review.rating}</p>
							<div>
								<p className="text-xl font-bold">{review.title}</p>
								<p className="text-gray-500">{review.author}</p>
							</div>
						</div>
						<p className="mt-2">{review.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};
