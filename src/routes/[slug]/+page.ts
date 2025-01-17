import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const post = await import(`../../posts/${params.slug}.md`);
		return {
			content: post.default,
			metadata: post.metadata
		};
	} catch {
		throw error(404, `${params.slug.toUpperCase()} NOT FOUND`);
	}
}
