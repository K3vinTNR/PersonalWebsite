import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const locale = event.params.locale === 'en' ? 'en' : 'id';
	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%portfolio.lang%', locale)
	});
};
