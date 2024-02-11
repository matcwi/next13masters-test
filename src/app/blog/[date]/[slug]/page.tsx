export default async function BlogPage({ params }: { params: { date: string; slug: string } }) {
	return (
		<div>
			<h1>
				Blog {params.date} {params.slug}
			</h1>
		</div>
	);
}
