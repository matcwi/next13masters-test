import { redirect } from "next/navigation";

export default async function CategoriesPage({ params }: { params: { slug: string } }) {
	redirect(`${params.slug.toLowerCase()}/1`);
}
